import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Playlist } from '../../models';
import { MOCK_PLAYLISTS } from '../../data/mock-data';

@Component({
  selector: 'app-playlist-manager',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './playlist-manager.html',
  styleUrl: './playlist-manager.css'
})
export class PlaylistManagerComponent implements OnInit {
  playlists: Playlist[] = [];

  ngOnInit(): void {
    this.playlists = [...MOCK_PLAYLISTS];
  }

  createPlaylist(): void {
    alert('🎵 Create Playlist Feature\n\nThis will be implemented in CIA-3 using:\n• Angular Forms (Task 5)\n• Form Validation\n• Services for data management (Task 4)');
    console.log('Create playlist clicked - Will be implemented in CIA-3');
  }

  editPlaylist(playlist: Playlist): void {
    alert(`✏️ Edit Playlist: "${playlist.name}"\n\nThis feature will be implemented in CIA-3 using:\n• Reactive Forms (Task 5)\n• Form pre-population\n• Update operations`);
    console.log('Edit playlist clicked:', playlist.name);
  }

  deletePlaylist(playlist: Playlist): void {
    const confirmDelete = confirm(`🗑️ Delete "${playlist.name}"?\n\nThis is a demonstration. Full delete functionality will be implemented in CIA-3.`);
    
    if (confirmDelete) {
      alert('✅ Delete confirmed!\n\nIn CIA-3, this will:\n• Remove from database\n• Update UI dynamically\n• Use Services for state management');
      console.log('Delete confirmed for:', playlist.name);
    } else {
      console.log('Delete cancelled');
    }
  }

  playPlaylist(playlist: Playlist): void {
    alert(`▶️ Play "${playlist.name}"\n\nPlayback functionality will be implemented in CIA-3 using:\n• AudioService (Task 4)\n• Media player controls\n• Queue management`);
    console.log('Play playlist:', playlist.name);
  }

  getPrivacyClass(privacy: string): string {
    return `privacy-${privacy.toLowerCase()}`;
  }
}