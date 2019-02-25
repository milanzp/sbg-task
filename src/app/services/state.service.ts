import {Injectable} from "@angular/core";
import {Action, select, Store} from "@ngrx/store";

import * as fromRoot from '../reducers';
import {Observable} from "rxjs";
import {Task, User} from "../models";
import {TasksSelectors} from "../selectors";
import {UserSelectors} from "../selectors/user.selectors";

@Injectable()
export class StateService {

    tasksCollection$: Observable<Task[]> = this.store.pipe(select(TasksSelectors.getTasksCollection));

    user$: Observable<User> = this.store.pipe(select(UserSelectors.getUser));

    constructor(private store: Store<fromRoot.State>) {}

    dispatch(action: Action): void {
        this.store.dispatch(action);
    }
}
