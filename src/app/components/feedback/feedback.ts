import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
    selector: 'app-feedback',
    standalone: true,
    imports: [
        CommonModule, FormsModule,
        MatCardModule, MatFormFieldModule, MatInputModule,
        MatButtonModule, MatIconModule, MatSnackBarModule
    ],
    templateUrl: './feedback.html',
    styleUrl: './feedback.css'
})
export class FeedbackComponent {
    name = '';
    email = '';
    message = '';

    constructor(private snackBar: MatSnackBar) { }

    onSubmit(): void {
        this.snackBar.open('Thank you for your feedback!', 'Close', {
            duration: 4000,
            panelClass: ['success-snackbar']
        });

        // Reset form
        this.name = '';
        this.email = '';
        this.message = '';
    }
}
