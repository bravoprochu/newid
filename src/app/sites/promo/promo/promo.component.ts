import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {

  constructor(private ctrlSrv: ControlService) { }

  ngOnInit(): void {
    this.ctrlSrv.isHeaderShown$.next(true);
    this.ctrlSrv.isFooterShown$.next(false);
  }

}
