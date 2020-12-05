import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathLengthInfoDirective } from './directives/path-length-info.directive';



@NgModule({
  declarations: [
    PathLengthInfoDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PathLengthInfoDirective
  ]
})
export class SvgCommonModule { }
