import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreloadComponent } from './image-preload/image-preload.component';



@NgModule({
  declarations: [
    ImagePreloadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagePreloadComponent
  ]
})
export class ImagePreloadModule { }
