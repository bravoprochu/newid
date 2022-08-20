import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YtPlayerComponent } from './yt-player/yt-player.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { YouTubePlayerModule } from '@angular/youtube-player';


const IMPORT_EXPORT_MODULES = [
  FlexLayoutModule,
  YouTubePlayerModule,
];

@NgModule({
  declarations: [
    YtPlayerComponent
  ],
  imports: [
    CommonModule,
    IMPORT_EXPORT_MODULES
  ],
  exports: [
    YtPlayerComponent,
    IMPORT_EXPORT_MODULES,

  ]

})
export class YtPlayerModule { }
