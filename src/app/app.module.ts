import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './sites/home/home.component';
import { HeaderComponent } from './sites/header/header.component';
import { FooterComponent } from './sites/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SocialLinksComponent } from './sites/social-links/social-links.component';
import { IntrogadgetModule } from '@otherModules/introGadget/introgadget.module';
import { ViewportFixerModule } from '@otherModules/viewport-fixer/viewport-fixer.module';
import { PageNotFoundComponent } from '@sharedComponents/page-not-found/page-not-found.component';
import { SvgCommonModule } from '@otherModules/svg-common/svg-common.module';
import { MenuComponent } from './sites/menu/menu.component';






const IMPORT_EXPORT_MODULES = [
  FlexLayoutModule,
  IntrogadgetModule,
  ViewportFixerModule,
  SvgCommonModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    SocialLinksComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IMPORT_EXPORT_MODULES
  ],
  exports: [
    PageNotFoundComponent,
    IMPORT_EXPORT_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
