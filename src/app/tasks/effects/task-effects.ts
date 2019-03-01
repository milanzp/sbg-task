import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { TaskActions } from "../actions";
import { catchError, map, switchMap } from "rxjs/operators";
import { ApiService } from "../../services";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

@Injectable()
export class TaskEffects {
    @Effect()
    load$: Observable<Action> = this.actions$.pipe(
        ofType<TaskActions.Load>(TaskActions.TaskActionsTypes.Load),
        switchMap(action =>
            this.apiService.getTaskDetails(action.payload).pipe(
                map(taskDetails => new TaskActions.LoadSuccess(taskDetails)),
                catchError(() => of(new TaskActions.LoadFail()))
            )
        )
    );

    @Effect()
    delete$: Observable<Action> = this.actions$.pipe(
        ofType<TaskActions.Delete>(TaskActions.TaskActionsTypes.Delete),
        switchMap(action =>
            this.apiService.deleteTask(action.payload.id).pipe(
                map(() => new TaskActions.DeleteSuccess(action.payload.name)),
                catchError(errorResponse =>
                    of(new TaskActions.DeleteFail(errorResponse.error.message))
                )
            )
        )
    );

    @Effect({ dispatch: false })
    deleteFail$: Observable<any> = this.actions$.pipe(
        ofType<TaskActions.DeleteFail>(TaskActions.TaskActionsTypes.DeleteFail),
        map(action =>
            this.snackBar.open("Delete failed: " + action.payload, "", {
                duration: 2000
            })
        )
    );

    @Effect({ dispatch: false })
    deleteSuccess$: Observable<any> = this.actions$.pipe(
        ofType<TaskActions.DeleteSuccess>(
            TaskActions.TaskActionsTypes.DeleteSuccess
        ),
        map(action => {
            this.router.navigate(["/tasks"]);
            this.snackBar.open("Successfully deleted: " + action.payload, "", {
                duration: 2000
            });
        })
    );

    constructor(
        private actions$: Actions,
        private apiService: ApiService,
        private snackBar: MatSnackBar,
        private router: Router
    ) {}
}
