import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';
import { IMetadata } from 'src/app/services/metadata/i-metadata';
import { MetadataService } from 'src/app/services/metadata/metadata.service';

@Component({
  selector: 'app-pakiet-start',
  templateUrl: './pakiet-start.component.html',
  styleUrls: ['./pakiet-start.component.css'],
})
export class PakietStartComponent implements OnInit{

  constructor(
    private ctrlSrv: ControlService,
    private activatedRoute: ActivatedRoute,
    private metadataSrv: MetadataService
  ) { }

  ngOnInit(): void {
    this.ctrlSrv.isHeaderShown$.next(false);
    this.ctrlSrv.isFooterShown$.next(true);
    this.metadataSrv.updateMetadata(this.activatedRoute.snapshot.data as IMetadata);
  }

}
