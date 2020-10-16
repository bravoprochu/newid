import { AfterViewInit, Component, OnInit } from '@angular/core';
import {} from '@sharedAnimations/bp_anim_enter_leave_from_side'
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(
    private ctrlSrv: ControlService
    ) { }
  
  
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.ctrlSrv.isHeaderShown$.next(true);
    this.ctrlSrv.isFooterShown$.next(false);
  }

}
