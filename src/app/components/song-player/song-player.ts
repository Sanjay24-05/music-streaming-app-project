import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-song-player',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
    MatSliderModule,
    FormsModule
  ],
  templateUrl: './song-player.html',
  styleUrl: './song-player.css'  // Note: styleUrl not styleUrls
})
export class SongPlayerComponent {
  isPlaying = false;
  currentTime = 0;
  duration = 215; // Mock duration in seconds
  volume = 70;
  
  currentSong = {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    coverImage: 'assets/images/after-hours.jpg'
  };

  togglePlayPause(): void {
    this.isPlaying = !this.isPlaying;
    console.log(this.isPlaying ? 'Playing' : 'Paused');
  }

  skipPrevious(): void {
    console.log('Previous track');
  }

  skipNext(): void {
    console.log('Next track');
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}


