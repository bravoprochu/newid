import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PakietStartComponent } from './pakiet-start/pakiet-start.component';

import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';

import { PakietStartZamowComponent } from './pakiet-start-zamow/pakiet-start-zamow.component';
import { PromoRoutingModule } from './promocje-routing.module';
import { PromocjeComponent } from './promocje/promocje.component';



@NgModule({
  declarations: [PakietStartComponent, PromocjeComponent, PakietStartZamowComponent],
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
export class PromocjeModule { }
