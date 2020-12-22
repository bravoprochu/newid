import { AfterViewInit, Directive, ElementRef, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { interval, of, Subject, timer } from 'rxjs';
import { first, scan, take, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appAppearFromBottom]'
})
export class AppearFromBottomDirective implements OnInit, OnDestroy, AfterViewInit {

  constructor(
    private elRef: ElementRef,
    private ngZone: NgZone,
    private renderer: Renderer2
    ) { }

  ngOnDestroy(): void {
       this.isDestroyed$.next(true);
       this.isDestroyed$.complete();
       this.isDestroyed$.unsubscribe();
  }
  
  ngOnInit(): void {
    console.warn('appearFromBottom init');


    

  }

  ngAfterViewInit(): void {
    this.initValues();
    this.copyELements();
    this.initIntersectionObservable();
  }
  
  boxWidth: number;
  boxHeight: number;
  childs: Node[] = [];
  divContainer: HTMLDivElement;
  isDestroyed$: Subject<boolean> = new Subject();
  isAppearing: boolean;
  intersecObs:IntersectionObserver;
  
  



  async appearContent(){
    console.log('appear content...');
    if(this.isAppearing) {return;}

    const _HTML_ELEMENT = this.elRef.nativeElement as HTMLElement;

    //
    // remove first child -> div block
    //
    
    console.log('remove first...', this.divContainer);
    this.renderer.removeChild(_HTML_ELEMENT, this.divContainer);
    
    

    //
    // add every second child
    //


    timer(0, 350).pipe(
      takeUntil(this.isDestroyed$),
      take(this.childs.length),
    )
    .subscribe(
         (_times:any)=>{
              console.log('_times subs:', _times);
              this.renderer.appendChild(_HTML_ELEMENT, this.childs[_times]);              
         },
         (error)=>console.log('_times error', error),
         ()=>console.log('_times completed..')
    );


    
    
    

    this.intersecObs.unobserve(this.elRef.nativeElement);
    this.isAppearing = true;
  }

  copyELements() {
    //
    // copy all elements
    //
    const _HTML_ELEMENT = this.elRef.nativeElement as HTMLElement;

    for (let index = 0; index < _HTML_ELEMENT.childNodes.length; index++) {
      const child = _HTML_ELEMENT.childNodes[index];


      const childClone = child.cloneNode(true);
      this.childs.push(childClone);           
      this.renderer.removeChild(_HTML_ELEMENT.childNodes, child);
    }
    

    console.log(this.childs, this.elRef.nativeElement);


    //
    // add div block
    //

    this.divContainer = this.renderer.createElement('div');
    this.renderer.setStyle(this.divContainer, 'width', '100%');
    this.renderer.setStyle(this.divContainer, 'minHeight', '100vh');

    

    // this.renderer.appendChild(this.divContainer, this.renderer.createText(" no way"));
    this.renderer.appendChild(_HTML_ELEMENT, this.divContainer)


    
  }

  initValues(){
    //
    // get bounding box height/width
    //

    
    const _HTML_ELEMENT = this.elRef.nativeElement as HTMLElement;

    this.boxWidth = _HTML_ELEMENT.getBoundingClientRect().width;
    this.boxHeight =_HTML_ELEMENT.getBoundingClientRect().height; 



  }



  
  
    initIntersectionObservable() {
      this.intersecObs = new IntersectionObserver((entries)=>{
        entries.forEach((entry: IntersectionObserverEntry)=>{
  
       
          
          if(entry.intersectionRatio>=0.35) {
            console.log('observable:', entry.intersectionRatio)
            this.appearContent();
            this.ngZone.run(()=>{
              
            })
            
          }
          // if(entry.intersectionRatio>0.5 && entry.intersectionRatio < 0.75) {
          //   console.log('interseciotn from 0.5 ... 0.75');
          // }
          // if(entry.intersectionRatio>0.75 && entry.intersectionRatio <= 1) {
          //   console.log('interseciotn from 0.75 ... 1');
          // }
        }
      )},{
        threshold: [0.15, 0.25, 0.33, 0.5]
      })
  
      this.intersecObs.observe(this.elRef.nativeElement);
  
    }


}
