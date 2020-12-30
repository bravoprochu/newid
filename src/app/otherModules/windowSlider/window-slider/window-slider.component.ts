import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MatSlider } from '@angular/material/slider';
import { empty, fromEvent, of } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { delay, repeat, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-window-slider',
  templateUrl: './window-slider.component.html',
  styleUrls: ['./window-slider.component.css']
})
export class WindowSliderComponent implements OnInit, AfterViewInit {
  // @Input('windowSliderElementToScroll') windowSliderElementToScroll: ElementRef | window;
  @ViewChild(MatSlider) matSlider: MatSlider

  constructor() { }

  isDestroyed$: Subject<boolean> = new Subject();
  sliderMin: number;
  sliderMax: number;
  sliderLabel: string;
  sliderValue: number;


  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
    this.isDestroyed$.unsubscribe();
  }

  ngOnInit(): void {
    this.initValues();
    

    
    
  }

  ngAfterViewInit(){
    this.initObservables();
  }


  


  initObservables() {
    const SCROLL = fromEvent(window, 'scroll').pipe(
      switchMap((sw:Event)=>{
        
        return delay(500);
      })
    )
    .subscribe(
         (_windowChange:any)=>{
              console.log('_windowChange subs:', _windowChange);
              
         },
         (error)=>console.log('_windowChange error', error),
         ()=>console.log('_windowChange completed..')
    );




    const SLIDER_MOVE = this.matSlider.valueChange.pipe(
      switchMap((sw:number)=> {
        window.scrollTo({top: sw, behavior: 'smooth'});
        return of();
      })
    )
    .subscribe(
         (_scroll:any)=>{

          console.log('matSLider', _scroll)
              
         },
         (error)=>console.log('_scroll error', error),
         ()=>console.log('_scroll completed..')
    );

    // this.matSlider.valueChange.pipe(
    //   takeUntil(this.isDestroyed$),
    //   switchMap((value:number)=>{
    //     window.scroll({behavior: 'smooth', top: value});

    //     return delay(500);
    //   }),
    //   repeat()

    // )
    // .subscribe(
    //      (_sliderChanged:any)=>{
    //           console.log('_sliderChanged subs:', _sliderChanged);
              
              
    //      },
    //      (error)=>console.log('_sliderChanged error', error),
    //      ()=>console.log('_sliderChanged completed..')
    // );


    
  }

  initValues(){
    this.sliderMax = document.body.scrollHeight;

    console.log(`min: ${this.sliderMin} | max: ${this.sliderMax}`);
    


  }

}
