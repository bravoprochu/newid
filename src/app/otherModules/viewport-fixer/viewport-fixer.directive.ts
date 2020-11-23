import { animate, AnimationBuilder, style } from '@angular/animations';
import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, map, takeUntil } from 'rxjs/operators';
import { IViewport } from './interfaces/i-viewport';

@Directive({
  selector: '[appViewportFixer]'
})
export class ViewportFixerDirective implements OnInit, OnDestroy {

  constructor(
    private elRef: ElementRef,
    private builder: AnimationBuilder
  ) {
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
    this.isDestroyed$.unsubscribe();
  }

  ngOnInit(): void {
    // console.log('viewportFixer init !', this.elRef.nativeElement);
    this.initObservables()
    this.fixSize(this.getViewPortSize(window));
  }

  isDestroyed$: Subject<boolean> = new Subject();
  debounceTime: number = 250;
  viewPortSize: IViewport = <IViewport>{}


  initObservables() {
    const windowMove$ = fromEvent(window, 'resize').pipe(
      takeUntil(this.isDestroyed$),
      debounceTime(this.debounceTime),
      map((m: Event) => {
        return this.getViewPortSize(m.target as Window);
      })
    )

    windowMove$
      .subscribe(
        (_windoMove$: IViewport) => {
          console.log('_windoMove$ subs:', _windoMove$);
          this.fixSize(_windoMove$);
        },
        (error) => console.log('_windoMove$ error', error),
        () => console.log('_windoMove$ completed..')
      );
  }





  private getViewPortSize(w: Window): IViewport {
    return <IViewport>{
      height: w.innerHeight,
      width: w.innerWidth
    }
  }

  private fixSize(viewport: IViewport) {

    const animResize = this.builder.build([
      animate(this.debounceTime, style({
        height: `${viewport.height - 50}px`,
        width: `${viewport.width}px`,
      }))
    ])

    console.log('fixSize', viewport);
    const player = animResize.create(this.elRef.nativeElement);
    player.onDone(() => {
      console.log('anim finished...')
    })
    player.play();


  }

}
