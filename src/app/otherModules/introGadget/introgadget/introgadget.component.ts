import { animate, AnimationBuilder, style } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, map, pairwise, switchMap, takeUntil, tap, throttleTime } from 'rxjs/operators';
import { IRGBColor } from '../interfaces/i-rgb-color';
import { IWindowSize } from '../interfaces/i-window-size';


const MAP_WINDOW_SIZE = (m: Event)=>{
  const ev = m.target as Window;
  return <IWindowSize>{
    innerHeight: ev.innerHeight, 
    innerWidth: ev.innerWidth
  }
}

const MAP_MOUSE_POS = (m: MouseEvent)=>{
  return <IWindowSize>{
    innerHeight: m.y, 
    innerWidth: m.x
  }
}


@Component({
  selector: 'app-introgadget',
  templateUrl: './introgadget.component.html',
  styleUrls: ['./introgadget.component.css']
})

export class IntrogadgetComponent implements OnInit {
  
  constructor(
    private elRef: ElementRef,
    private builder: AnimationBuilder
  ) { }

  ngOnDestroy(): void {
       this.isDestroyed$.next(true);
       this.isDestroyed$.complete();
       this.isDestroyed$.unsubscribe();
  }

  ngOnInit(): void {
    this.initData();
    this.initEvents();
  }

  animTime: number = 1500;
  colorFrom: IRGBColor;
  colorTo: IRGBColor;

  delayTime: number = this.animTime;
  isDestroyed$: Subject<boolean> = new Subject();
  move$: Observable<IWindowSize>;
  rgb: string;
  windowChange$: any;
  windowHeight: number;
  windowWidth: number;



  initData() {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }
  
  
  initEvents(){
    this.move$ = fromEvent(window, 'mousemove')
    .pipe(
      takeUntil(this.isDestroyed$),
      throttleTime(this.delayTime),
      distinctUntilChanged(),
      map(MAP_MOUSE_POS),
    )


    this.move$
    .subscribe(
      (_move:any)=>{
          this.prepWindowInfo(_move);
          // this.prepPairWiseMoveInfo(_move);           
      },
      (error)=>console.log('_move error', error),
      ()=>{}
 );
    
    

    
  }


  private prepWindowInfo(_windowChange: IWindowSize) {
    this.colorTo = this.convWindowSizeToRGBColor(_windowChange);
    this.paintIt();
  }

  private prepPairWiseMoveInfo(pair: IWindowSize[]) {
    this.colorFrom = this.convWindowSizeToRGBColor(pair[0]);
    this.colorTo = this.convWindowSizeToRGBColor(pair[1]);

    this.paintGradient();
 
  }

  private convTo256(percent:number):number {
    if(percent<=0) {return 0}
    let res = Math.floor(256 * percent);
    return res;
  }

  private convWindowSizeToRGBColor(windowSize: IWindowSize):IRGBColor {
    return <IRGBColor>{
      r: this.convTo256(windowSize.innerHeight / this.windowHeight),
      g: this.convTo256(windowSize.innerWidth / this.windowWidth),
      b: 0,
    }
  }
  private convRGBToString(rgb: IRGBColor): string {
    return `${rgb.r}, ${rgb.b}, ${rgb.g}`;
  }


  private paintGradient() {
    const anim = this.builder.build([
      style({left: '100%'}),
      animate(this.animTime, style({
        backgroundImage: `linear-gradient(to right, rgb(${this.convRGBToString(this.colorFrom)}), rgb(${this.convRGBToString(this.colorTo)})`,
        left: '-100%'
      }))
    ])
    const player = anim.create(this.elRef.nativeElement);
    player.play();     
  }

  private paintIt(){
    const anim = this.builder.build([
      animate(this.animTime, style({backgroundColor: `RGB(${this.convRGBToString(this.colorTo)}`}))
    ])
    const player = anim.create(this.elRef.nativeElement);
    player.play(); 
  }


}
