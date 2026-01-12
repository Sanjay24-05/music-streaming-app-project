# 🎵 Music Streaming & Playlist Management Application

A modern, feature-rich music streaming application built with Angular and TypeScript as part of the Web Technologies course project.

![Angular](https://img.shields.io/badge/Angular-20.3.10-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Material](https://img.shields.io/badge/Angular%20Material-Latest-purple)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Current Status (CIA-2)](#current-status-cia-2)
- [Features Implemented](#features-implemented)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Roadmap](#roadmap)
- [Team Members](#team-members)
- [Acknowledgments](#acknowledgments)

---

## 🎯 Project Overview

This project is a Single Page Application (SPA) that allows users to:
- Browse and discover music tracks
- View artist profiles and top tracks
- Manage personalized playlists
- Control audio playback (planned for CIA-3)
- Organize music by genres, artists, and albums

**Course**: Web Technologies  
**Project Phase**: CIA-2 (Foundation & Architecture)  
**Academic Year**: 2024-2025

---

## 🚀 Current Status (CIA-2)

### ✅ Completed Tasks

#### Task 1: Setup and TypeScript Fundamentals
- [x] Angular environment setup using Angular CLI
- [x] TypeScript interfaces for all data models (Song, Artist, Album, Playlist)
- [x] TypeScript classes with methods and constructors
- [x] Enums for Genre and PlaylistPrivacy
- [x] Access modifiers (public, private) implementation
- [x] Inheritance and object-oriented design patterns

#### Task 2: Angular Architecture and Component Design
- [x] Five modular components created:
  - `song-list` - Displays all songs with interactive controls
  - `song-player` - Audio player interface with controls
  - `playlist-manager` - Playlist creation and management UI
  - `artist-detail` - Artist biography and top tracks display
  - `navbar` - Application navigation bar
- [x] Data binding (*ngIf, *ngFor, property binding, event binding)
- [x] Angular directives ([ngClass], [ngStyle])
- [x] Angular Material components integration
- [x] Responsive grid layouts
- [x] Mock data service for testing

### 🎨 UI/UX Features
- Modern, clean interface using Angular Material Design
- Responsive layout for desktop and mobile
- Smooth animations and transitions
- Interactive button states with hover effects
- Professional color scheme and typography

### 💡 Interactive Elements
All buttons are functional and provide user feedback through:
- **Alert dialogs** explaining feature status
- **Console logging** for event verification
- **Visual feedback** (hover states, active states)
- **Clear messaging** about CIA-3 implementation

Example interactions:
- ✅ Play buttons show playback alerts
- ✅ Favorite button toggles with visual feedback
- ✅ Create/Edit/Delete buttons explain upcoming features
- ✅ Navigation fully functional between all pages

---

## 🛠️ Features Implemented

### Data Models (TypeScript)
```typescript
✅ Song - Title, duration, genre, artist, album, cover art
✅ Artist - Name, biography, image, genres, monthly listeners
✅ Album - Title, artist, release year, cover art, track count
✅ Playlist - Name, description, songs, privacy settings
✅ Genre Enum - Pop, Rock, Jazz, Hip-Hop, Electronic, Classical, Country, R&B
✅ Privacy Enum - Public, Private, Unlisted
```

### Components Architecture
```
app/
├── components/
│   ├── navbar/          # Navigation bar with routing
│   ├── song-list/       # Grid display of all songs
│   ├── song-player/     # Playback controls interface
│   ├── playlist-manager/# Playlist management UI
│   └── artist-detail/   # Artist profile page
├── models/              # TypeScript interfaces & classes
└── data/                # Mock data for development
```

### Routing
- `/songs` - Browse all available songs
- `/artists` - View artist details and top tracks
- `/playlists` - Manage user playlists
- `/now-playing` - Current playback interface

---

## 💻 Tech Stack

### Frontend Framework
- **Angular**: 20.3.10
- **TypeScript**: 5.x
- **Angular Material**: Latest

### Development Tools
- **Node.js**: 24.11
- **npm**: 11.6.1
- **Angular CLI**: Latest
- **VS Code**: Recommended IDE

### Key Dependencies
- `@angular/material` - UI component library
- `@angular/router` - SPA routing
- `@angular/forms` - Form handling (for CIA-3)
- `@angular/common/http` - HTTP client (for CIA-3)

---

## 📁 Project Structure

```
music-streaming-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   │   ├── navbar.component.ts
│   │   │   │   ├── navbar.component.html
│   │   │   │   └── navbar.component.css
│   │   │   ├── song-list/
│   │   │   ├── song-player/
│   │   │   ├── playlist-manager/
│   │   │   └── artist-detail/
│   │   ├── models/
│   │   │   ├── song.model.ts
│   │   │   ├── artist.model.ts
│   │   │   ├── album.model.ts
│   │   │   ├── playlist.model.ts
│   │   │   └── index.ts
│   │   ├── data/
│   │   │   └── mock-data.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/
│   │   └── images/
│   ├── styles.css
│   └── main.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites
```bash
Node.js >= 24.x
npm >= 11.x
Angular CLI >= 20.x
```

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/Sanjay24-05/music-streaming-app-project.git
cd music-streaming-app-project
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
ng serve
```

4. **Open in browser**
```
Navigate to http://localhost:4200
```

### Build for Production
```bash
ng build --configuration production
```

---

## 🎮 Usage

### Navigating the Application

1. **Browse Songs**
   - Click "Songs" in the navigation bar
   - View all available songs in a grid layout
   - Click play button on any song (shows playback alert)
   - Toggle favorite status with heart icon
   - Add songs to playlists with the + icon

2. **View Artists**
   - Click "Artists" in the navigation bar
   - See artist biography and details
   - Browse top tracks from the artist
   - Cycle through different artists(CIA-3)
   - Follow artists for updates (CIA-3)

3. **Manage Playlists**
   - Click "Playlists" in the navigation bar
   - View all created playlists
   - Create, edit, or delete playlists (alerts show CIA-3 implementation)
   - See playlist details (song count, privacy, update date)

4. **Now Playing**
   - Click "Now Playing" in the navigation bar
   - View current song details
   - Use playback controls (play/pause, previous, next)
   - Adjust volume and playback progress

### Testing Features

All interactive elements provide feedback:
- **Buttons**: Show alerts explaining the feature
- **Console**: Check browser console (F12) for event logs
- **Visual Feedback**: Buttons change appearance on hover
- **Navigation**: Instant page transitions

---

## 📸 Screenshots

> **Note**: Add screenshots here showing:
> - Song list page
<img width="1898" height="862" alt="image" src="https://github.com/user-attachments/assets/cf07438c-cf79-41eb-87ef-e07a58c3b09d" />

> - Artist detail page
<img width="1898" height="863" alt="image" src="https://github.com/user-attachments/assets/70e9f19d-4aa0-4b5e-8ca0-3c26c2a3e016" />

> - Playlist manager
<img width="1899" height="864" alt="image" src="https://github.com/user-attachments/assets/b8ab4851-8523-49a4-925a-fc4c9c7ac8c3" />

> - Now playing interface
<img width="1896" height="859" alt="image" src="https://github.com/user-attachments/assets/dce653d1-82f6-4adb-8cb8-57d5c93f8832" />

> - Alert dialogs
<img width="1903" height="897" alt="image" src="https://github.com/user-attachments/assets/f8eeb692-1d06-4db3-8c1d-ff9052ce7e77" />
<img width="1919" height="917" alt="image" src="https://github.com/user-attachments/assets/46752cb0-2cc3-47c2-acc2-b168055c646b" />


---

## 🗺️ Roadmap

### CIA-2: Foundation ✅ (Current Phase)
- [x] TypeScript data models and interfaces
- [x] Component architecture and UI design
- [x] Angular Material integration
- [x] Basic routing and navigation
- [x] Mock data implementation
- [x] Responsive design

### CIA-3: Full Implementation 🚧 (Upcoming)

#### Task 3: Routing & Navigation
- [ ] Dynamic route parameters for artists and albums
- [ ] Lazy loading for performance optimization
- [ ] Route guards for protected content
- [ ] Deep linking support

#### Task 4: Services & Dependency Injection
- [ ] `MusicService` - Fetch and manage music data
- [ ] `AudioService` - Control audio playback
- [ ] `UserService` - Manage user preferences
- [ ] HTTP Client integration
- [ ] Observable data streams
- [ ] State management

#### Task 5: Forms & Validation
- [ ] Template-driven forms for quick inputs
- [ ] Reactive forms for complex playlist creation
- [ ] Form validation (required fields, patterns)
- [ ] Live validation feedback
- [ ] Error handling and messaging

#### Task 6: Custom Pipes & Directives
- [ ] Filter songs by genre, artist, album
- [ ] Duration formatting pipe
- [ ] Date formatting for releases
- [ ] Custom highlight directive for playing song
- [ ] Animation directives for album covers

#### Task 7: Advanced Material & Polish
- [ ] Material Dialog for confirmations
- [ ] Material Tabs for content organization
- [ ] Material Slider for volume/progress
- [ ] Dark mode theme support
- [ ] Accessibility improvements
- [ ] Performance optimization

### Future Enhancements 💡
- Backend API integration
- User authentication
- Real audio file uploads
- Social features (sharing, following)
- Recommendations algorithm
- Search functionality
- Lyrics display
- Offline mode

---


## 📚 Key Concepts Demonstrated

### TypeScript Features
- ✅ Interfaces for type safety
- ✅ Classes with constructors and methods
- ✅ Enums for constants
- ✅ Access modifiers (public, private, protected)
- ✅ Inheritance and polymorphism
- ✅ Type annotations and inference

### Angular Features
- ✅ Standalone components architecture
- ✅ Template syntax and data binding
- ✅ Structural directives (*ngIf, *ngFor)
- ✅ Attribute directives ([ngClass], [ngStyle])
- ✅ Event binding and handling
- ✅ Component communication
- ✅ Routing and navigation
- ✅ Dependency injection
- ✅ Angular Material components

### Best Practices
- ✅ Modular component design
- ✅ Separation of concerns
- ✅ DRY (Don't Repeat Yourself) principle
- ✅ Responsive design patterns
- ✅ User feedback mechanisms
- ✅ Console logging for debugging
- ✅ Code documentation
- ✅ Version control with Git

---

## 🔧 Development Notes

### Current Limitations (CIA-2 Phase)
- Audio playback is simulated (no actual audio files)
- Data is stored in memory (no persistence)
- Forms show alerts instead of actual functionality
- Artist page shows hardcoded first artist (dynamic routing in CIA-3)
- No backend integration yet

### Known Issues
- None currently - all planned features working as designed for CIA-2

### Browser Compatibility
- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Edge
- ✅ Safari
- ⚠️ IE not supported (Angular requirement)

---

## 📝 Documentation

### Code Documentation
- Inline comments for complex logic
- JSDoc comments for public methods
- README for project overview
- Component-specific documentation

### Angular CLI Commands

```bash
# Development server
ng serve

# Build
ng build

# Run unit tests
ng test

# Run end-to-end tests
ng e2e

# Generate component
ng generate component component-name

# Generate service
ng generate service service-name

# Code linting
ng lint
```

---



## 📄 License

This project is created for educational purposes as part of the Web Technologies course.

---



## 🎓 Academic Integrity

This project is submitted as part of CIA-2 coursework. All work is original and created by the team members listed above. External resources and libraries are properly attributed.

---

## 📊 Project Statistics

- **Components**: 5
- **Models**: 4 (Song, Artist, Album, Playlist)
- **Routes**: 4
- **Lines of Code**: ~2000+
- **Development Time**: [X weeks]
- **Team Size**: [X members]

---

## 🌟 Highlights

✨ **Clean Architecture** - Modular, scalable component design  
✨ **Type Safety** - Full TypeScript implementation  
✨ **Modern UI** - Angular Material Design  
✨ **Responsive** - Works on all device sizes  
✨ **Professional** - Industry-standard practices  
✨ **Well Documented** - Clear code and comments  
✨ **Future Ready** - Prepared for CIA-3 enhancements  

---


*Last Updated: January 2026*
