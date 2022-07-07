import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.color='red'
  }

  // @HostListener('mouseenter') me() {
  //   this.hl('red')
  // }

  // @HostListener('mouseleave') mouseleave(){
  //   this.hl('blue')
  // }

  // @HostListener('click') mouseclick(){
  //   this.hl('blue')
  // }

  // @HostListener('dblclick') mousdoubleclick(){
  //   this.hl('yellow')
  // }

  @HostListener('mouseover') mouseover(){
    this.hl('green')
  }

  

  hl(a: any) {
    this.el.nativeElement.style.color = a
  }
}
