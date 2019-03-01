import { Action } from '@ngrx/store';
import { TaskDetails } from '../tasks/models';

export enum ProjectActionsTypes {
    Create = '[Project] Create',
    CreateSuccess = '[Project] Create Success',
    CreateFail = '[Project] Create Fail'
}

export class Create implements Action {
    readonly type = ProjectActionsTypes.Create;

    constructor(public payload: string) {}
}

export class CreateSuccess implements Action {
    readonly type = ProjectActionsTypes.CreateSuccess;

    constructor(public payload: TaskDetails) {}
}

export class CreateFail implements Action {
    readonly type = ProjectActionsTypes.CreateFail;

    constructor(public payload: string) {}
}

export type ProjectActionsUnion = Create | CreateSuccess | CreateFail;
