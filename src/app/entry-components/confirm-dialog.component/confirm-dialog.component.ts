import {Component, Input} from "@angular/core";
import {MatDialogRef} from "@angular/material";

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: 'confirm-dialog.component.html'
})
export class ConfirmDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<ConfirmDialogComponent>) {
    }

    @Input() message: string;

    @Input() actionText: string;

    closeModal(value: boolean): void {
        this.dialogRef.close(value);
    }
}
