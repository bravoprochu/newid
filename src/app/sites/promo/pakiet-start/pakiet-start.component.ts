import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BP_ANIM_BRICK_LIST } from '@sharedAnimations/bp-anim-brick-list';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-pakiet-start',
  templateUrl: './pakiet-start.component.html',
  styleUrls: ['./pakiet-start.component.css'],
})
export class PakietStartComponent implements OnInit{

  constructor(
    private ctrlSrv:ControlService
  ) { }

  ngOnInit(): void {
    this.ctrlSrv.isHeaderShown$.next(false);
    this.ctrlSrv.isFooterShown$.next(true);
  }

}
