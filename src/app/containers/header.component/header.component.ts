import {Component} from "@angular/core";
import {StateService} from "../../services";
import {MatDialog} from "@angular/material";
import {CreateProjectDialogComponent} from "../../entry-components";
import {ProjectActions} from "../../actions";

@Component({
    selector: 'app-header-component',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {
    constructor(private stateService: StateService, public dialog: MatDialog) {
    }

    onCreateProject(): void {
        const dialogRef = this.dialog.open(CreateProjectDialogComponent, {
            width: '348px',
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.stateService.dispatch(new ProjectActions.Create(result));
            }
        });

    }
}
