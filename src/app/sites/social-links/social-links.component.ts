import { Component, OnDestroy, OnInit } from '@angular/core';
import { BP_ANIM_BRICK_LIST } from '@sharedAnimations/bp-anim-brick-list';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css'],
  animations: [BP_ANIM_BRICK_LIST(1000,150, 'g')]
})
export class SocialLinksComponent implements OnInit, OnDestroy {

  constructor() { }
  
  ngOnDestroy(): void {
    this.isShown = false;
  }
  
  ngOnInit(): void {
    this.isShown=true;
  }

  isShown:boolean;

}
