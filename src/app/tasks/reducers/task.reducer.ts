import {TaskDetails} from "../models";
import {TaskActions} from "../actions";

export interface State {
    taskDetails: TaskDetails;
    loaded: boolean;
}

const initialState: State = {
    taskDetails: null,
    loaded: false
};

export function reducer(state: State = initialState, action: TaskActions.TaskDetailsActionsUnion): State {
    switch (action.type) {
        case TaskActions.TaskActionsTypes.Load:
            return Object.assign({}, state, {loaded: false});
        case TaskActions.TaskActionsTypes.LoadSuccess:
            return Object.assign({}, state, {taskDetails: action.payload, loaded: true});
        case TaskActions.TaskActionsTypes.LoadFail:
            return Object.assign({}, state, {taskDetails: null, loaded: false});
        default:
            return state;
    }
}
