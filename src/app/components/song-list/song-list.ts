import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Song, Genre, Playlist } from '../../models';
import { MusicService } from '../../services/music.service';
import { AudioService } from '../../services/audio.service';
import { UserService } from '../../services/user.service';
import { PlaylistService } from '../../services/playlist.service';
import { DurationPipe } from '../../pipes/duration.pipe';
import { HighlightPlayingDirective } from '../../directives/highlight-playing.directive';
import { AlbumAnimateDirective } from '../../directives/album-animate.directive';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatCardModule, MatButtonModule, MatIconModule, MatChipsModule,
    MatFormFieldModule, MatSelectModule, MatInputModule,
    MatDialogModule, MatSnackBarModule,
    DurationPipe,
    HighlightPlayingDirective, AlbumAnimateDirective,
    DatePipe, UpperCasePipe
  ],
  templateUrl: './song-list.html',
  styleUrl: './song-list.css'
})
export class SongListComponent implements OnInit, OnDestroy {
  songs: Song[] = [];
  playlists: Playlist[] = [];
  genres: (Genre | 'All')[] = ['All', ...Object.values(Genre)];
  selectedGenre: Genre | 'All' = 'All';
  searchQuery = '';
  private subscriptions: Subscription[] = [];

  constructor(
    private musicService: MusicService,
    private audioService: AudioService,
    private userService: UserService,
    private playlistService: PlaylistService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.musicService.getSongs().subscribe(songs => {
        this.songs = songs;
      }),
      this.playlistService.getPlaylists().subscribe(playlists => {
        this.playlists = playlists;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  playSong(song: Song): void {
    this.audioService.setQueue(this.getFilteredSongs());
    this.audioService.play(song);
    this.snackBar.open(`▶️ Now playing: ${song.title}`, 'Dismiss', { duration: 2000 });
  }

  toggleFavorite(song: Song): void {
    const isFav = this.userService.toggleFavorite(song.id);
    song.isFavorite = isFav;
    this.snackBar.open(
      isFav ? `❤️ Added "${song.title}" to favorites` : `Removed "${song.title}" from favorites`,
      'Dismiss',
      { duration: 2000 }
    );
  }

  isFavorite(songId: number): boolean {
    return this.userService.isFavorite(songId);
  }

  addToPlaylist(song: Song): void {
    if (this.playlists.length > 0) {
      // Add to the first playlist for simplicity, or open a selection dialog
      const playlist = this.playlists[0];
      const added = this.playlistService.addSongToPlaylist(playlist.id, song.id);
      if (added) {
        this.snackBar.open(`Added "${song.title}" to "${playlist.name}"`, 'Dismiss', { duration: 2000 });
      } else {
        this.snackBar.open(`"${song.title}" is already in "${playlist.name}"`, 'Dismiss', { duration: 2000 });
      }
    } else {
      this.snackBar.open('Create a playlist first!', 'Dismiss', { duration: 2000 });
    }
  }

  getArtistName(artistId: number): string {
    return this.musicService.getArtistNameSync(artistId);
  }

  getFilteredSongs(): Song[] {
    let filtered = this.songs;
    if (this.selectedGenre !== 'All') {
      filtered = filtered.filter(s => s.genre === this.selectedGenre);
    }
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(s =>
        s.title.toLowerCase().includes(q) ||
        this.getArtistName(s.artistId).toLowerCase().includes(q)
      );
    }
    return filtered;
  }
}