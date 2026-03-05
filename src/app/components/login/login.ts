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
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule, FormsModule,
        MatCardModule, MatFormFieldModule, MatInputModule,
        MatButtonModule, MatIconModule, MatSnackBarModule
    ],
    templateUrl: './login.html',
    styleUrl: './login.css'
})
export class LoginComponent {
    email = '';
    password = '';
    hidePassword = true;

    constructor(private snackBar: MatSnackBar) { }

    onLogin(): void {
        this.snackBar.open(`Welcome back! Logged in as ${this.email}`, 'Dismiss', {
            duration: 3000,
            panelClass: ['success-snackbar']
        });
    }
}
