import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCsswithevent]'
})
export class CsswitheventDirective {
size="100px"
  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') mouseenter(){
    this.el.nativeElement.style.fontSize=this.size
  }
  @HostListener('mouseleave') mouseleave(){
    this.el.nativeElement.style.fontSize='20px'
  }
}
