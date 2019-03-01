import {Component, EventEmitter, Input, Output} from "@angular/core";
import {MatTableDataSource, PageEvent} from "@angular/material";
import {paginationPageSizeOptions} from "../../config";
import {PaginationOptions, Task} from "../../models";

@Component({
    selector: 'app-task-list',
    templateUrl: 'task-list.component.html',
    styleUrls: ['task-list.component.css']
})
export class TaskListComponent {
    pageSizeOptions = paginationPageSizeOptions;

    tasksDataSource: MatTableDataSource<Task>;

    @Input()
    set tasks(tasks: Task[]) {
        this.tasksDataSource = new MatTableDataSource(tasks);
    }

    @Input() count: number;

    @Input() selectedStatus: string;

    @Input() loaded: boolean;

    @Input() paginationOptions: PaginationOptions;

    @Output() paginationChanged: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

    @Output() taskSelected: EventEmitter<Task> = new EventEmitter<Task>();

    onPagination(pageEvent: PageEvent): void {
        this.paginationChanged.emit(pageEvent);
    }

    onSelectTask(task: Task): void {
        this.taskSelected.emit(task);
    }
}
