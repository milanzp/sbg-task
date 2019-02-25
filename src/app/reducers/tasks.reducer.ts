import {Task} from "../models/Task";
import {TasksActions} from "../actions";

export interface State {
    collection: Task[];
    loaded: boolean;
}

const initialState: State = {
    collection: [],
    loaded: false
};

export function reducer(state: State = initialState, action: TasksActions.TasksActionsUnion): State {
    switch (action.type) {
        case TasksActions.TasksActionsTypes.LoadCollection:
            return Object.assign({}, state, {loaded: false});
        case TasksActions.TasksActionsTypes.LoadCollectionSuccess:
            return Object.assign({}, state, {collection: action.payload, loaded: true});
        case TasksActions.TasksActionsTypes.LoadCollectionFail:
            return Object.assign({}, state, {loaded: true});
        default:
            return state;
    }
}
