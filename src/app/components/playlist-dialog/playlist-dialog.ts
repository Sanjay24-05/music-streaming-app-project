import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { PlaylistPrivacy } from '../../models';

export interface PlaylistDialogData {
    mode: 'create' | 'edit';
    name?: string;
    description?: string;
    privacy?: PlaylistPrivacy;
}

@Component({
    selector: 'app-playlist-dialog',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule
    ],
    templateUrl: './playlist-dialog.html',
    styleUrl: './playlist-dialog.css'
})
export class PlaylistDialogComponent {
    playlistForm: FormGroup;
    privacyOptions = Object.values(PlaylistPrivacy);

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<PlaylistDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: PlaylistDialogData
    ) {
        this.playlistForm = this.fb.group({
            name: [data.name || '', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
            description: [data.description || '', [Validators.maxLength(200)]],
            privacy: [data.privacy || PlaylistPrivacy.PUBLIC, Validators.required]
        });
    }

    get isEditMode(): boolean {
        return this.data.mode === 'edit';
    }

    onSubmit(): void {
        if (this.playlistForm.valid) {
            this.dialogRef.close(this.playlistForm.value);
        }
    }

    onCancel(): void {
        this.dialogRef.close(null);
    }
}
