import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Playlist, PlaylistPrivacy } from '../models';
import { MOCK_PLAYLISTS } from '../data/mock-data';

@Injectable({ providedIn: 'root' })
export class PlaylistService {
    private readonly STORAGE_KEY = 'music_app_playlists';
    private playlistsSubject = new BehaviorSubject<Playlist[]>([]);

    playlists$: Observable<Playlist[]> = this.playlistsSubject.asObservable();

    constructor() {
        this.loadPlaylists();
    }

    private loadPlaylists(): void {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            if (stored) {
                const raw = JSON.parse(stored);
                const playlists = raw.map((p: any) => new Playlist(
                    p.id, p.name, p.description, p.songIds,
                    new Date(p.createdDate), new Date(p.updatedDate),
                    p.coverImageUrl, p.privacy
                ));
                this.playlistsSubject.next(playlists);
            } else {
                // First load: seed from mock data
                this.playlistsSubject.next([...MOCK_PLAYLISTS]);
                this.savePlaylists();
            }
        } catch (e) {
            console.warn('Failed to load playlists:', e);
            this.playlistsSubject.next([...MOCK_PLAYLISTS]);
        }
    }

    private savePlaylists(): void {
        const data = this.playlistsSubject.value.map(p => ({
            id: p.id,
            name: p.name,
            description: p.description,
            songIds: p.songIds,
            createdDate: p.createdDate.toISOString(),
            updatedDate: p.updatedDate.toISOString(),
            coverImageUrl: p.coverImageUrl,
            privacy: p.privacy
        }));
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    }

    getPlaylists(): Observable<Playlist[]> {
        return this.playlists$;
    }

    getPlaylistById(id: number): Playlist | undefined {
        return this.playlistsSubject.value.find(p => p.id === id);
    }

    createPlaylist(name: string, description: string, privacy: PlaylistPrivacy): Playlist {
        const playlists = this.playlistsSubject.value;
        const newId = playlists.length > 0 ? Math.max(...playlists.map(p => p.id)) + 1 : 1;
        const newPlaylist = new Playlist(
            newId, name, description, [],
            new Date(), new Date(),
            'assets/images/default-playlist.jpg',
            privacy
        );
        this.playlistsSubject.next([...playlists, newPlaylist]);
        this.savePlaylists();
        return newPlaylist;
    }

    updatePlaylist(id: number, name: string, description: string, privacy: PlaylistPrivacy): void {
        const playlists = this.playlistsSubject.value.map(p => {
            if (p.id === id) {
                const updated = new Playlist(
                    p.id, name, description, [...p.songIds],
                    p.createdDate, new Date(),
                    p.coverImageUrl, privacy
                );
                return updated;
            }
            return p;
        });
        this.playlistsSubject.next(playlists);
        this.savePlaylists();
    }

    deletePlaylist(id: number): void {
        const playlists = this.playlistsSubject.value.filter(p => p.id !== id);
        this.playlistsSubject.next(playlists);
        this.savePlaylists();
    }

    addSongToPlaylist(playlistId: number, songId: number): boolean {
        let added = false;
        const playlists = this.playlistsSubject.value.map(p => {
            if (p.id === playlistId && !p.songIds.includes(songId)) {
                const updated = new Playlist(
                    p.id, p.name, p.description, [...p.songIds, songId],
                    p.createdDate, new Date(),
                    p.coverImageUrl, p.privacy
                );
                added = true;
                return updated;
            }
            return p;
        });
        if (added) {
            this.playlistsSubject.next(playlists);
            this.savePlaylists();
        }
        return added;
    }

    removeSongFromPlaylist(playlistId: number, songId: number): void {
        const playlists = this.playlistsSubject.value.map(p => {
            if (p.id === playlistId) {
                const updated = new Playlist(
                    p.id, p.name, p.description,
                    p.songIds.filter(id => id !== songId),
                    p.createdDate, new Date(),
                    p.coverImageUrl, p.privacy
                );
                return updated;
            }
            return p;
        });
        this.playlistsSubject.next(playlists);
        this.savePlaylists();
    }
}
