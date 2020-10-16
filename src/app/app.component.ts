import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BP_ANIM_SLIDEINANIM as BP_ANIM_ROUTE_SLIDEINANIM } from '@sharedAnimations/bp_anim_router_slideInAnimation';
import { ControlService } from './services/control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [BP_ANIM_ROUTE_SLIDEINANIM]
})
export class AppComponent implements OnInit, AfterViewInit {

constructor(
  public ctrSrv: ControlService
) {
    
}
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    
  }

  
  
  title = 'newId';



prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
}



}