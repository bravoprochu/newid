import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowSliderComponent } from './window-slider/window-slider.component';
import {MatSliderModule} from '@angular/material/slider'

const IMPORT_EXPORT_MODULES = [
  MatSliderModule
];

@NgModule({
  declarations: [
    WindowSliderComponent
  ],
  imports: [
    CommonModule,
    IMPORT_EXPORT_MODULES
  ],
  exports: [
    WindowSliderComponent,
    IMPORT_EXPORT_MODULES
  ]
})
export class WindowSliderModule { }
