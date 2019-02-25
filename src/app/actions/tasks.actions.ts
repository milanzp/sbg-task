import {Action} from "@ngrx/store";
import {Task} from "../models/Task";

export enum TasksActionsTypes {
  LoadCollection = '[Tasks] Load Collection',
  LoadCollectionSuccess = '[Tasks] Load Collection Success',
  LoadCollectionFail = '[Tasks] Load Collection Fail'
}

export class LoadCollection implements Action {
  readonly type = TasksActionsTypes.LoadCollection;
}

export class LoadCollectionSuccess implements Action {
  readonly type = TasksActionsTypes.LoadCollectionSuccess;

  constructor(public payload: Task[]) {}
}

export class LoadCollectionFail implements Action {
  readonly type = TasksActionsTypes.LoadCollectionFail;
}

export type TasksActionsUnion = LoadCollection | LoadCollectionSuccess | LoadCollectionFail;
