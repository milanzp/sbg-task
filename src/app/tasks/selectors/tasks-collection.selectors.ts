import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, TasksState } from '../reducers';

export namespace TasksCollectionSelectors {
    export const getTasksState = createFeatureSelector<State, TasksState>(
        'tasks'
    );

    export const getTasksCollectionState = createSelector(
        getTasksState,
        state => state.tasksCollection
    );

    export const getTasksCollection = createSelector(
        getTasksCollectionState,
        state => state.collection
    );

    export const getLoaded = createSelector(
        getTasksCollectionState,
        state => state.loaded
    );

    export const getCount = createSelector(
        getTasksCollectionState,
        state => state.count
    );

    export const getStatusFilter = createSelector(
        getTasksCollectionState,
        state => state.statusFilter
    );

    export const getPageIndex = createSelector(
        getTasksCollectionState,
        state => state.pageIndex
    );

    export const getPageSize = createSelector(
        getTasksCollectionState,
        state => state.pageSize
    );

    export const combinePaginationOptions = (pageIndex, pageSize) => ({
        size: pageSize,
        index: pageIndex
    });

    export const getPaginationOptions = createSelector(
        getPageIndex,
        getPageSize,
        combinePaginationOptions
    );
}
