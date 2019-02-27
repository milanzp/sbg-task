import {Action} from "@ngrx/store";
import {TaskDetails} from "../models";

export enum TaskActionsTypes {
    Load = '[Task] Load',
    LoadSuccess = '[Task] Load Success',
    LoadFail = '[Task] Load Fail',
    Delete = '[Task] Delete',
    DeleteSuccess = '[Task] Delete Success',
    DeleteFail = '[Task] Delete Fail',
}

export class Load implements Action {
    readonly type = TaskActionsTypes.Load;

    constructor(public payload: string) {
    }
}

export class LoadSuccess implements Action {
    readonly type = TaskActionsTypes.LoadSuccess;

    constructor(public payload: TaskDetails) {
    }
}

export class LoadFail implements Action {
    readonly type = TaskActionsTypes.LoadFail;
}

export class Delete implements Action {
    readonly type = TaskActionsTypes.Delete;

    constructor(public payload: string) {
    }
}

export class DeleteSuccess implements Action {
    readonly type = TaskActionsTypes.DeleteSuccess;
}

export class DeleteFail implements Action {
    readonly type = TaskActionsTypes.DeleteFail;
}

export type TaskDetailsActionsUnion = Load
    | LoadSuccess
    | LoadFail
    | Delete
    | DeleteSuccess
    | DeleteFail;
