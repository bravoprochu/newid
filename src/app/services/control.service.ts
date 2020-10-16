import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor() {
    this.isHeaderShown$ = new BehaviorSubject(true);
    this.isFooterShown$ = new BehaviorSubject(true);
    
   }



  isHeaderShown$: BehaviorSubject<boolean>;
  isFooterShown$: BehaviorSubject<boolean>;

}
