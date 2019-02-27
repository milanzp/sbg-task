import {Component, OnDestroy} from "@angular/core";
import {StateService} from "../../../services";
import {ActivatedRoute} from "@angular/router";
import {TaskActions} from '../../actions';
import {Subscription} from "rxjs";
import {TaskDetails} from "../../models";

@Component({
    selector: 'app-view-task',
    templateUrl: 'view-task.component.html'
})

export class ViewTaskComponent implements OnDestroy {
    actionsSubscription: Subscription;

    constructor(private stateService: StateService, private route: ActivatedRoute) {
        this.actionsSubscription = route.params.subscribe(
            params => stateService.dispatch(new TaskActions.Load(params.id))
        );
    }

    ngOnDestroy(): void {
        this.actionsSubscription.unsubscribe();
    }

    onDelete(taskDetails: TaskDetails) {
        this.stateService.dispatch(new TaskActions.Delete(taskDetails.id));
    }
}
