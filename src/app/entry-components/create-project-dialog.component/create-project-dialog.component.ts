import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";

@Component({
    selector: 'app-create-task-dialog',
    templateUrl: 'create-project-dialog.component.html',
    styleUrls: ['create-project-dialog.component.css']
})
export class CreateProjectDialogComponent {

    projectName: string = '';

    constructor(
        public dialogRef: MatDialogRef<CreateProjectDialogComponent>) {
    }

    closeModal(): void {
        this.dialogRef.close();
    }

}
