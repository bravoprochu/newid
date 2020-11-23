import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewportFixerDirective } from './viewport-fixer.directive';



@NgModule({
  declarations: [
    ViewportFixerDirective    
  ],
  imports: [
    CommonModule
  ], exports: [
    ViewportFixerDirective    
  ]
})
export class ViewportFixerModule { }
