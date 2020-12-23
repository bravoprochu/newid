import { animate, AnimationBuilder, query, stagger, style } from '@angular/animations';
import { Directive, ElementRef, Input, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appAppearIntersectionFromBottom]'
})
export class AppearIntersectionFromBottomDirective implements OnInit, OnDestroy {
  @Input('appearElementsToAnim') appearElementsToAnim: string = "div";
  @Input('appearIntersectionRatio') appearIntersectionRatio: number = 0.3;

  constructor(
    private builder: AnimationBuilder,
    private elRef: ElementRef,
    private renderer: Renderer2
    ) { }

  ngOnDestroy(): void {
       this.isDestroyed$.next(true);
       this.isDestroyed$.complete();
       this.isDestroyed$.unsubscribe();
       this.intersectionObserverUnsubscribe();
  }
  
  ngOnInit(): void {
    this.initIntersectionObservable();
    // this.renderer.setStyle(this.elRef.nativeElement, 'position', 'relative');
  }

  
  childs: Node[] = [];
  divContainer: HTMLDivElement;
  isAnimating: boolean;
  isDestroyed$: Subject<boolean> = new Subject();
  isAppearing: boolean;
  intersecObs:IntersectionObserver;
  



  hideElements() {
    const hideAnim = this.builder.build([
      query(this.appearElementsToAnim, style({
        transform: 'translate3d(0, 100vh, 0)',
        opacity: 0
      }), {optional: true})

    ]);

    const player = hideAnim.create(this.elRef.nativeElement);

    this.isAnimating = false;
    player.play();
    

  }

  
  initIntersectionObservable() {
    this.intersecObs = new IntersectionObserver((entries)=>{
      entries.forEach((entry: IntersectionObserverEntry)=>{
        if(!this.isAnimating) {

        if(entry.isIntersecting && entry.intersectionRatio>= this.appearIntersectionRatio) {
          this.showElements()
        }
        if(!entry.isIntersecting) {
          this.hideElements();
        }
      }
      }
    )},{
      threshold: [this.appearIntersectionRatio]
    })

    this.intersecObs.observe(this.elRef.nativeElement);
  }

  intersectionObserverUnsubscribe() {
    this.intersecObs.unobserve(this.elRef.nativeElement);
  }

  showElements(){
    this.isAnimating = true;
    
    const hideAnim = this.builder.build([
      query(this.appearElementsToAnim, [
        stagger(250, animate('750ms ease-in' , style({
          transform: 'translate3d(0, 0, 0)',
          opacity: 1          
        })))
      ], {optional: true})

    ]);

    const player = hideAnim.create(this.elRef.nativeElement, {
    });

    player.play();
    

    player.onDone(()=>{
      this.isAnimating = false;
      this.intersectionObserverUnsubscribe();
    })

  }


}
