import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdrCheckImageDirective } from './ddr-check-image.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [		
    DdrCheckImageDirective
   ],
  exports:[
    DdrCheckImageDirective
  ]
})
export class DdrCheckImageModule { }
