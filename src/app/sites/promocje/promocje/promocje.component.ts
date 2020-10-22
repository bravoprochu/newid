import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-promo',
  templateUrl: './promocje.component.html',
  styleUrls: ['./promocje.component.css']
})
export class PromocjeComponent implements OnInit {

  constructor(private ctrlSrv: ControlService) { }

  ngOnInit(): void {
    this.ctrlSrv.isHeaderShown$.next(true);
    this.ctrlSrv.isFooterShown$.next(false);
  }

}
