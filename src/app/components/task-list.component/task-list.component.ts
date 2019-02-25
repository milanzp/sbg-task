import {Component, Input} from "@angular/core";
import {Task, User} from "../../models";

@Component({
    selector: 'app-task-list',
    templateUrl: 'task-list.component.html',
    styleUrls: ['task-list.component.css']
})

export class TaskListComponent {
    @Input() tasks: Task[];

    @Input() user: User;
}
