import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-kaczy-brzeg',
  templateUrl: './kaczy-brzeg.component.html',
  styleUrls: ['./kaczy-brzeg.component.css']
})
export class KaczyBrzegComponent implements OnInit, AfterViewInit {

  constructor(
    private ctrlSrv:ControlService,
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
  }


  isDestroyed$: Subject<boolean> = new Subject()



}
