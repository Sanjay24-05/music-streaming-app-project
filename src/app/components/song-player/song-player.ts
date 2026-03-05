import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { Subscription } from 'rxjs';
import { Song } from '../../models';
import { AudioService } from '../../services/audio.service';
import { MusicService } from '../../services/music.service';
import { DurationPipe } from '../../pipes/duration.pipe';
import { AlbumAnimateDirective } from '../../directives/album-animate.directive';

@Component({
  selector: 'app-song-player',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatCardModule, MatButtonModule, MatIconModule,
    MatSliderModule, MatListModule,
    DurationPipe, AlbumAnimateDirective
  ],
  templateUrl: './song-player.html',
  styleUrl: './song-player.css'
})
export class SongPlayerComponent implements OnInit, OnDestroy {
  currentSong: Song | null = null;
  isPlaying = false;
  currentTime = 0;
  duration = 0;
  volume = 70;
  queue: Song[] = [];

  private subscriptions: Subscription[] = [];

  constructor(
    private audioService: AudioService,
    private musicService: MusicService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.audioService.currentSong$.subscribe(song => {
        this.currentSong = song;
      }),
      this.audioService.isPlaying$.subscribe(playing => {
        this.isPlaying = playing;
      }),
      this.audioService.currentTime$.subscribe(time => {
        this.currentTime = time;
      }),
      this.audioService.duration$.subscribe(dur => {
        this.duration = dur;
      }),
      this.audioService.volume$.subscribe(vol => {
        this.volume = vol;
      })
    );

    // If no song is playing, load all songs into queue
    if (!this.currentSong) {
      this.musicService.getSongs().subscribe(songs => {
        if (songs.length > 0 && !this.currentSong) {
          this.audioService.setQueue(songs);
          this.queue = songs;
        }
      });
    } else {
      this.queue = this.audioService.getQueue();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  togglePlayPause(): void {
    if (!this.currentSong && this.queue.length > 0) {
      this.audioService.playAll(this.queue);
    } else {
      this.audioService.togglePlayPause();
    }
  }

  skipPrevious(): void {
    this.audioService.previous();
  }

  skipNext(): void {
    this.audioService.next();
  }

  onSeek(value: number): void {
    this.audioService.seek(value);
  }

  onVolumeChange(value: number): void {
    this.audioService.setVolume(value);
  }

  getArtistName(artistId: number): string {
    return this.musicService.getArtistNameSync(artistId);
  }

  getVolumeIcon(): string {
    if (this.volume === 0) return 'volume_off';
    if (this.volume < 40) return 'volume_down';
    return 'volume_up';
  }

  playFromQueue(index: number): void {
    this.audioService.playSongFromQueue(index);
  }
}