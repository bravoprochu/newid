import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BP_ANIM_BRICK_LIST } from '@sharedAnimations/bp-anim-brick-list';
import { Subject } from 'rxjs';
import { ControlService } from 'src/app/services/control.service';
import { IMetadata } from 'src/app/services/metadata/i-metadata';
import { MetadataService } from 'src/app/services/metadata/metadata.service';

@Component({
  selector: 'app-kaczy-brzeg',
  templateUrl: './kaczy-brzeg.component.html',
  styleUrls: ['./kaczy-brzeg.component.css'],
  animations: [BP_ANIM_BRICK_LIST(1500,100,'img')]
})
export class KaczyBrzegComponent implements OnInit, AfterViewInit {

  constructor(
    private ctrlSrv:ControlService,
    private activatedRoute: ActivatedRoute,
    private metadataSrv: MetadataService
  ) { }


  ngOnDestroy(): void {
       this.isDestroyed$.next(true);
       this.isDestroyed$.complete();
       this.isDestroyed$.unsubscribe();
  }
  ngAfterViewInit(): void {
    
  }
  
  
  

  ngOnInit(): void {
    this.ctrlSrv.isHeaderShown$.next(true);
    this.ctrlSrv.isFooterShown$.next(true);
    this.metadataSrv.updateMetadata(this.activatedRoute.snapshot.data as IMetadata);
  }


  isDestroyed$: Subject<boolean> = new Subject()



}
