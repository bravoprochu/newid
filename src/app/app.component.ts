import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent, RouterOutlet } from '@angular/router';
import { BP_ANIM_SLIDEINANIM as BP_ANIM_ROUTE_SLIDEINANIM } from '@sharedAnimations/bp_anim_router_slideInAnimation';
import { GoogleAnalyticsService } from '@sharedServices/google-analytics.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ControlService } from './services/control.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [BP_ANIM_ROUTE_SLIDEINANIM]
})
export class AppComponent implements OnInit, AfterViewInit {

constructor(
  public ctrSrv: ControlService,
  private googleAnalytics: GoogleAnalyticsService,
  private router: Router
) {
    
}

  ngOnDestroy(): void {
      this.isDestroyed$.next(true);
      this.isDestroyed$.complete();
      this.isDestroyed$.unsubscribe();
  }

  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    this.router.events.pipe(
      takeUntil(this.isDestroyed$)
    )
    .subscribe(
         (_routerIvents:RouterEvent)=>{
           if(_routerIvents instanceof NavigationEnd) {
             this.googleAnalytics.updateGTagUrlLocation(_routerIvents.urlAfterRedirects);
           }
         },
         (error)=>console.log('_routerIvents error', error),
         ()=>{}
    );
    
  }

  
  
  title = 'newId';
  isDestroyed$: Subject<boolean> = new Subject();



prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
}



}