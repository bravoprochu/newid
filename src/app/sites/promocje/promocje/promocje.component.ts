import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';
import { IMetadata } from 'src/app/services/metadata/i-metadata';
import { MetadataService } from 'src/app/services/metadata/metadata.service';

@Component({
  selector: 'app-promo',
  templateUrl: './promocje.component.html',
  styleUrls: ['./promocje.component.css']
})
export class PromocjeComponent implements OnInit {

  constructor(
    private ctrlSrv: ControlService,
    private activatedRoute: ActivatedRoute,
    private metadataSrv: MetadataService
    
  ) { }

  ngOnInit(): void {
    this.ctrlSrv.isHeaderShown$.next(true);
    this.ctrlSrv.isFooterShown$.next(false);
    
    
    this.metadataSrv.updateMetadata(this.activatedRoute.snapshot.data as IMetadata);
  }

}
