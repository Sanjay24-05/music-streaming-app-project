import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type AppTheme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class UserService {
    private readonly FAVORITES_KEY = 'music_app_favorites';
    private readonly FOLLOWS_KEY = 'music_app_follows';
    private readonly THEME_KEY = 'music_app_theme';

    private favoriteSongIds = new BehaviorSubject<Set<number>>(new Set());
    private followedArtistIds = new BehaviorSubject<Set<number>>(new Set());
    private themeSubject = new BehaviorSubject<AppTheme>('dark');

    favoriteSongIds$: Observable<Set<number>> = this.favoriteSongIds.asObservable();
    followedArtistIds$: Observable<Set<number>> = this.followedArtistIds.asObservable();
    theme$: Observable<AppTheme> = this.themeSubject.asObservable();

    constructor() {
        this.loadFromStorage();
    }

    private loadFromStorage(): void {
        try {
            const favs = localStorage.getItem(this.FAVORITES_KEY);
            if (favs) {
                this.favoriteSongIds.next(new Set(JSON.parse(favs)));
            }

            const follows = localStorage.getItem(this.FOLLOWS_KEY);
            if (follows) {
                this.followedArtistIds.next(new Set(JSON.parse(follows)));
            }

            const theme = localStorage.getItem(this.THEME_KEY) as AppTheme;
            if (theme === 'light' || theme === 'dark') {
                this.themeSubject.next(theme);
                this.applyTheme(theme);
            }
        } catch (e) {
            console.warn('Failed to load user preferences:', e);
        }
    }

    private saveToStorage(): void {
        localStorage.setItem(this.FAVORITES_KEY, JSON.stringify([...this.favoriteSongIds.value]));
        localStorage.setItem(this.FOLLOWS_KEY, JSON.stringify([...this.followedArtistIds.value]));
        localStorage.setItem(this.THEME_KEY, this.themeSubject.value);
    }

    // ── Favorites ──────────────────────────
    toggleFavorite(songId: number): boolean {
        const current = new Set(this.favoriteSongIds.value);
        if (current.has(songId)) {
            current.delete(songId);
        } else {
            current.add(songId);
        }
        this.favoriteSongIds.next(current);
        this.saveToStorage();
        return current.has(songId);
    }

    isFavorite(songId: number): boolean {
        return this.favoriteSongIds.value.has(songId);
    }

    // ── Follows ────────────────────────────
    toggleFollow(artistId: number): boolean {
        const current = new Set(this.followedArtistIds.value);
        if (current.has(artistId)) {
            current.delete(artistId);
        } else {
            current.add(artistId);
        }
        this.followedArtistIds.next(current);
        this.saveToStorage();
        return current.has(artistId);
    }

    isFollowing(artistId: number): boolean {
        return this.followedArtistIds.value.has(artistId);
    }

    // ── Theme ──────────────────────────────
    getTheme(): AppTheme {
        return this.themeSubject.value;
    }

    setTheme(theme: AppTheme): void {
        this.themeSubject.next(theme);
        this.saveToStorage();
        this.applyTheme(theme);
    }

    toggleTheme(): void {
        this.setTheme(this.themeSubject.value === 'dark' ? 'light' : 'dark');
    }

    private applyTheme(theme: AppTheme): void {
        document.body.classList.remove('dark-theme', 'light-theme');
        document.body.classList.add(`${theme}-theme`);
    }
}
