// Enum for song genres
export enum Genre {
  POP = 'Pop',
  ROCK = 'Rock',
  JAZZ = 'Jazz',
  HIPHOP = 'Hip-Hop',
  ELECTRONIC = 'Electronic',
  CLASSICAL = 'Classical',
  COUNTRY = 'Country',
  RNB = 'R&B'
}

// Interface for Song
export interface ISong {
  id: number;
  title: string;
  duration: number; // in seconds
  genre: Genre;
  releaseDate: Date;
  albumId: number;
  artistId: number;
  audioUrl: string;
  coverImageUrl: string;
  isFavorite: boolean;
}

// Song class implementing the interface
export class Song implements ISong {
  constructor(
    public id: number,
    public title: string,
    public duration: number,
    public genre: Genre,
    public releaseDate: Date,
    public albumId: number,
    public artistId: number,
    public audioUrl: string,
    public coverImageUrl: string,
    public isFavorite: boolean = false
  ) {}

  // Method to format duration as MM:SS
  getFormattedDuration(): string {
    const minutes = Math.floor(this.duration / 60);
    const seconds = this.duration % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  // Method to toggle favorite status
  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }
}