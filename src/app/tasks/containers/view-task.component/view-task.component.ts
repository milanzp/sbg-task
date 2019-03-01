import { Component, OnDestroy } from "@angular/core";
import { StateService } from "../../../services";
import { ActivatedRoute } from "@angular/router";
import { TaskActions } from "../../actions";
import { Subscription } from "rxjs";
import { TaskDetails } from "../../models";
import { MatDialog } from "@angular/material";
import { ConfirmDialogComponent } from "../../../entry-components";

@Component({
    selector: "app-view-task",
    templateUrl: "view-task.component.html"
})
export class ViewTaskComponent implements OnDestroy {
    actionsSubscription: Subscription;

    constructor(
        private stateService: StateService,
        private route: ActivatedRoute,
        public dialog: MatDialog
    ) {
        this.actionsSubscription = route.params.subscribe(params =>
            stateService.dispatch(new TaskActions.Load(params.id))
        );
    }

    ngOnDestroy(): void {
        this.actionsSubscription.unsubscribe();
    }

    onDelete(taskDetails: TaskDetails) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: "384px"
        });
        dialogRef.componentInstance.actionText = "Delete";
        dialogRef.componentInstance.message = `Are you sure you want to delete ${
            taskDetails.name
        }?`;
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.stateService.dispatch(new TaskActions.Delete(taskDetails));
            }
        });
    }
}
