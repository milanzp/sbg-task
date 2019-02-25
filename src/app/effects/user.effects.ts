import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Action} from "@ngrx/store";

import {Observable, of} from "rxjs";
import {ApiService} from "../services";
import {UserActions} from "../actions";
import {catchError, map, switchMap} from "rxjs/operators";

@Injectable()
export class UserEffects {
    @Effect()
    loadUser$: Observable<Action> = this.actions$.pipe(
        ofType(UserActions.UserActionsTypes.Load),
        switchMap(() => this.apiService.getUserInfo().pipe(
            map(userInfo => new UserActions.LoadSuccess(userInfo)),
            catchError(() => of(new UserActions.LoadFail()))
        ))
    );

    constructor(private actions$: Actions, private apiService: ApiService) {
    }
}
