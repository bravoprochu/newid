import { Component, OnInit } from '@angular/core';
import { BP_ANIM_BRICK_LIST } from '@sharedAnimations/bp-anim-brick-list';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [BP_ANIM_BRICK_LIST(1000,150, 'div')  ]
})
export class HeaderComponent implements OnInit {

  constructor(public ctrlSrv: ControlService) { }

  ngOnInit(): void {
    return;
  }

}
