import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../models";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {PaginationOptions, Task, TaskDetails} from "../tasks/models";

const API_URL = environment.apiUrl;

let headers = new HttpHeaders();
headers = headers.set('X-SBG-Auth-Token', '20a30762884f477aad1ca96830fc1bcd');

@Injectable()
export class ApiService {

    constructor(private httpClient: HttpClient) {
    }

    getTasksCollection(status: string, paginationOptions: PaginationOptions): Observable<Task[]> {
        const limitParameter = paginationOptions.limit ? 'limit=' + paginationOptions.limit : '';
        const offsetParameter = paginationOptions.offset ? '&offset=' + paginationOptions.offset : '';
        const statusParameter = status ? '&status=' + status : '';
        return this.httpClient.get<{ items: Task[] }>(`${API_URL}/tasks?${limitParameter}${offsetParameter}${statusParameter}`, {headers}).pipe(map(response => <Task[]>(response.items)));
    }

    getTaskDetails(id: string): Observable<TaskDetails> {
        return this.httpClient.get<TaskDetails>(`${API_URL}/tasks/${id}`, {headers});
    }

    getUserInfo(): Observable<User> {
        return this.httpClient.get<User>(`${API_URL}/user`, {headers});
    }

    deleteTask(id: string): Observable<any> {
        return this.httpClient.delete(`${API_URL}/tasks/${id}`, {headers})
    }

    createProject(project: string): Observable<any> {
        return this.httpClient.post(`${API_URL}/projects`, {project}, {headers});
    }
}
