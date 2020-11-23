import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntrogadgetComponent } from './introgadget/introgadget.component';

const IMPORT_EXPORT_MODULES = [

]


@NgModule({
  declarations: [
    IntrogadgetComponent, 
    IMPORT_EXPORT_MODULES
  ],
  imports: [
    CommonModule
  ], exports: [
    IntrogadgetComponent,
    IMPORT_EXPORT_MODULES
  ]
})
export class IntrogadgetModule { }
