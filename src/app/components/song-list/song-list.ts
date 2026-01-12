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
  styleUrl: './song-list.css'
})
export class SongListComponent implements OnInit {
  songs: Song[] = [];
  artists = MOCK_ARTISTS;

  ngOnInit(): void {
    this.songs = [...MOCK_SONGS];
  }

  playSong(song: Song): void {
    alert(`▶️ Playing: "${song.title}"\nby ${this.getArtistName(song.artistId)}\n\nAudio playback will be implemented in CIA-3 using:\n• AudioService (Task 4)\n• HTML5 Audio API\n• Playback controls`);
    console.log('Playing:', song.title);
  }

  toggleFavorite(song: Song): void {
    song.toggleFavorite();
    const status = song.isFavorite ? '❤️ Added to' : '💔 Removed from';
    alert(`${status} Favorites!\n\n"${song.title}"\n\nIn CIA-3, this will:\n• Save to user preferences\n• Persist across sessions\n• Use UserService (Task 4)`);
    console.log('Favorite toggled:', song.title, 'Is favorite:', song.isFavorite);
  }

  addToPlaylist(song: Song): void {
    alert(`➕ Add "${song.title}" to Playlist\n\nThis will be implemented in CIA-3 with:\n• Playlist selection dialog\n• Multiple playlist support\n• Services for data management (Task 4)`);
    console.log('Add to playlist:', song.title);
  }

  getArtistName(artistId: number): string {
    const artist = this.artists.find(a => a.id === artistId);
    return artist ? artist.name : 'Unknown Artist';
  }
}