import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMetadata } from 'src/app/services/metadata/i-metadata';
import { MetadataService } from 'src/app/services/metadata/metadata.service';

@Component({
  selector: 'app-obsluga-marketingowa3msc-zamow',
  templateUrl: './obsluga-marketingowa3msc-zamow.component.html',
  styleUrls: ['./obsluga-marketingowa3msc-zamow.component.css']
})
export class ObslugaMarketingowa3mscZamowComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private metadataSrv: MetadataService
  ) { }

  ngOnInit(): void {
    this.metadataSrv.updateMetadata(this.activatedRoute.snapshot.data as IMetadata);
  }

}
