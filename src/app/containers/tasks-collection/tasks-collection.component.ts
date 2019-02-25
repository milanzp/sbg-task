import {Component, OnInit} from "@angular/core";

import {StateService} from "../../services";
import {TasksActions} from '../../actions';

@Component({
    selector: 'app-tasks-collection',
    templateUrl: 'tasks-collection.component.html',
})

export class TasksCollectionComponent implements OnInit {

    constructor(private stateService: StateService) {}

    ngOnInit(): void {
        this.stateService.dispatch(new TasksActions.LoadCollection());
    }
}