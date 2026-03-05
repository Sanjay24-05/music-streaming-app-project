import { Pipe, PipeTransform } from '@angular/core';
import { Song, Genre } from '../models';

@Pipe({
    name: 'genreFilter',
    standalone: true,
    pure: true
})
export class GenreFilterPipe implements PipeTransform {
    transform(songs: Song[], genre: Genre | 'All'): Song[] {
        if (!songs || !genre || genre === 'All') {
            return songs;
        }
        return songs.filter(song => song.genre === genre);
    }
}
