import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-image-preload',
  templateUrl: './image-preload.component.html',
  styleUrls: ['./image-preload.component.css']
})
export class ImagePreloadComponent implements OnInit, AfterViewInit {
  @ViewChild('img') img: ElementRef;
  @Input('src') src: string;
  @Input('alt') alt: string;


  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2

  ) { }

  ngOnDestroy(): void {
       this.isDestroyed$.next(true);
       this.isDestroyed$.complete();
       this.isDestroyed$.unsubscribe();
       this.intersecObs.disconnect();
  }

  ngOnInit(): void {
    this.initIntersectionObservable();

  }

  ngAfterViewInit(): void {
    this.boundingBox = (this.elRef.nativeElement as HTMLDivElement).getBoundingClientRect();
    this.isVisible = true; 
  }


  intersecObs:IntersectionObserver;
  isDestroyed$: Subject<boolean> = new Subject();
  isVisible: boolean;
  isImgLoaded: boolean;
  isImgLoading: boolean;
  boundingBox: DOMRect;
  imgAlt: string = "";
  imgSrc: string = "";

  
    
  
  
    initIntersectionObservable() {
      this.intersecObs = new IntersectionObserver((entries)=>{
        entries.forEach((entry: IntersectionObserverEntry)=>{

          if(entry.intersectionRatio==0) {
            
          }
       
          if(entry.intersectionRatio>0 && entry.intersectionRatio < 0.25) {
            
          }
          if(entry.intersectionRatio>0.25 && entry.intersectionRatio < 0.5) {
            
          }
          if(entry.intersectionRatio>0.5 && entry.intersectionRatio < 0.75) {
              this.initImgLoad();
              
              
          }
          if(entry.intersectionRatio>0.75 && entry.intersectionRatio <= 1) {
              this.initImgLoad();
              
          }
  
        }
      )},{
        threshold: [0, 0.25, 0.5, 0.75, 1]
      })
  
      this.intersecObs.observe(this.elRef.nativeElement);
  
    }




  initImgLoad() {
    if(this.isImgLoaded || this.isImgLoading) {return;}
    const imgEl = (this.img.nativeElement as HTMLImageElement);
    this.isImgLoading = true;
    this.renderer.setStyle(imgEl, 'display', 'none');
    this.imgSrc = this.src;
    this.imgAlt = this.alt;

    imgEl.onload = (_img: Event)=>{
      this.isImgLoaded = true;
      this.renderer.setStyle(imgEl, 'width', '100%');
      this.renderer.removeStyle(imgEl, 'display');
      const divNodes = (this.elRef.nativeElement as HTMLElement).childNodes[0];
      this.renderer.removeChild(this.elRef.nativeElement, divNodes.childNodes[1]);
      this.intersecObs.unobserve(this.elRef.nativeElement);
    }
  }



}

