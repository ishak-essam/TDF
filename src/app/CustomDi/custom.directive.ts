import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective {
  constructor(private index: ElementRef) {}
  @HostListener('foucs') foucs() {}
  @HostListener('blur') blur() {
    let indexa: string = this.index.nativeElement.value;
    this.index.nativeElement.value = indexa.toUpperCase();
  }
}
