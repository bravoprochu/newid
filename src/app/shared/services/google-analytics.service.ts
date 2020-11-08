import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }


  updateGTagUrlLocation(pageLocation: string){
    gtag('config', environment.googleAnalyticsGtag, {
      'page_path': pageLocation
   })
  }

  // public eventEmiter (
  //   eventName: string,
  //   eventCategory: string,
  //   eventAction: string,
  //   eventLabel: string = null,
  //   eventValue: number = null
  // ) {

  //   gTag('config', eventName, {
  //     eventCategory: eventCategory,
  //     eventLabel: eventLabel,
  //     eventAction: eventAction,
  //     eventValue: eventValue
  //   });

  // }

    
}
