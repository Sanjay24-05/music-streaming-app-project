import { Genre } from './song.model';

// Interface for Album
export interface IAlbum {
  id: number;
  title: string;
  artistId: number;
  releaseYear: number;
  coverImageUrl: string;
  genre: Genre;
  trackCount: number;
}

// Album class implementing the interface
export class Album implements IAlbum {
  constructor(
    public id: number,
    public title: string,
    public artistId: number,
    public releaseYear: number,
    public coverImageUrl: string,
    public genre: Genre,
    public trackCount: number
  ) {}

  // Method to check if album is recent (released in last 2 years)
  isRecent(): boolean {
    const currentYear = new Date().getFullYear();
    return currentYear - this.releaseYear <= 2;
  }
}