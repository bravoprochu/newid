import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';
import { IMetadata } from 'src/app/services/metadata/i-metadata';
import { MetadataService } from 'src/app/services/metadata/metadata.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private ctrlSrv: ControlService,
    private activatedRoute: ActivatedRoute,
    private metadataSrv: MetadataService
    
  ) { }

  ngOnInit(): void {
    this.ctrlSrv.isHeaderShown$.next(true);
    this.ctrlSrv.isFooterShown$.next(false);
    this.mailto = encodeURIComponent("mailto:info@newId.pl?subject=Pakiet Start&body=<b>Proszę o kontakt w sprawie zakupu pakietu startowego dla firm");
    this.metadataSrv.updateMetadata(this.activatedRoute.snapshot.data as IMetadata);
  }

  mailto: string;




}
