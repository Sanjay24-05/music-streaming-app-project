// Enum for playlist privacy
export enum PlaylistPrivacy {
  PUBLIC = 'Public',
  PRIVATE = 'Private',
  UNLISTED = 'Unlisted'
}

// Interface for Playlist
export interface IPlaylist {
  id: number;
  name: string;
  description: string;
  songIds: number[];
  createdDate: Date;
  updatedDate: Date;
  coverImageUrl: string;
  privacy: PlaylistPrivacy;
}

// Playlist class implementing the interface
export class Playlist implements IPlaylist {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public songIds: number[] = [],
    public createdDate: Date = new Date(),
    public updatedDate: Date = new Date(),
    public coverImageUrl: string = 'assets/images/default-playlist.jpg',
    public privacy: PlaylistPrivacy = PlaylistPrivacy.PUBLIC
  ) {}

  // Method to add song to playlist
  addSong(songId: number): void {
    if (!this.songIds.includes(songId)) {
      this.songIds.push(songId);
      this.updatedDate = new Date();
    }
  }

  // Method to remove song from playlist
  removeSong(songId: number): void {
    const index = this.songIds.indexOf(songId);
    if (index > -1) {
      this.songIds.splice(index, 1);
      this.updatedDate = new Date();
    }
  }

  // Method to get song count
  getSongCount(): number {
    return this.songIds.length;
  }
}