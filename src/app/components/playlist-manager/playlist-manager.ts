import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { Subscription } from 'rxjs';
import { Playlist, Song } from '../../models';
import { PlaylistService } from '../../services/playlist.service';
import { MusicService } from '../../services/music.service';
import { AudioService } from '../../services/audio.service';
import { PlaylistDialogComponent, PlaylistDialogData } from '../playlist-dialog/playlist-dialog';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'app-playlist-manager',
  standalone: true,
  imports: [
    CommonModule, DatePipe,
    MatCardModule, MatButtonModule, MatIconModule, MatChipsModule,
    MatDialogModule, MatSnackBarModule, MatListModule,
    DurationPipe
  ],
  templateUrl: './playlist-manager.html',
  styleUrl: './playlist-manager.css'
})
export class PlaylistManagerComponent implements OnInit, OnDestroy {
  playlists: Playlist[] = [];
  allSongs: Song[] = [];
  private subscriptions: Subscription[] = [];

  constructor(
    private playlistService: PlaylistService,
    private musicService: MusicService,
    private audioService: AudioService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.playlistService.getPlaylists().subscribe(playlists => {
        this.playlists = playlists;
      }),
      this.musicService.getSongs().subscribe(songs => {
        this.allSongs = songs;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  createPlaylist(): void {
    const dialogRef = this.dialog.open(PlaylistDialogComponent, {
      width: '500px',
      data: { mode: 'create' } as PlaylistDialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.playlistService.createPlaylist(result.name, result.description, result.privacy);
        this.snackBar.open(`✅ Playlist "${result.name}" created!`, 'Dismiss', { duration: 3000 });
      }
    });
  }

  editPlaylist(playlist: Playlist): void {
    const dialogRef = this.dialog.open(PlaylistDialogComponent, {
      width: '500px',
      data: {
        mode: 'edit',
        name: playlist.name,
        description: playlist.description,
        privacy: playlist.privacy
      } as PlaylistDialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.playlistService.updatePlaylist(playlist.id, result.name, result.description, result.privacy);
        this.snackBar.open(`✏️ Playlist updated!`, 'Dismiss', { duration: 3000 });
      }
    });
  }

  deletePlaylist(playlist: Playlist): void {
    if (confirm(`Delete "${playlist.name}"?`)) {
      this.playlistService.deletePlaylist(playlist.id);
      this.snackBar.open(`🗑️ Playlist "${playlist.name}" deleted`, 'Undo', { duration: 4000 });
    }
  }

  playPlaylist(playlist: Playlist): void {
    const songs = this.getPlaylistSongs(playlist);
    if (songs.length > 0) {
      this.audioService.playAll(songs);
      this.snackBar.open(`▶️ Playing "${playlist.name}"`, 'Dismiss', { duration: 2000 });
    } else {
      this.snackBar.open('This playlist is empty', 'Dismiss', { duration: 2000 });
    }
  }

  removeSong(playlistId: number, songId: number): void {
    this.playlistService.removeSongFromPlaylist(playlistId, songId);
    this.snackBar.open('Song removed from playlist', 'Dismiss', { duration: 2000 });
  }

  getPlaylistSongs(playlist: Playlist): Song[] {
    return playlist.songIds
      .map(id => this.allSongs.find(s => s.id === id))
      .filter((s): s is Song => s !== undefined);
  }

  getSongTitle(songId: number): string {
    const song = this.allSongs.find(s => s.id === songId);
    return song ? song.title : 'Unknown';
  }

  getArtistName(songId: number): string {
    const song = this.allSongs.find(s => s.id === songId);
    return song ? this.musicService.getArtistNameSync(song.artistId) : 'Unknown';
  }

  getPrivacyClass(privacy: string): string {
    return `privacy-${privacy.toLowerCase()}`;
  }
}