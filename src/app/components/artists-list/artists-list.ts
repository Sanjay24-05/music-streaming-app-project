import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Artist } from '../../models';
import { MusicService } from '../../services/music.service';

@Component({
    selector: 'app-artists-list',
    standalone: true,
    imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
    templateUrl: './artists-list.html',
    styleUrl: './artists-list.css'
})
export class ArtistsListComponent implements OnInit {
    artists: Artist[] = [];

    constructor(private musicService: MusicService) { }

    ngOnInit(): void {
        this.musicService.getArtists().subscribe(artists => {
            this.artists = artists;
        });
    }
}
