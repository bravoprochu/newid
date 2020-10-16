import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-pakiet-start-zamow',
  templateUrl: './pakiet-start-zamow.component.html',
  styleUrls: ['./pakiet-start-zamow.component.css']
})
export class PakietStartZamowComponent implements OnInit {

  constructor(
    private ctrlSrv:ControlService
  ) { }

  ngOnInit(): void {
    this.ctrlSrv.isHeaderShown$.next(true);
    this.ctrlSrv.isFooterShown$.next(false);
  }

}
