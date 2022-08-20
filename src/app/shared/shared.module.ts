import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SocialButtonsComponent } from './components/social-buttons/social-buttons.component'
import { CommonFunctionsService } from './services/common-functions.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TestComponent } from './components/test/test.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { IntersectionDirective } from './directives/intersection.directive';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    SocialButtonsComponent,
    TestComponent,
    IntersectionDirective,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ScrollingModule,
    
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    SocialButtonsComponent,
    ScrollingModule,
    TestComponent
  ],
  providers: [
    CommonFunctionsService,
  ]
})
export class SharedModule { }
