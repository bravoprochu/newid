import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BP_ANIM_OPACITY_INIT } from '@sharedAnimations/bp-anim-opacity-init';
import { BP_ANIM_SVG_INIT } from '@sharedAnimations/bp_anim_svg-init';
import { Subject } from 'rxjs';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-obsluga-marketingowa3msc',
  templateUrl: './obsluga-marketingowa3msc.component.html',
  styleUrls: ['./obsluga-marketingowa3msc.component.css'],
  animations: [
    BP_ANIM_SVG_INIT(300, 300, 'path'),
    BP_ANIM_OPACITY_INIT(2000)
    
    
  ]
})
export class ObslugaMarketingowa3mscComponent implements OnInit, AfterViewInit {
  @ViewChild('svgGotYourBack') svgGotYourBack: ElementRef;
  

  constructor(
    private ctrlSrv:ControlService,
    private router: Router,
    private vieportScroller: ViewportScroller
  ) { }
  

  ngOnDestroy(): void {
       this.isDestroyed$.next(true);
       this.isDestroyed$.complete();
       this.isDestroyed$.unsubscribe();
       this.intersecObsGotYourBack.unobserve(this.svgGotYourBack.nativeElement);
  }
  
  ngOnInit(): void {
    this.ctrlSrv.isHeaderShown$.next(false);
    this.ctrlSrv.isFooterShown$.next(true);
  }

  ngAfterViewInit(): void {
    this.initIntersectionObservableGotyourBack();
  }

  apiLoaded: boolean
  isVid01Shown: boolean;
  isVisible: boolean;
  isLogoVisible: boolean;
  isDestroyed$: Subject<boolean> = new Subject();
  siteMargin: number = 0.9;
  

  intersecObsGotYourBack:IntersectionObserver;


  initIntersectionObservableGotyourBack() {
    this.intersecObsGotYourBack = new IntersectionObserver((entries)=>{
      entries.forEach((entry: IntersectionObserverEntry)=>{


        if(!entry.isIntersecting) {
          this.isLogoVisible = false;
          
        } 
        
        if(entry.intersectionRatio>0 && entry.intersectionRatio < 0.25) {
          
          this.isVisible = false;
        }
        if(entry.intersectionRatio>0.25 && entry.intersectionRatio < 0.5) {
          
        }
        if(entry.intersectionRatio>0.5 && entry.intersectionRatio < 0.75) {
          
          this.isVisible = true;
        }
        if(entry.intersectionRatio>0.95 && entry.intersectionRatio <= 1) {
          
          this.isLogoVisible = true;
        }
      }

    )},{
      threshold: [0.25, 0.5, .75, 1]
    })

    this.intersecObsGotYourBack.observe(this.svgGotYourBack.nativeElement);

  }


}
