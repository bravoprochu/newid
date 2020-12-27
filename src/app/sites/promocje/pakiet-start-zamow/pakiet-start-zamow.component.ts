import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';
import { IMetadata } from 'src/app/services/metadata/i-metadata';
import { MetadataService } from 'src/app/services/metadata/metadata.service';

@Component({
  selector: 'app-pakiet-start-zamow',
  templateUrl: './pakiet-start-zamow.component.html',
  styleUrls: ['./pakiet-start-zamow.component.css'],
})
export class PakietStartZamowComponent implements OnInit {

  constructor(
    private ctrlSrv: ControlService,
    private activatedRoute: ActivatedRoute,
    private metadataSrv: MetadataService
  ) { }

  ngOnInit(): void {
    this.ctrlSrv.isHeaderShown$.next(true);
    this.ctrlSrv.isFooterShown$.next(true);
    this.metadataSrv.updateMetadata(this.activatedRoute.snapshot.data as IMetadata);
  }

}
