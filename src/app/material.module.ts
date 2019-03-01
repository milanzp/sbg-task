import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule
} from '@angular/material';

@NgModule({
    imports: [
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatSelectModule,
        MatDialogModule,
        MatInputModule,
        MatSnackBarModule
    ],
    exports: [
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatSelectModule,
        MatDialogModule,
        MatInputModule,
        MatSnackBarModule
    ]
})
export class MaterialModule {}
