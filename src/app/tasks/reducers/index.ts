import * as fromTasksCollection from './tasks-collection.reducer';
import * as fromTask from './task.reducer';
import { ActionReducerMap } from '@ngrx/store';
import * as fromRoot from '../../reducers';

export interface TasksState {
    tasksCollection: fromTasksCollection.State;
    taskDetails: fromTask.State;
}

export interface State extends fromRoot.State {
    tasks: TasksState;
}

export const reducers: ActionReducerMap<TasksState, any> = {
    tasksCollection: fromTasksCollection.reducer,
    taskDetails: fromTask.reducer
};
