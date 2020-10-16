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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SocialLinksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
