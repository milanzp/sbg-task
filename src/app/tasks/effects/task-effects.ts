import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {TaskActions} from "../actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {ApiService} from "../../services";

@Injectable()
export class TaskEffects {
    @Effect()
    load$: Observable<Action> = this.actions$.pipe(
        ofType<TaskActions.Load>(TaskActions.TaskActionsTypes.Load),
        switchMap(action => this.apiService.getTaskDetails(action.payload).pipe(
            map(taskDetails => new TaskActions.LoadSuccess(taskDetails)),
            catchError(() => of(new TaskActions.LoadFail()))
        ))
    );

    @Effect()
    delete$: Observable<Action> = this.actions$.pipe(
        ofType<TaskActions.Delete>(TaskActions.TaskActionsTypes.Delete),
        switchMap(action => this.apiService.deleteTask(action.payload).pipe(
            map(() => new TaskActions.DeleteSuccess()),
            catchError(() => of(new TaskActions.DeleteFail()))
        ))
    );

    constructor(private actions$: Actions, private apiService: ApiService) {
    }
}
