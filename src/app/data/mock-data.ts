import { Song, Genre, Artist, Album, Playlist, PlaylistPrivacy } from '../models';

// ══════════════════════════════════════════════
//  MOCK ARTISTS
// ══════════════════════════════════════════════
export const MOCK_ARTISTS: Artist[] = [
  new Artist(
    1,
    'Kanye West',
    'Kanye Omari West is an American rapper, producer, and fashion designer known for shaping modern hip-hop with groundbreaking albums like The College Dropout, My Beautiful Dark Twisted Fantasy, and Graduation.',
    'assets/images/kanye-west.jpg',
    ['Hip-Hop', 'Rap'],
    78000000
  ),
  new Artist(
    2,
    'Drake',
    'Aubrey Drake Graham is a Canadian rapper and singer known for blending rap, R&B, and pop. He has dominated the charts with hits like God\'s Plan, Hotline Bling, and One Dance.',
    'assets/images/drake.jpg',
    ['Hip-Hop', 'R&B'],
    89000000
  ),
  new Artist(
    3,
    'Daniel Caesar',
    'Daniel Caesar is a Canadian singer-songwriter known for soulful R&B and emotional storytelling. His debut album Freudian earned critical acclaim and a Grammy Award.',
    'assets/images/daniel-caesar.jpg',
    ['R&B', 'Soul'],
    32000000
  ),
  new Artist(
    4,
    'Daft Punk',
    'Daft Punk was a French electronic music duo formed in 1993. Known for iconic albums like Discovery and Random Access Memories, they shaped the landscape of electronic dance music.',
    'assets/images/daft-punk.jpg',
    ['Electronic', 'Dance'],
    45000000
  ),
  new Artist(
    5,
    'Norah Jones',
    'Norah Jones is an American singer-songwriter and pianist known for her smooth jazz and pop style. Her debut album Come Away with Me won eight Grammy Awards.',
    'assets/images/norah-jones.jpg',
    ['Jazz', 'Pop'],
    28000000
  ),
  new Artist(
    6,
    'Arctic Monkeys',
    'Arctic Monkeys are an English rock band formed in 2002. Led by Alex Turner, they have released critically acclaimed albums including AM and Whatever People Say I Am, That\'s What I\'m Not.',
    'assets/images/arctic-monkeys.jpg',
    ['Rock', 'Indie'],
    52000000
  )
];

// ══════════════════════════════════════════════
//  MOCK ALBUMS
// ══════════════════════════════════════════════
export const MOCK_ALBUMS: Album[] = [
  new Album(1, 'Graduation', 1, 2007, 'assets/images/graduation.jpg', Genre.HIPHOP, 13),
  new Album(2, 'Scorpion', 2, 2018, 'assets/images/scorpion.jpg', Genre.HIPHOP, 25),
  new Album(3, 'Freudian', 3, 2017, 'assets/images/freudian.jpg', Genre.RNB, 10),
  new Album(4, 'Discovery', 4, 2001, 'assets/images/discovery.jpg', Genre.ELECTRONIC, 14),
  new Album(5, 'Come Away with Me', 5, 2002, 'assets/images/come-away.jpg', Genre.JAZZ, 14),
  new Album(6, 'AM', 6, 2013, 'assets/images/am.jpg', Genre.ROCK, 12)
];

// ══════════════════════════════════════════════
//  MOCK SONGS
// ══════════════════════════════════════════════
export const MOCK_SONGS: Song[] = [
  // ── Kanye West — Graduation ────────────────
  new Song(1, 'Stronger', 312, Genre.HIPHOP, new Date('2007-07-31'), 1, 1,
    'assets/audio/stronger.mp3', 'assets/images/graduation.jpg', false),
  new Song(2, 'Good Life', 207, Genre.HIPHOP, new Date('2007-10-02'), 1, 1,
    'assets/audio/good-life.mp3', 'assets/images/graduation.jpg', true),
  new Song(3, 'Flashing Lights', 232, Genre.HIPHOP, new Date('2007-09-04'), 1, 1,
    'assets/audio/flashing-lights.mp3', 'assets/images/graduation.jpg', false),

  // ── Drake — Scorpion ───────────────────────
  new Song(4, 'God\'s Plan', 198, Genre.HIPHOP, new Date('2018-01-19'), 2, 2,
    'assets/audio/gods-plan.mp3', 'assets/images/scorpion.jpg', false),
  new Song(5, 'In My Feelings', 217, Genre.HIPHOP, new Date('2018-07-10'), 2, 2,
    'assets/audio/in-my-feelings.mp3', 'assets/images/scorpion.jpg', true),
  new Song(6, 'Nonstop', 239, Genre.HIPHOP, new Date('2018-06-29'), 2, 2,
    'assets/audio/nonstop.mp3', 'assets/images/scorpion.jpg', false),

  // ── Daniel Caesar — Freudian ───────────────
  new Song(7, 'Get You', 278, Genre.RNB, new Date('2017-06-30'), 3, 3,
    'assets/audio/get-you.mp3', 'assets/images/freudian.jpg', false),
  new Song(8, 'Best Part', 209, Genre.RNB, new Date('2017-08-25'), 3, 3,
    'assets/audio/best-part.mp3', 'assets/images/freudian.jpg', false),
  new Song(9, 'Blessed', 280, Genre.RNB, new Date('2017-08-25'), 3, 3,
    'assets/audio/blessed.mp3', 'assets/images/freudian.jpg', false),

  // ── Daft Punk — Discovery ──────────────────
  new Song(10, 'One More Time', 320, Genre.ELECTRONIC, new Date('2000-11-13'), 4, 4,
    'assets/audio/one-more-time.mp3', 'assets/images/discovery.jpg', false),
  new Song(11, 'Harder Better Faster', 224, Genre.ELECTRONIC, new Date('2001-10-13'), 4, 4,
    'assets/audio/harder-better.mp3', 'assets/images/discovery.jpg', false),
  new Song(12, 'Digital Love', 301, Genre.ELECTRONIC, new Date('2001-06-11'), 4, 4,
    'assets/audio/digital-love.mp3', 'assets/images/discovery.jpg', false),

  // ── Norah Jones — Come Away with Me ────────
  new Song(13, 'Don\'t Know Why', 195, Genre.JAZZ, new Date('2002-01-01'), 5, 5,
    'assets/audio/dont-know-why.mp3', 'assets/images/come-away.jpg', false),
  new Song(14, 'Come Away with Me', 198, Genre.JAZZ, new Date('2002-02-26'), 5, 5,
    'assets/audio/come-away.mp3', 'assets/images/come-away.jpg', false),
  new Song(15, 'Sunrise', 218, Genre.JAZZ, new Date('2004-02-10'), 5, 5,
    'assets/audio/sunrise.mp3', 'assets/images/come-away.jpg', false),

  // ── Arctic Monkeys — AM ────────────────────
  new Song(16, 'Do I Wanna Know?', 272, Genre.ROCK, new Date('2013-06-19'), 6, 6,
    'assets/audio/do-i-wanna-know.mp3', 'assets/images/am.jpg', false),
  new Song(17, 'R U Mine?', 200, Genre.ROCK, new Date('2012-02-27'), 6, 6,
    'assets/audio/r-u-mine.mp3', 'assets/images/am.jpg', false),
  new Song(18, 'Why\'d You Only Call Me When You\'re High?', 164, Genre.ROCK, new Date('2013-07-21'), 6, 6,
    'assets/audio/why-you-call.mp3', 'assets/images/am.jpg', false),
];

// ══════════════════════════════════════════════
//  MOCK PLAYLISTS
// ══════════════════════════════════════════════
export const MOCK_PLAYLISTS: Playlist[] = [
  new Playlist(
    1, 'My Favorites', 'Songs I keep coming back to',
    [2, 5, 8, 10], new Date('2024-01-15'), new Date('2024-01-20'),
    'assets/images/favorites-playlist.jpg', PlaylistPrivacy.PRIVATE
  ),
  new Playlist(
    2, 'Chill Vibes', 'Relaxed R&B and hip-hop tracks',
    [4, 7, 8, 13, 14], new Date('2024-02-01'), new Date('2024-02-10'),
    'assets/images/chill-playlist.jpg', PlaylistPrivacy.PUBLIC
  ),
  new Playlist(
    3, 'Workout Energy', 'High-energy tracks for the gym',
    [1, 6, 10, 11, 16, 17], new Date('2024-03-01'), new Date('2024-03-15'),
    'assets/images/workout-playlist.jpg', PlaylistPrivacy.PUBLIC
  )
];
