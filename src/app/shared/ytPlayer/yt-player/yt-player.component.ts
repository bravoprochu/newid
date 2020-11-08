import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-yt-player',
  templateUrl: './yt-player.component.html',
  styleUrls: ['./yt-player.component.css']
})
export class YtPlayerComponent implements OnInit, AfterViewInit {
  @Input('id') id: string = 'Bd384WTfhDo';

  constructor(
    private elRef: ElementRef
   ) { }

  ngOnDestroy(): void {
       this.isDestroyed$.next(true);
       this.isDestroyed$.complete();
       this.isDestroyed$.unsubscribe();
  }
  
  
  ngAfterViewInit(): void {
    

    setTimeout(()=>{
      this.recalcWidthAndHeight();
      this.initVideo();
      this.isVideoShown = true;
    })
  }


  ngOnInit(): void {
    this.initObservables();
  }



  isDestroyed$: Subject<boolean> = new Subject();
  isVideoShown: boolean
  videoWidth: number = 320;
  videoHeight: number = 180;
  videoRatio: number = 1.8;


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
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    
  }

  private recalcWidthAndHeight() {
    const el = (<HTMLElement>this.elRef.nativeElement);
    this.videoWidth = Math.round(el.parentElement.clientWidth * 1);
    this.videoHeight = Math.round(this.videoWidth / this.videoRatio);
     // console.log('width/height:', this.videoWidth, this.videoHeight);
  }

}
