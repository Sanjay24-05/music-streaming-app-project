import { Song, Genre, Artist, Album, Playlist, PlaylistPrivacy } from '../models';

// Mock Artists
export const MOCK_ARTISTS: Artist[] = [
  new Artist(
    1,
    'The Weeknd',
    'Abel Makkonen Tesfaye, known professionally as The Weeknd, is a Canadian singer, songwriter, and record producer.',
    'assets/images/the-weeknd.jpg',
    ['Pop', 'R&B'],
    85000000
  ),
  new Artist(
    2,
    'Taylor Swift',
    'Taylor Alison Swift is an American singer-songwriter known for narrative songs about her personal life.',
    'assets/images/taylor-swift.jpg',
    ['Pop', 'Country'],
    92000000
  ),
  new Artist(
    3,
    'Daft Punk',
    'Daft Punk were a French electronic music duo formed in 1993.',
    'assets/images/daft-punk.jpg',
    ['Electronic'],
    45000000
  )
];

// Mock Albums
export const MOCK_ALBUMS: Album[] = [
  new Album(1, 'After Hours', 1, 2020, 'assets/images/after-hours.jpg', Genre.POP, 14),
  new Album(2, 'Lover', 2, 2019, 'assets/images/lover.jpg', Genre.POP, 18),
  new Album(3, 'Random Access Memories', 3, 2013, 'assets/images/ram.jpg', Genre.ELECTRONIC, 13)
];

// Mock Songs
export const MOCK_SONGS: Song[] = [
  new Song(
    1,
    'Blinding Lights',
    200,
    Genre.POP,
    new Date('2020-03-20'),
    1,
    1,
    'assets/audio/blinding-lights.mp3',
    'assets/images/after-hours.jpg',
    false
  ),
  new Song(
    2,
    'Save Your Tears',
    215,
    Genre.POP,
    new Date('2020-03-20'),
    1,
    1,
    'assets/audio/save-your-tears.mp3',
    'assets/images/after-hours.jpg',
    true
  ),
  new Song(
    3,
    'Lover',
    221,
    Genre.POP,
    new Date('2019-08-23'),
    2,
    2,
    'assets/audio/lover.mp3',
    'assets/images/lover.jpg',
    false
  ),
  new Song(
    4,
    'Cruel Summer',
    178,
    Genre.POP,
    new Date('2019-08-23'),
    2,
    2,
    'assets/audio/cruel-summer.mp3',
    'assets/images/lover.jpg',
    true
  ),
  new Song(
    5,
    'Get Lucky',
    248,
    Genre.ELECTRONIC,
    new Date('2013-04-19'),
    3,
    3,
    'assets/audio/get-lucky.mp3',
    'assets/images/ram.jpg',
    false
  ),
  new Song(
    6,
    'Instant Crush',
    337,
    Genre.ELECTRONIC,
    new Date('2013-04-19'),
    3,
    3,
    'assets/audio/instant-crush.mp3',
    'assets/images/ram.jpg',
    false
  )
];

// Mock Playlists
export const MOCK_PLAYLISTS: Playlist[] = [
  new Playlist(
    1,
    'My Favorites',
    'All my favorite songs in one place',
    [1, 2, 4],
    new Date('2024-01-15'),
    new Date('2024-01-20'),
    'assets/images/favorites-playlist.jpg',
    PlaylistPrivacy.PRIVATE
  ),
  new Playlist(
    2,
    'Workout Mix',
    'High energy songs for workouts',
    [1, 5],
    new Date('2024-02-01'),
    new Date('2024-02-10'),
    'assets/images/workout-playlist.jpg',
    PlaylistPrivacy.PUBLIC
  )
];