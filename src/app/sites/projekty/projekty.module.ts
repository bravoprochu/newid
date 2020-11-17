import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KaczyBrzegComponent } from './kaczy-brzeg/kaczy-brzeg.component';
import { ProjektyComponent } from './projekty/projekty.component';
import { ProjektyRoutingModule } from './projekty-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { YtPlayerModule } from 'src/app/shared/ytPlayer/yt-player.module';
import { IntersectionDirective } from '@sharedDirectives/intersection.directive';
import { ImagePreloadModule } from '@otherModules/imagePreload/image-preload.module';


const IMPORT_EXPORT_MODULES = [
  FlexLayoutModule,
  ImagePreloadModule,
  YtPlayerModule,
  
];


@NgModule({
  declarations: [
    ProjektyComponent,
    KaczyBrzegComponent,
    IntersectionDirective
  ],
  imports: [
    CommonModule,
    ProjektyRoutingModule,
    IMPORT_EXPORT_MODULES
  ],
  exports: [
    IMPORT_EXPORT_MODULES,
  ]
})
export class ProjektyModule { }
