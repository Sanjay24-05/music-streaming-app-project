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
  styleUrls: ['./playlist-manager.css']
})
export class PlaylistManagerComponent implements OnInit {
  playlists: Playlist[] = [];

  ngOnInit(): void {
    this.playlists = MOCK_PLAYLISTS;
  }

  createPlaylist(): void {
    console.log('Create new playlist');
    // Will be implemented with forms in later tasks
  }

  editPlaylist(playlist: Playlist): void {
    console.log('Editing playlist:', playlist.name);
    // Will be implemented with forms in later tasks
  }

  deletePlaylist(playlist: Playlist): void {
    const index = this.playlists.findIndex(p => p.id === playlist.id);
    if (index > -1) {
      this.playlists.splice(index, 1);
      console.log('Deleted playlist:', playlist.name);
    }
  }

  playPlaylist(playlist: Playlist): void {
    console.log('Playing playlist:', playlist.name);
  }


getPrivacyClass(privacy: string): string {
  return `privacy-${privacy.toLowerCase()}`;
}}