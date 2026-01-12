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
  styleUrl: './song-player.css'
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
    const action = this.isPlaying ? 'Play' : 'Pause';
    alert(`${this.isPlaying ? '▶️' : '⏸️'} ${action} "${this.currentSong.title}"\n\nFull playback functionality will be implemented in CIA-3 using:\n• AudioService (Task 4)\n• HTML5 Audio element\n• Real-time progress tracking\n• Audio controls`);
    console.log(this.isPlaying ? 'Playing' : 'Paused');
  }

  skipPrevious(): void {
    alert('⏮️ Previous Track\n\nThis will be implemented in CIA-3 with:\n• Queue management\n• Track history\n• AudioService integration');
    console.log('Previous track');
  }

  skipNext(): void {
    alert('⏭️ Next Track\n\nThis will be implemented in CIA-3 with:\n• Queue management\n• Autoplay functionality\n• AudioService integration');
    console.log('Next track');
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  onProgressChange(): void {
    console.log('Progress changed to:', this.currentTime);
    // In CIA-3: Will seek audio to this position
  }

  onVolumeChange(): void {
    console.log('Volume changed to:', this.volume);
    // In CIA-3: Will adjust audio volume
  }
}