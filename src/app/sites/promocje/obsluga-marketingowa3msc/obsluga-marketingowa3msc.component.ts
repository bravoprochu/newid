import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-obsluga-marketingowa3msc',
  templateUrl: './obsluga-marketingowa3msc.component.html',
  styleUrls: ['./obsluga-marketingowa3msc.component.css']
})
export class ObslugaMarketingowa3mscComponent implements OnInit {

  constructor(
    private ctrlSrv:ControlService
  ) { }

  ngOnInit(): void {
    this.ctrlSrv.isHeaderShown$.next(false);
    this.ctrlSrv.isFooterShown$.next(true);
  }

}
