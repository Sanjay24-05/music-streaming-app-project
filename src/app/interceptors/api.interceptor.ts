import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MOCK_SONGS, MOCK_ARTISTS, MOCK_ALBUMS } from '../data/mock-data';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
    const snackBar = inject(MatSnackBar);

    // Intercept API calls and return mock data
    if (req.url.includes('/api/')) {
        const endpoint = req.url.split('/api/')[1];

        let body: any = null;

        if (endpoint === 'songs') {
            body = MOCK_SONGS;
        } else if (endpoint === 'artists') {
            body = MOCK_ARTISTS;
        } else if (endpoint === 'albums') {
            body = MOCK_ALBUMS;
        } else if (endpoint.startsWith('artists/')) {
            const id = parseInt(endpoint.split('/')[1]);
            body = MOCK_ARTISTS.find(a => a.id === id);
        } else if (endpoint.startsWith('songs/artist/')) {
            const id = parseInt(endpoint.split('/')[2]);
            body = MOCK_SONGS.filter(s => s.artistId === id);
        }

        if (body !== null) {
            return of(new HttpResponse({ status: 200, body }));
        }

        // Unknown endpoint
        snackBar.open('API endpoint not found', 'Dismiss', { duration: 3000 });
        return throwError(() => new Error('Endpoint not found'));
    }

    // Pass through non-API requests with error handling
    return next(req).pipe(
        catchError(error => {
            snackBar.open(
                `Request failed: ${error.message || 'Unknown error'}`,
                'Dismiss',
                { duration: 4000, panelClass: ['error-snackbar'] }
            );
            return throwError(() => error);
        })
    );
};
