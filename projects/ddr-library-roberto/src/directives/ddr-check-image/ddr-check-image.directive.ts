import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ddrCheckImage]'
})
export class DdrCheckImageDirective {

  @Input() rutaImagenDefecto: string = '';

  constructor(private elementImg:ElementRef) { }

  @HostListener('error')
  
  cargaImagenNoDisponible(): void {
    this.elementImg.nativeElement.src=this.rutaImagenDefecto;
  }

}