import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Artist, Song } from '../../models';
import { MOCK_ARTISTS, MOCK_SONGS } from '../../data/mock-data';

@Component({
  selector: 'app-artist-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './artist-detail.html',
  styleUrls: ['./artist-detail.css']
})
export class ArtistDetailComponent implements OnInit {
  artist: Artist | null = null;
  topTracks: Song[] = [];

  ngOnInit(): void {
    // For now, showing first artist. Will use route params in Task 3
    this.artist = MOCK_ARTISTS[0];
    if (this.artist) {
      this.loadTopTracks(this.artist.id);
    }
  }

  loadTopTracks(artistId: number): void {
    this.topTracks = MOCK_SONGS.filter(song => song.artistId === artistId);
  }

  playSong(song: Song): void {
    console.log('Playing:', song.title);
  }

  followArtist(): void {
    console.log('Following artist:', this.artist?.name);
  }
}