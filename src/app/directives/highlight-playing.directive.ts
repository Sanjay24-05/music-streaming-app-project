import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AudioService } from '../services/audio.service';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[appHighlightPlaying]',
    standalone: true
})
export class HighlightPlayingDirective implements OnInit, OnDestroy {
    @Input('appHighlightPlaying') songId!: number;

    private subscription!: Subscription;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        private audioService: AudioService
    ) { }

    ngOnInit(): void {
        this.subscription = this.audioService.currentSong$.subscribe(song => {
            if (song && song.id === this.songId) {
                this.renderer.addClass(this.el.nativeElement, 'currently-playing');
                this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 0 20px rgba(29, 185, 84, 0.4)');
                this.renderer.setStyle(this.el.nativeElement, 'border-left', '4px solid #1db954');
            } else {
                this.renderer.removeClass(this.el.nativeElement, 'currently-playing');
                this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
                this.renderer.removeStyle(this.el.nativeElement, 'border-left');
            }
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
