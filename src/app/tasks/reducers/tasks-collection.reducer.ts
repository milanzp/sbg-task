import {Task} from "../models";
import {TasksCollectionActions} from "../actions";
import {defaultPaginationPageSize, paginationPageSizeOptions} from "../config";
import {TasksCollectionActionsTypes} from "../actions/tasks-collection.actions";

export interface State {
    collection: Task[];
    loaded: boolean;
    statusFilter: string;
    pageSize: number;
    pageIndex: number;
    length: number;
    pageSizeOptions: number[];
}

const initialState: State = {
    collection: [],
    loaded: false,
    statusFilter: '',
    pageSize: defaultPaginationPageSize,
    pageIndex: 0,
    length: 0,
    pageSizeOptions: paginationPageSizeOptions
};

export function reducer(state: State = initialState, action: TasksCollectionActions.TasksCollectionActionsUnion): State {
    switch (action.type) {
        case TasksCollectionActions.TasksCollectionActionsTypes.LoadCollection:
            return Object.assign({}, state, {loaded: false});
        case TasksCollectionActions.TasksCollectionActionsTypes.LoadCollectionSuccess:
            return Object.assign({}, state, {collection: action.payload, loaded: true});
        case TasksCollectionActions.TasksCollectionActionsTypes.LoadCollectionFail:
            return Object.assign({}, state, {loaded: true});
        case TasksCollectionActions.TasksCollectionActionsTypes.PaginationChange:
            return Object.assign({}, state, action.payload);
        case TasksCollectionActionsTypes.FilterByStatus:
            return Object.assign({}, state, {statusFilter: action.payload});
        default:
            return state;
    }
}
