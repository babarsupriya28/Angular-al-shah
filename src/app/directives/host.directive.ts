
import { Directive,ElementRef,Renderer2,HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {

  constructor(private elementRef:ElementRef,private renderer:Renderer2) {
    // this.ChangeBgColor('red');
    // console.log("in ctor ran changeBgColor");
   }

  //  @HostListener("mouseover") onMouseOver(){
  //   this.ChangeBgColor("red");
  //  }
  //  @HostListener("click") onClick(){
  //   this.ChangeBgColor("green");
  //  }
  //  @HostListener("mouseleave") onMouseLeave(){
  //   this.ChangeBgColor("green");
  //  }

  @HostBinding('style.textShadow') textShadow: string;

  @HostListener('mouseover') onMouseOver() {
    this.textShadow = '2px 2px 3px green';
  }

  @HostListener('click') onClick() {
    window.alert('Host Element Clicked');
  }

  
  @HostListener('mouseleave') onMouseLeave() {
    this.ChangeBgColor('black');
    this.textShadow = '2px 2px 4px red';
  }

  ChangeBgColor(color: string) {
    // console.log("in changeBgColor pre");

    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);

    // console.log("in changeBgColor post");

  }
}
