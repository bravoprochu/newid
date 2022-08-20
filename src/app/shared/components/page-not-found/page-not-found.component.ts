import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ControlService } from 'src/app/services/control.service';
import { IMetadata } from 'src/app/services/metadata/i-metadata';
import { MetadataService } from 'src/app/services/metadata/metadata.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private ctrlSrv:ControlService,
    private meta: Meta,
    private title: Title
  ) { }
  

  
  ngOnInit(): void {
    this.ctrlSrv.isHeaderShown$.next(true);
    this.ctrlSrv.isFooterShown$.next(false);

    this.updateMeta();





  }

  updateMeta(){
    this.title.setTitle('404 - Nie znaleziono strony');
    this.meta.updateTag({
      name: 'robots',
      content: 'noindex'
    });

  }

}
