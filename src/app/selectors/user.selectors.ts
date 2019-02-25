import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromUser from '../reducers/user.reducer';

export namespace UserSelectors {
    export const getState = createFeatureSelector<fromUser.State>('user');

    export const getUser = createSelector(getState, state => state.user);
}
