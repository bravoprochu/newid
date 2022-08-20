import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';


export interface IDIVBasic {

}

@Directive({
  selector: '[bpIntersection]'
})
export class IntersectionDirective implements OnInit, AfterViewInit {


  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
    this.isDestroyed$.unsubscribe();
    this.intersecObs.unobserve(this.elRef.nativeElement);
  }

  ngOnInit(): void {
    this.initIntersectionObservable();    
  }

  ngAfterViewInit(): void {

  }


  intersecObs: IntersectionObserver;
  isDestroyed$: Subject<boolean> = new Subject();


  

  initIntersectionObservable() {
    const _el = this.elRef.nativeElement as HTMLElement;

    this.intersecObs = new IntersectionObserver((entries) => {
      entries.forEach((entry: IntersectionObserverEntry) => {

        if(entry.intersectionRatio == 0) {
          // this.showHideOrigin();
          console.log('is NOT Intersectig !');
          // this.hostBG = this.generateDIV();
          // this.renderer.appendChild(_el, this.hostBG);
        }

        if (entry.intersectionRatio > 0 && entry.intersectionRatio < 0.25) {
          // this.renderer.setStyle(this.elRef.nativeElement, 'display', 'none');
           console.log('interseciotn from 0 ... 0.25');
           
        }
        if (entry.intersectionRatio > 0.25 && entry.intersectionRatio < 0.5) {
           console.log('interseciotn from 0.25 ... 0.5');
        }
        if (entry.intersectionRatio > 0.5 && entry.intersectionRatio < 0.75) {
          // console.log('interseciotn from 0.5 ... 0.75');
          console.log('isIntersectig ! ..start to SHOW.. 0.5 <0.75');
          }
        if (entry.intersectionRatio > 0.75 && entry.intersectionRatio <= 1) {
          // console.log('interseciotn from 0.75 ... 1');
          // 
          // 
          console.log('isIntersectig ! ..start to SHOW.. 0.75 <=1');
        }
      }
      )
    }, {
      threshold: [0, 0.25, 0.5, 0.75, 0.8, 1]
    })

    this.intersecObs.observe(this.elRef.nativeElement);
  }

}



