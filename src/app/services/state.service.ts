import {Injectable} from "@angular/core";
import {Action, select, Store} from "@ngrx/store";

import * as fromRoot from '../reducers';
import {Observable} from "rxjs";
import {Task} from "../models/Task";
import {TasksSelectors} from "../selectors";

@Injectable()
export class StateService {

    tasksCollection$: Observable<Task[]> = this.store.pipe(select(TasksSelectors.getTasksCollection));

    constructor(private store: Store<fromRoot.State>) {}

    dispatch(action: Action): void {
        this.store.dispatch(action);
    }
}
