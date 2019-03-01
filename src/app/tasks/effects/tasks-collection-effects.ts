import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { ApiService, StateService } from "../../services";
import { TasksCollectionActions } from "../actions";

@Injectable()
export class TasksCollectionEffects {
    @Effect()
    loadCollection$: Observable<Action> = this.actions$.pipe(
        ofType(
            TasksCollectionActions.TasksCollectionActionsTypes.LoadCollection
        ),
        withLatestFrom(
            this.stateService.statusFilter$,
            this.stateService.paginationOptions$
        ),
        switchMap(([_, statusFilter, paginationOptions]) =>
            this.apiService
                .getTasksCollection(statusFilter, paginationOptions)
                .pipe(
                    map(
                        result =>
                            new TasksCollectionActions.LoadCollectionSuccess(
                                result
                            )
                    ),
                    catchError(() =>
                        of(new TasksCollectionActions.LoadCollectionFail())
                    )
                )
        )
    );

    @Effect()
    paginationChange$: Observable<Action> = this.actions$.pipe(
        ofType(
            TasksCollectionActions.TasksCollectionActionsTypes.PaginationChange
        ),
        map(() => new TasksCollectionActions.LoadCollection())
    );

    @Effect()
    filterByStatus$: Observable<Action> = this.actions$.pipe(
        ofType(
            TasksCollectionActions.TasksCollectionActionsTypes.FilterByStatus
        ),
        map(() => new TasksCollectionActions.LoadCollection())
    );

    constructor(
        private actions$: Actions,
        private apiService: ApiService,
        private stateService: StateService
    ) {}
}
