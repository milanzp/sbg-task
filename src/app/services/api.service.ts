import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Task} from "../models/Task";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiService {

    constructor(private httpClient: HttpClient) {
    }

    getTasksCollection(): Observable<Task[]> {
        return of([
            Object.assign({}, new Task(), {id: 'asdf1', name: 'task1'}),
            Object.assign({}, new Task(), {id: 'qwer2', name: 'task2'})
        ]);
    }
}
