import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromTasks from '../reducers/tasks.reducer';

export namespace TasksSelectors {
    export const getState = createFeatureSelector<fromTasks.State>('tasks');

    export const getTasksCollection = createSelector(getState, state => state.collection);
}
