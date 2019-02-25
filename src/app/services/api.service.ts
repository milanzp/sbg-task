import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Task, User} from "../models";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

const API_URL = environment.apiUrl;

let headers = new HttpHeaders();
headers = headers.set('X-SBG-Auth-Token', '20a30762884f477aad1ca96830fc1bcd');

@Injectable()
export class ApiService {


    constructor(private httpClient: HttpClient) {
    }

    getTasksCollection(): Observable<Task[]> {
        return this.httpClient.get<{ items: Task[] }>(`${API_URL}/tasks`, {headers}).pipe(map(response => <Task[]>(response.items)));
    }

    getUserInfo(): Observable<User> {
        return this.httpClient.get<User>(`${API_URL}/user`, {headers});
    }
}
