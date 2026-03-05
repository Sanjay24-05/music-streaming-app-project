import { Routes } from '@angular/router';
import { SongListComponent } from './components/song-list/song-list';
import { SongPlayerComponent } from './components/song-player/song-player';

export const routes: Routes = [
  { path: '', redirectTo: '/songs', pathMatch: 'full' },
  { path: 'songs', component: SongListComponent },
  { path: 'now-playing', component: SongPlayerComponent },

  // Lazy-loaded routes
  {
    path: 'artists',
    loadComponent: () => import('./components/artists-list/artists-list').then(m => m.ArtistsListComponent)
  },
  {
    path: 'artists/:id',
    loadComponent: () => import('./components/artist-detail/artist-detail').then(m => m.ArtistDetailComponent)
  },
  {
    path: 'playlists',
    loadComponent: () => import('./components/playlist-manager/playlist-manager').then(m => m.PlaylistManagerComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'feedback',
    loadComponent: () => import('./components/feedback/feedback').then(m => m.FeedbackComponent)
  },

  { path: '**', redirectTo: '/songs' }
];