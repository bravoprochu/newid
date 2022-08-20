import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreloadComponent } from './image-preload/image-preload.component';
import { AppearIntersectionFromBottomDirective } from './appear-intersection-from-bottom.directive';



@NgModule({
  declarations: [
    ImagePreloadComponent,
    AppearIntersectionFromBottomDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagePreloadComponent,
    AppearIntersectionFromBottomDirective
  ]
})
export class ImagePreloadModule { }
