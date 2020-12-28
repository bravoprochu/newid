
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router';

import { ControlService } from 'src/app/services/control.service';
import { IMetadata } from 'src/app/services/metadata/i-metadata';
import { MetadataService } from 'src/app/services/metadata/metadata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(
    private ctrlSrv: ControlService,
    private metaSrv: MetadataService,
    private activatedRoute: ActivatedRoute
    ) { }
  
  
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.metaSrv.updateMetadata(this.activatedRoute.snapshot.data as IMetadata);

    this.ctrlSrv.isHeaderShown$.next(true);
    this.ctrlSrv.isFooterShown$.next(false);
  }

}
