import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Artist, Song } from '../../models';
import { MusicService } from '../../services/music.service';
import { AudioService } from '../../services/audio.service';
import { UserService } from '../../services/user.service';
import { DurationPipe } from '../../pipes/duration.pipe';
import { HighlightPlayingDirective } from '../../directives/highlight-playing.directive';

@Component({
  selector: 'app-artist-detail',
  standalone: true,
  imports: [
    CommonModule, RouterModule,
    MatCardModule, MatButtonModule, MatIconModule, MatChipsModule,
    MatSnackBarModule,
    DurationPipe, HighlightPlayingDirective
  ],
  templateUrl: './artist-detail.html',
  styleUrl: './artist-detail.css'
})
export class ArtistDetailComponent implements OnInit, OnDestroy {
  artist: Artist | null = null;
  topTracks: Song[] = [];
  isFollowing = false;
  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private musicService: MusicService,
    private audioService: AudioService,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.params.subscribe(params => {
        const id = +params['id'];
        if (id) {
          this.loadArtist(id);
        } else {
          // Fallback to first artist if no ID in route
          this.musicService.getArtists().subscribe(artists => {
            if (artists.length > 0) {
              this.loadArtist(artists[0].id);
            }
          });
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  private loadArtist(id: number): void {
    this.musicService.getArtistById(id).subscribe(artist => {
      this.artist = artist || null;
      if (artist) {
        this.isFollowing = this.userService.isFollowing(artist.id);
        this.musicService.getSongsByArtist(artist.id).subscribe(songs => {
          this.topTracks = songs;
        });
      }
    });
  }

  playSong(song: Song): void {
    this.audioService.setQueue(this.topTracks);
    this.audioService.play(song);
    this.snackBar.open(`▶️ Playing: ${song.title}`, 'Dismiss', { duration: 2000 });
  }

  playAll(): void {
    if (this.topTracks.length > 0) {
      this.audioService.playAll(this.topTracks);
      this.snackBar.open(`▶️ Playing all tracks by ${this.artist?.name}`, 'Dismiss', { duration: 2000 });
    }
  }

  toggleFollow(): void {
    if (this.artist) {
      this.isFollowing = this.userService.toggleFollow(this.artist.id);
      this.snackBar.open(
        this.isFollowing
          ? `Following ${this.artist.name}`
          : `Unfollowed ${this.artist.name}`,
        'Dismiss',
        { duration: 2000 }
      );
    }
  }
}