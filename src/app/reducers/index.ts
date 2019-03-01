import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";

import * as fromUser from "./user.reducer";
import * as fromRouter from "@ngrx/router-store";

export interface State {
    user: fromUser.State;
    router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
    user: fromUser.reducer,
    router: fromRouter.routerReducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return (state: State, action: any): any => {
        const result = reducer(state, action);
        console.groupCollapsed(action.type);
        console.log("prev state", state);
        console.log("action", action);
        console.log("next state", result);
        console.groupEnd();

        return result;
    };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger]
    : [];
