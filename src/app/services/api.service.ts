import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {User} from "../models";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
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

    getTasksCollection(status: string, paginationOptions: PaginationOptions): Observable<{ tasks: Task[], count: number }> {
        let params = new HttpParams();
        if (paginationOptions.size) {
            params = params.set('limit', paginationOptions.size.toString());
        }
        if (paginationOptions.index) {
            params = params.set('offset', (paginationOptions.index * paginationOptions.size).toString());
        }
        if (status) {
            params = params.set('status', status);
        }
        return this.httpClient.get(`${API_URL}/tasks`, {params, headers, observe: 'response'}).pipe(map(
            (response: HttpResponse<any>) => Object.assign({}, {
                tasks: response.body.items,
                count: +response.headers.get("x-total-matching-query")
            })
        ));
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
