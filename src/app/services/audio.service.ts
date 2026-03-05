import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Song } from '../models';

@Injectable({ providedIn: 'root' })
export class AudioService {
    private audio = new Audio();

    // State subjects
    private currentSongSubject = new BehaviorSubject<Song | null>(null);
    private isPlayingSubject = new BehaviorSubject<boolean>(false);
    private currentTimeSubject = new BehaviorSubject<number>(0);
    private durationSubject = new BehaviorSubject<number>(0);
    private volumeSubject = new BehaviorSubject<number>(70);

    // Queue
    private queue: Song[] = [];
    private currentIndex = -1;

    // Public observables
    currentSong$: Observable<Song | null> = this.currentSongSubject.asObservable();
    isPlaying$: Observable<boolean> = this.isPlayingSubject.asObservable();
    currentTime$: Observable<number> = this.currentTimeSubject.asObservable();
    duration$: Observable<number> = this.durationSubject.asObservable();
    volume$: Observable<number> = this.volumeSubject.asObservable();

    constructor() {
        this.initAudioListeners();
        this.audio.volume = this.volumeSubject.value / 100;
    }

    private initAudioListeners(): void {
        this.audio.addEventListener('timeupdate', () => {
            this.currentTimeSubject.next(this.audio.currentTime);
        });

        this.audio.addEventListener('loadedmetadata', () => {
            this.durationSubject.next(this.audio.duration);
        });

        this.audio.addEventListener('ended', () => {
            this.next();
        });

        this.audio.addEventListener('play', () => {
            this.isPlayingSubject.next(true);
        });

        this.audio.addEventListener('pause', () => {
            this.isPlayingSubject.next(false);
        });

        this.audio.addEventListener('error', () => {
            // For mock data without real audio files, handle gracefully
            console.warn('Audio file not found, simulating playback');
            this.simulatePlayback();
        });
    }

    private simulationInterval: ReturnType<typeof setInterval> | null = null;

    private simulatePlayback(): void {
        const song = this.currentSongSubject.value;
        if (!song) return;

        this.durationSubject.next(song.duration);
        this.isPlayingSubject.next(true);

        // Clear any existing simulation
        if (this.simulationInterval) {
            clearInterval(this.simulationInterval);
        }

        this.simulationInterval = setInterval(() => {
            if (!this.isPlayingSubject.value) return;

            const newTime = this.currentTimeSubject.value + 1;
            if (newTime >= this.durationSubject.value) {
                this.currentTimeSubject.next(0);
                this.next();
            } else {
                this.currentTimeSubject.next(newTime);
            }
        }, 1000);
    }

    private readonly PLACEHOLDER_URLS = [
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
    ];

    play(song: Song): void {
        this.currentSongSubject.next(song);
        this.currentTimeSubject.next(0);

        // Select a placeholder URL based on song ID for variety
        const urlIndex = song.id % this.PLACEHOLDER_URLS.length;
        const testAudioUrl = this.PLACEHOLDER_URLS[urlIndex];

        this.audio.src = testAudioUrl;
        this.audio.load();
        this.audio.play().catch(err => {
            console.error('Audio playback failed:', err);
            this.simulatePlayback();
        });
    }

    playSongFromQueue(index: number): void {
        if (index >= 0 && index < this.queue.length) {
            this.currentIndex = index;
            this.play(this.queue[index]);
        }
    }

    pause(): void {
        this.audio.pause();
        this.isPlayingSubject.next(false);
    }

    resume(): void {
        if (this.currentSongSubject.value) {
            this.audio.play().catch(() => {
                this.isPlayingSubject.next(true);
            });
        }
    }

    togglePlayPause(): void {
        if (this.isPlayingSubject.value) {
            this.pause();
        } else {
            this.resume();
        }
    }

    stop(): void {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.currentTimeSubject.next(0);
        this.isPlayingSubject.next(false);
        if (this.simulationInterval) {
            clearInterval(this.simulationInterval);
            this.simulationInterval = null;
        }
    }

    seek(time: number): void {
        if (this.audio.src && !isNaN(this.audio.duration)) {
            this.audio.currentTime = time;
        }
        this.currentTimeSubject.next(time);
    }

    setVolume(volume: number): void {
        this.volumeSubject.next(volume);
        this.audio.volume = volume / 100;
    }

    setQueue(songs: Song[]): void {
        this.queue = [...songs];
    }

    getQueue(): Song[] {
        return [...this.queue];
    }

    next(): void {
        if (this.simulationInterval) {
            clearInterval(this.simulationInterval);
            this.simulationInterval = null;
        }

        if (this.queue.length === 0) {
            this.stop();
            return;
        }

        this.currentIndex = (this.currentIndex + 1) % this.queue.length;
        this.play(this.queue[this.currentIndex]);
    }

    previous(): void {
        if (this.simulationInterval) {
            clearInterval(this.simulationInterval);
            this.simulationInterval = null;
        }

        if (this.queue.length === 0) return;

        this.currentIndex = this.currentIndex <= 0
            ? this.queue.length - 1
            : this.currentIndex - 1;
        this.play(this.queue[this.currentIndex]);
    }

    playAll(songs: Song[]): void {
        if (songs.length === 0) return;
        this.queue = [...songs];
        this.currentIndex = 0;
        this.play(this.queue[0]);
    }
}
