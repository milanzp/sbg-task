import {Component, OnInit} from "@angular/core";

import {StateService} from "../../../services";
import {UserActions} from '../../../actions';
import {MatDialog, PageEvent} from "@angular/material";
import {Router} from "@angular/router";
import {TasksCollectionActions} from "../../actions";
import {Task} from "../../models";

@Component({
    selector: 'app-tasks-collection',
    templateUrl: 'tasks-collection.component.html',
    styleUrls: ['tasks-collection.component.css']
})

export class TasksCollectionComponent implements OnInit {
    constructor(private stateService: StateService, private router: Router) {}

    ngOnInit(): void {
        this.stateService.dispatch(new TasksCollectionActions.LoadCollection());
        this.stateService.dispatch(new UserActions.Load());
    }

    onPagination(pageEvent: PageEvent): void {
        this.stateService.dispatch(new TasksCollectionActions.PaginationChange(pageEvent));
    }

    onSelectedTask(task: Task): void {
        this.router.navigate(['/tasks', task.id]);
    }

    onStatusSelection(status: any): void {
        this.stateService.dispatch(new TasksCollectionActions.FilterByStatus(status));
    }
}
