import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-yt-player',
  templateUrl: './yt-player.component.html',
  styleUrls: ['./yt-player.component.css']
})
export class YtPlayerComponent implements OnInit, AfterViewInit {
  @Input('id') id: string = 'IIIgdZNxVaM';
  @Input('scale') scale: number = 0.95;
  @ViewChild('youtubePlayer') ytPlayer: YouTubePlayer;

  constructor(
    private elRef: ElementRef,
    private changDet: ChangeDetectorRef,
    private ngZone: NgZone
   ) { }

  ngOnDestroy(): void {
       this.isDestroyed$.next(true);
       this.isDestroyed$.complete();
       this.isDestroyed$.unsubscribe();
       this.intersecObs.unobserve(this.elRef.nativeElement);
  }
  
  
  ngAfterViewInit(): void {   

    setTimeout(()=>{
      this.recalcWidthAndHeight();
      this.initVideo();
      this.isVideoShown = true;
    }, 1500)
  }


  ngOnInit(): void {
    this.initObservables();
  }

  
  intersecObs:IntersectionObserver;
  isApiLoaded: boolean;
  isDestroyed$: Subject<boolean> = new Subject();
  isPlaying: boolean;
  isVideoShown: boolean;
  playerState: number = -1;
  videoWidth: number = 320;
  videoHeight: number = 180;
  videoRatio: number = 1.618033;



    
  
  
  initIntersectionObservable() {
    this.intersecObs = new IntersectionObserver((entries)=>{
      entries.forEach((entry: IntersectionObserverEntry)=>{

        if(!entry.isIntersecting && this.isPlaying) {
          this.ytPlayer.pauseVideo();
          this.isPlaying = false;
        } 
        
        if(entry.isIntersecting && !this.isPlaying && entry.intersectionRatio >= 0.75){
          this.ytPlayer.playVideo();
          this.isPlaying = true;
        }        
      }
    )},{
      threshold: [0.25, 0.5, .75, 1]
    })


    this.intersecObs.observe(this.elRef.nativeElement);
  }


  initObservables(){
    const windowResize$ = '';
    
    fromEvent(window, 'resize').pipe(
      takeUntil(this.isDestroyed$),
    )
    .subscribe(
         (_resizeWindow:any)=>{
              this.recalcWidthAndHeight();
         },
         (error)=>console.log('_resizeWindow error', error),
    );
  }

  initVideo(){
    if(!this.isApiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }    
  }


  playerReady(ev: Event) {
    this.isApiLoaded = true;
    this.initIntersectionObservable();
    
  }


  stateChange(ev: Event) {
    this.playerState = ev['data'];
  }

  private recalcWidthAndHeight() {
    const el = (<HTMLElement>this.elRef.nativeElement);
    // this.videoWidth = Math.round(el.parentElement.clientWidth * 1);
    this.videoWidth = Math.round(el.parentElement.getBoundingClientRect().width * this.scale);
    this.videoHeight = Math.round(this.videoWidth / this.videoRatio);
  }

}
