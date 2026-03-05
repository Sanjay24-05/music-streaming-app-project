import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appAlbumAnimate]',
    standalone: true
})
export class AlbumAnimateDirective {
    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {
        this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)');
        this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.05) rotate(2deg)');
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1) rotate(0deg)');
    }
}
