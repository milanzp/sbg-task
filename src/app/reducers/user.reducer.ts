import { User } from "../models";
import { UserActions } from "../actions";

export interface State {
    user: User;
}

const initialState: State = {
    user: null
};

export function reducer(
    state: State = initialState,
    action: UserActions.UserActionsUnion
) {
    switch (action.type) {
        case UserActions.UserActionsTypes.LoadSuccess:
            return Object.assign({}, state, { user: action.payload });
        default:
            return state;
    }
}
