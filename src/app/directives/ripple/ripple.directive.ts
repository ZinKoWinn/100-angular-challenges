import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRipple]'
})
export class RippleDirective {
  @Input() public appRipple = 'ripple';

  constructor(public element: ElementRef, public render: Renderer2) { }

  @HostListener('mouseenter') onHover(): void {
    this.render.addClass(this.element.nativeElement, this.appRipple);
  }

}
