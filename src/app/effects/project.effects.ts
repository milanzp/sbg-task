import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {catchError, map, switchMap} from "rxjs/operators";
import {ApiService} from "../services";
import {ProjectActions} from "../actions";

@Injectable()
export class ProjectEffects {

    @Effect()
    create$: Observable<Action> = this.actions$.pipe(
        ofType<ProjectActions.Create>(ProjectActions.ProjectActionsTypes.Create),
        switchMap(action => this.apiService.createProject(action.payload).pipe(
            map(project => {
                console.log('EFEKAT');
                return new ProjectActions.CreateSuccess(project);
            }),
            catchError(() => of(new ProjectActions.CreateFail()))
        ))
    );

    constructor(private actions$: Actions, private apiService: ApiService) {
    }
}
