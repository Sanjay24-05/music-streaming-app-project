import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Subscription } from 'rxjs';
import { Song } from '../../models';
import { AudioService } from '../../services/audio.service';
import { UserService, AppTheme } from '../../services/user.service';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule, RouterModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  appTitle = 'MeloStream';
  currentSong: Song | null = null;
  isPlaying = false;
  theme: AppTheme = 'dark';
  private subscriptions: Subscription[] = [];

  constructor(
    private audioService: AudioService,
    private userService: UserService,
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
      this.userService.theme$.subscribe(theme => {
        this.theme = theme;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  togglePlayPause(): void {
    this.audioService.togglePlayPause();
  }

  toggleTheme(): void {
    this.userService.toggleTheme();
  }

  getArtistName(artistId: number): string {
    return this.musicService.getArtistNameSync(artistId);
  }
}