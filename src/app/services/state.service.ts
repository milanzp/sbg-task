import { Injectable } from "@angular/core";
import { Action, select, Store } from "@ngrx/store";

import * as fromRoot from "../reducers";
import { Observable } from "rxjs";
import { User } from "../models";
import { UserSelectors } from "../selectors";
import { Task, TaskDetails } from "../tasks/models";

import {
    TasksCollectionSelectors,
    TaskDetailsSelectors
} from "../tasks/selectors";

@Injectable()
export class StateService {
    tasksCollection$: Observable<Task[]> = this.store.pipe(
        select(TasksCollectionSelectors.getTasksCollection)
    );

    tasksCollectionLoaded$: Observable<boolean> = this.store.pipe(
        select(TasksCollectionSelectors.getLoaded)
    );

    tasksCollectionCount$: Observable<number> = this.store.pipe(
        select(TasksCollectionSelectors.getCount)
    );

    taskDetails$: Observable<TaskDetails> = this.store.pipe(
        select(TaskDetailsSelectors.getTaskDetails)
    );

    taskDetailsLoaded$: Observable<boolean> = this.store.pipe(
        select(TaskDetailsSelectors.getLoaded)
    );

    statusFilter$: Observable<string> = this.store.pipe(
        select(TasksCollectionSelectors.getStatusFilter)
    );

    paginationOptions$: Observable<any> = this.store.pipe(
        select(TasksCollectionSelectors.getPaginationOptions)
    );

    user$: Observable<User> = this.store.pipe(select(UserSelectors.getUser));

    constructor(private store: Store<fromRoot.State>) {}

    dispatch(action: Action): void {
        this.store.dispatch(action);
    }
}
