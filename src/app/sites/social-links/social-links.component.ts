import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BP_ANIM_BRICK_LIST } from '@sharedAnimations/bp-anim-brick-list';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css'],
  animations: [BP_ANIM_BRICK_LIST(1000,150, 'g')]
})
export class SocialLinksComponent implements OnInit, OnDestroy {
  @Input('delayFullTime') dalayAnimFullTime: number = 500;
  @Input('delayTimeout') delayTimeout: number = 3000;

  constructor() { }
  
  ngOnDestroy(): void {
    this.isShown = false;
  }
  
  ngOnInit(): void {
    this.initDelay();
    this.isShown=true;
  }

  
  
  delayArr:number[] = [];
  isShown:boolean;
  svgIconsCount: number = 4;
  





  initDelay(){
    for (let index = this.svgIconsCount; index >= 0; index--) {
      const element = this.svgIconsCount[index];
      this.delayArr.push(this.getPathLengthDelayTime(index));
    }
  }


  getPathLengthDelayTime(el: number):number {
    let startTime = this.delayTimeout - (el* this.dalayAnimFullTime);
    startTime = startTime <= 0? 0: startTime;
    const res =  Math.floor((startTime));
    return res;
  }

}
