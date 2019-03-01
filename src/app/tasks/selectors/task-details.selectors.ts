import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, TasksState } from '../reducers';

export namespace TaskDetailsSelectors {
    export const getState = createFeatureSelector<State, TasksState>('tasks');

    export const getTaskDetailsState = createSelector(
        getState,
        state => state.taskDetails
    );

    export const getTaskDetails = createSelector(
        getTaskDetailsState,
        state => state.taskDetails
    );

    export const getLoaded = createSelector(
        getTaskDetailsState,
        state => state.loaded
    );
}
