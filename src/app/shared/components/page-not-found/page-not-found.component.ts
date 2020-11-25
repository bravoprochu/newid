import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private ctrlSrv:ControlService,
  ) { }
  

  
  ngOnInit(): void {
    this.ctrlSrv.isHeaderShown$.next(true);
    this.ctrlSrv.isFooterShown$.next(false);
  }

}
