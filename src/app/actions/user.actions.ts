import { Action } from "@ngrx/store";
import { User } from "../models";

export enum UserActionsTypes {
    Load = "[User] Load",
    LoadSuccess = "[User] Load Success",
    LoadFail = "[User] Load Fail"
}

export class Load implements Action {
    readonly type = UserActionsTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type = UserActionsTypes.LoadSuccess;

    constructor(public payload: User) {}
}

export class LoadFail implements Action {
    readonly type = UserActionsTypes.LoadFail;
}

export type UserActionsUnion = Load | LoadSuccess | LoadFail;
