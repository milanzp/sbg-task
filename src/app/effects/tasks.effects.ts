import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Action} from "@ngrx/store";

import {Observable, of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";
import {ApiService} from "../services";
import {TasksActions} from "../actions";

@Injectable()
export class TasksEffects {
    @Effect()
    loadCollection$: Observable<Action> = this.actions$.pipe(
        ofType(TasksActions.TasksActionsTypes.LoadCollection),
        switchMap(() => this.apiService.getTasksCollection().pipe(
            map(tasks => new TasksActions.LoadCollectionSuccess(tasks)),
            catchError(() => of(new TasksActions.LoadCollectionFail()))
        ))
    );

    constructor(private actions$: Actions, private apiService: ApiService) {
    }
}
