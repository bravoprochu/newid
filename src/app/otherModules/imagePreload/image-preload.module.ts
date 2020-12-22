import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreloadComponent } from './image-preload/image-preload.component';
import { AppearFromBottomDirective } from './appear-from-bottom.directive';



@NgModule({
  declarations: [
    ImagePreloadComponent,
    AppearFromBottomDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagePreloadComponent,
    AppearFromBottomDirective
  ]
})
export class ImagePreloadModule { }
