import { Routes } from '@angular/router';
import { SongListComponent } from './components/song-list/song-list';
import { SongPlayerComponent } from './components/song-player/song-player';
import { PlaylistManagerComponent } from './components/playlist-manager/playlist-manager';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail';

export const routes: Routes = [
  { path: '', redirectTo: '/songs', pathMatch: 'full' },
  { path: 'songs', component: SongListComponent },
  { path: 'artists', component: ArtistDetailComponent },
  { path: 'playlists', component: PlaylistManagerComponent },
  { path: 'now-playing', component: SongPlayerComponent },
  { path: '**', redirectTo: '/songs' }
];