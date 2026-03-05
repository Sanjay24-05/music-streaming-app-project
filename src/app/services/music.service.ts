import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Song, Artist, Album, Genre } from '../models';
import { MOCK_SONGS, MOCK_ARTISTS, MOCK_ALBUMS } from '../data/mock-data';

@Injectable({ providedIn: 'root' })
export class MusicService {
    private songs: Song[] = [...MOCK_SONGS];
    private artists: Artist[] = [...MOCK_ARTISTS];
    private albums: Album[] = [...MOCK_ALBUMS];

    getSongs(): Observable<Song[]> {
        return of(this.songs);
    }

    getArtists(): Observable<Artist[]> {
        return of(this.artists);
    }

    getAlbums(): Observable<Album[]> {
        return of(this.albums);
    }

    getSongById(id: number): Observable<Song | undefined> {
        return of(this.songs.find(s => s.id === id));
    }

    getArtistById(id: number): Observable<Artist | undefined> {
        return of(this.artists.find(a => a.id === id));
    }

    getAlbumById(id: number): Observable<Album | undefined> {
        return of(this.albums.find(a => a.id === id));
    }

    getSongsByArtist(artistId: number): Observable<Song[]> {
        return of(this.songs.filter(s => s.artistId === artistId));
    }

    getSongsByAlbum(albumId: number): Observable<Song[]> {
        return of(this.songs.filter(s => s.albumId === albumId));
    }

    getSongsByGenre(genre: Genre): Observable<Song[]> {
        return of(this.songs.filter(s => s.genre === genre));
    }

    searchSongs(query: string): Observable<Song[]> {
        const q = query.toLowerCase();
        return of(this.songs.filter(s =>
            s.title.toLowerCase().includes(q) ||
            this.getArtistNameSync(s.artistId).toLowerCase().includes(q)
        ));
    }

    getArtistNameSync(artistId: number): string {
        const artist = this.artists.find(a => a.id === artistId);
        return artist ? artist.name : 'Unknown Artist';
    }

    getAlbumTitleSync(albumId: number): string {
        const album = this.albums.find(a => a.id === albumId);
        return album ? album.title : 'Unknown Album';
    }
}
