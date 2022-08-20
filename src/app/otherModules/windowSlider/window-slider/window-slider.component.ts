import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSlider } from '@angular/material/slider';
import { BehaviorSubject, fromEvent, merge, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-window-slider',
  templateUrl: './window-slider.component.html',
  styleUrls: ['./window-slider.component.css']
})
export class WindowSliderComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSlider) matSlider: MatSlider

  constructor(
  ) { }

  isDestroyed$: Subject<boolean> = new Subject();
  isSliderVisible: boolean;
  sliderMin: number;
  sliderMax: number;
  sliderLabel: string;
  sliderValue$: BehaviorSubject<number> = new BehaviorSubject(0);
  
  


  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
    this.isDestroyed$.unsubscribe();
    this.sliderValue$.unsubscribe();
  }

  ngOnInit(): void {
    this.initValues();
  }

  ngAfterViewInit(){
    this.initObservables();
  }





  initObservables() {

    const WINRESIZE = fromEvent(window, 'resize').pipe(
      // takeUntil(this.isDestroyed$),
      // throttleTime(THROTTLE_TIME)
    )

    const SCROLLY = fromEvent(window, 'scroll').pipe(
      // takeUntil(this.isDestroyed$),
      // throttleTime(THROTTLE_TIME)
    )


    const MAT_SLIDER_CHANGE = this.matSlider.valueChange.pipe(

    )


    const ALL_COMBINED = merge(WINRESIZE, SCROLLY, MAT_SLIDER_CHANGE).pipe(
     
    )





    ALL_COMBINED.pipe(
      takeUntil(this.isDestroyed$),
      debounceTime(100),
      switchMap((sw:any) => {

        if(sw instanceof Event) {
          this.matSlider.value = window.pageYOffset;
          this.initValues();
        }

        if(!isNaN(sw)){
          window.scroll({top: sw})
          return of().pipe(delay(500));
        }
        return of(sw);
      })     
    )
    .subscribe(
         (_scroll:any)=>{
            const _res = ((_scroll as Event));
            //console.log('_scroll subs:', _res, window.pageYOffset);
            // this.initValues();

            // console.log(_scroll);
            
              
         },
         (error)=>console.log('_scroll error', error),
         ()=>console.log('_scroll completed..')
    );
    













  }

  initValues(){

    const BODY_SCROLL_HEIGHT = document.body.scrollHeight;
    const BODY_OFFSET_HEIGHT = document.body.offsetHeight;
    const BODY_CLIENT_HEIGHT = document.body.clientHeight;

    const DOCUMENT_ELEMENT_SCROLL_HEIGHT = document.documentElement.scrollHeight;
    const DOCUMENT_ELEMENT_OFFSET_HEIGHT = document.documentElement.offsetHeight;
    const DOCUMENT_ELEMENT_CLIENT_HEIGHT = document.documentElement.clientHeight;

    let scrollHeight = Math.max(
      BODY_SCROLL_HEIGHT,
      BODY_OFFSET_HEIGHT,
      BODY_CLIENT_HEIGHT,
      DOCUMENT_ELEMENT_SCROLL_HEIGHT,
      DOCUMENT_ELEMENT_OFFSET_HEIGHT,
      DOCUMENT_ELEMENT_CLIENT_HEIGHT
    );



    const IS_BODY_SCROLL_GREATER_THEN_CLIENT_HEIGHT = BODY_CLIENT_HEIGHT <= BODY_CLIENT_HEIGHT;

    this.isSliderVisible = IS_BODY_SCROLL_GREATER_THEN_CLIENT_HEIGHT ? true: false;
    this.sliderMax = IS_BODY_SCROLL_GREATER_THEN_CLIENT_HEIGHT ? BODY_SCROLL_HEIGHT - BODY_CLIENT_HEIGHT : 0;
    this.sliderMin = 0;

    console.log(`initValues: min: ${this.sliderMin} | max: ${this.sliderMax}`);
    // console.log('--- heights: ');
    // console.log(`doc body SCROLL_HEIGHT: ${BODY_SCROLL_HEIGHT}`);
    // console.log(`doc body OFFSET_HEIGHT: ${BODY_OFFSET_HEIGHT}`);
    // console.log(`doc body CLIENT_HEIGHT: ${BODY_CLIENT_HEIGHT}`);

    // console.log(`doc elementScroll SCROLL_HEIGHT: ${DOCUMENT_ELEMENT_SCROLL_HEIGHT}`);
    // console.log(`doc elementScroll OFFSET_HEIGHT: ${DOCUMENT_ELEMENT_OFFSET_HEIGHT}`);
    // console.log(`doc elementScroll CLIENT_HEIGHT: ${DOCUMENT_ELEMENT_CLIENT_HEIGHT}`);
    // console.log('--------------');
    


  }




}
