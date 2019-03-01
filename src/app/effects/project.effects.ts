import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ApiService } from '../services';
import { ProjectActions } from '../actions';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ProjectEffects {
    @Effect()
    create$: Observable<Action> = this.actions$.pipe(
        ofType<ProjectActions.Create>(
            ProjectActions.ProjectActionsTypes.Create
        ),
        switchMap(action =>
            this.apiService.createProject(action.payload).pipe(
                map(project => new ProjectActions.CreateSuccess(project)),
                catchError(errorResponse =>
                    of(
                        new ProjectActions.CreateFail(
                            errorResponse.error.message
                        )
                    )
                )
            )
        )
    );

    @Effect({ dispatch: false })
    createFail$: Observable<any> = this.actions$.pipe(
        ofType<ProjectActions.CreateFail>(
            ProjectActions.ProjectActionsTypes.CreateFail
        ),
        map(action =>
            this.snackBar.open(
                'Creating project failed: ' + action.payload,
                '',
                { duration: 2000 }
            )
        )
    );

    constructor(
        private actions$: Actions,
        private apiService: ApiService,
        private snackBar: MatSnackBar
    ) {}
}
