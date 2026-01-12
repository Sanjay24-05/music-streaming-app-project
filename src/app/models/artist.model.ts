// Interface for Artist
export interface IArtist {
  id: number;
  name: string;
  biography: string;
  imageUrl: string;
  genres: string[];
  monthlyListeners: number;
}

// Artist class implementing the interface
export class Artist implements IArtist {
  constructor(
    public id: number,
    public name: string,
    public biography: string,
    public imageUrl: string,
    public genres: string[],
    public monthlyListeners: number
  ) {}

  // Method to get formatted listener count
  getFormattedListeners(): string {
    if (this.monthlyListeners >= 1000000) {
      return `${(this.monthlyListeners / 1000000).toFixed(1)}M`;
    } else if (this.monthlyListeners >= 1000) {
      return `${(this.monthlyListeners / 1000).toFixed(1)}K`;
    }
    return this.monthlyListeners.toString();
  }
}