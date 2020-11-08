import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KaczyBrzegComponent } from './kaczy-brzeg/kaczy-brzeg.component';
import { ProjektyComponent } from './projekty/projekty.component';
import { ProjektyRoutingModule } from './projekty-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { YtPlayerModule } from 'src/app/shared/ytPlayer/yt-player.module';

const IMPORT_EXPORT_MODULES = [
  FlexLayoutModule,
  YtPlayerModule
];


@NgModule({
  declarations: [
    ProjektyComponent,
    KaczyBrzegComponent
  ],
  imports: [
    CommonModule,
    ProjektyRoutingModule,
    IMPORT_EXPORT_MODULES
  ],
  exports: [
    IMPORT_EXPORT_MODULES
  ]
})
export class ProjektyModule { }
