import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PakietStartComponent } from './pakiet-start/pakiet-start.component';

import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';

import { PakietStartZamowComponent } from './pakiet-start-zamow/pakiet-start-zamow.component';
import { PromoRoutingModule } from './promocje-routing.module';
import { PromocjeComponent } from './promocje/promocje.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ObslugaMarketingowa3mscComponent } from './obsluga-marketingowa3msc/obsluga-marketingowa3msc.component';
import { PromocjeZadzwonComponent } from './promocje-zadzwon/promocje-zadzwon.component';
import { ObslugaMarketingowa3mscZamowComponent } from './obsluga-marketingowa3msc-zamow/obsluga-marketingowa3msc-zamow.component';



const IMPORT_EXPORT_MODULES = [
  FlexLayoutModule,
  MatButtonModule,
  MatCardModule,
  
];



@NgModule({
  declarations: [
    PakietStartComponent,
    PromocjeComponent,
    PakietStartZamowComponent,
    ObslugaMarketingowa3mscComponent,
    PromocjeZadzwonComponent,
    ObslugaMarketingowa3mscZamowComponent
  ],
  imports: [
    CommonModule,
    PromoRoutingModule,
    IMPORT_EXPORT_MODULES,
 

  ],
  exports: [
    IMPORT_EXPORT_MODULES,
    PakietStartZamowComponent
  ]
})
export class PromocjeModule { }
