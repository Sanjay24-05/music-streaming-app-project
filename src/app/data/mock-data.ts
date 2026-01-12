import { Song, Genre, Artist, Album, Playlist, PlaylistPrivacy } from '../models';

// Mock Artists
// Mock Artists
export const MOCK_ARTISTS: Artist[] = [
  new Artist(
    1,
    'Kanye West',
    'Kanye Omari West is an American rapper, producer, and fashion designer known for shaping modern hip-hop.',
    'assets/images/kanye-west.jpg',
    ['Hip-Hop', 'Rap'],
    78000000
  ),
  new Artist(
    2,
    'Drake',
    'Aubrey Drake Graham is a Canadian rapper and singer known for blending rap, R&B, and pop.',
    'assets/images/drake.jpg',
    ['Hip-Hop', 'R&B'],
    89000000
  ),
  new Artist(
    3,
    'Daniel Caesar',
    'Daniel Caesar is a Canadian singer-songwriter known for soulful R&B and emotional storytelling.',
    'assets/images/daniel-caesar.jpg',
    ['R&B', 'Soul'],
    32000000
  )
];

// Mock Albums
export const MOCK_ALBUMS: Album[] = [
  new Album(1, 'Graduation', 1, 2007, 'assets/images/graduation.jpg', Genre.HIPHOP, 13),
  new Album(2, 'Scorpion', 2, 2018, 'assets/images/scorpion.jpg', Genre.HIPHOP, 25),
  new Album(3, 'Freudian', 3, 2017, 'assets/images/freudian.jpg', Genre.RNB, 10)
];

// Mock Songs
export const MOCK_SONGS: Song[] = [
  // Kanye West — Graduation
  new Song(
    1,
    'Stronger',
    312,
    Genre.HIPHOP,
    new Date('2007-07-31'),
    1,
    1,
    'assets/audio/stronger.mp3',
    'assets/images/graduation.jpg',
    false
  ),
  new Song(
    2,
    'Good Life',
    207,
    Genre.HIPHOP,
    new Date('2007-10-02'),
    1,
    1,
    'assets/audio/good-life.mp3',
    'assets/images/graduation.jpg',
    true
  ),

  // Drake — Scorpion
  new Song(
    3,
    'God’s Plan',
    198,
    Genre.HIPHOP,
    new Date('2018-01-19'),
    2,
    2,
    'assets/audio/gods-plan.mp3',
    'assets/images/scorpion.jpg',
    false
  ),
  new Song(
    4,
    'In My Feelings',
    217,
    Genre.HIPHOP,
    new Date('2018-07-10'),
    2,
    2,
    'assets/audio/in-my-feelings.mp3',
    'assets/images/scorpion.jpg',
    true
  ),

  // Daniel Caesar — Freudian
  new Song(
    5,
    'Get You',
    278,
    Genre.RNB,
    new Date('2017-06-30'),
    3,
    3,
    'assets/audio/get-you.mp3',
    'assets/images/freudian.jpg',
    false
  ),
  new Song(
    6,
    'Best Part',
    209,
    Genre.RNB,
    new Date('2017-08-25'),
    3,
    3,
    'assets/audio/best-part.mp3',
    'assets/images/freudian.jpg',
    false
  )
];

// Mock Playlists
export const MOCK_PLAYLISTS: Playlist[] = [
  new Playlist(
    1,
    'My Favorites',
    'Songs I keep coming back to',
    [2, 4, 6],
    new Date('2024-01-15'),
    new Date('2024-01-20'),
    'assets/images/favorites-playlist.jpg',
    PlaylistPrivacy.PRIVATE
  ),
  new Playlist(
    2,
    'Chill Vibes',
    'Relaxed R&B and hip-hop tracks',
    [3, 5, 6],
    new Date('2024-02-01'),
    new Date('2024-02-10'),
    'assets/images/chill-playlist.jpg',
    PlaylistPrivacy.PUBLIC
  )
];
