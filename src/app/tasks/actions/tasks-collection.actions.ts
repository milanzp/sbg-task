import {Action} from "@ngrx/store";
import {PageEvent} from "@angular/material";
import {Task} from "../models";

export enum TasksCollectionActionsTypes {
    LoadCollection = '[Tasks] Load Collection',
    LoadCollectionSuccess = '[Tasks] Load Collection Success',
    LoadCollectionFail = '[Tasks] Load Collection Fail',
    PaginationChange = '[Tasks] Pagination Change',
    FilterByStatus = "[Tasks] Filter By Status"
}

export class LoadCollection implements Action {
    readonly type = TasksCollectionActionsTypes.LoadCollection;
}

export class LoadCollectionSuccess implements Action {
    readonly type = TasksCollectionActionsTypes.LoadCollectionSuccess;

    constructor(public payload: Task[]) {
    }
}

export class LoadCollectionFail implements Action {
    readonly type = TasksCollectionActionsTypes.LoadCollectionFail;
}

export class PaginationChange implements Action {
    readonly type = TasksCollectionActionsTypes.PaginationChange;

    constructor(public payload: PageEvent) {
    }
}

export class FilterByStatus implements Action {
    readonly type = TasksCollectionActionsTypes.FilterByStatus;

    constructor(public payload: string) {}

}

export type TasksCollectionActionsUnion = LoadCollection
    | LoadCollectionSuccess
    | LoadCollectionFail
    | PaginationChange
    | FilterByStatus;
