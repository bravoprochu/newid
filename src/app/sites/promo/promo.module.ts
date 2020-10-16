import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoRoutingModule } from './promo-routing.module';
import { PakietStartComponent } from './pakiet-start/pakiet-start.component';
import { PromoComponent } from './promo/promo.component';

import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';

import { PakietStartZamowComponent } from './pakiet-start-zamow/pakiet-start-zamow.component';



@NgModule({
  declarations: [PakietStartComponent, PromoComponent, PakietStartZamowComponent],
  imports: [
    CommonModule,
    PromoRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    PakietStartZamowComponent
  ]
})
export class PromoModule { }
