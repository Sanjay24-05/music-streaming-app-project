import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Song } from '../../models';
import { MOCK_SONGS, MOCK_ARTISTS } from '../../data/mock-data';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './song-list.html',
  styleUrls: ['./song-list.css']
})
export class SongListComponent implements OnInit {
  songs: Song[] = [];
  artists = MOCK_ARTISTS;

  ngOnInit(): void {
    this.songs = MOCK_SONGS;
  }

  playSong(song: Song): void {
    console.log('Playing:', song.title);
    // This will be connected to AudioService in later tasks
  }

  toggleFavorite(song: Song): void {
    song.toggleFavorite();
  }

  addToPlaylist(song: Song): void {
    console.log('Adding to playlist:', song.title);
    // This will be implemented in later tasks
  }

  getArtistName(artistId: number): string {
    const artist = this.artists.find(a => a.id === artistId);
    return artist ? artist.name : 'Unknown Artist';
  }
}