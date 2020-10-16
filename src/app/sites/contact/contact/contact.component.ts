import { Component, OnDestroy, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private ctrlSrv: ControlService
  ) { }

  ngOnInit(): void {
    this.ctrlSrv.isHeaderShown$.next(true);
    this.ctrlSrv.isFooterShown$.next(false);
    this.mailto = encodeURIComponent("mailto:info@newId.pl?subject=Pakiet Start&body=<b>Proszę o kontakt w sprawie zakupu pakietu startowego dla firm");
  }

  mailto: string;



}
