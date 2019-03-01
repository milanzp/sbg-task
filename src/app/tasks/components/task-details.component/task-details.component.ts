import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskDetails } from '../../models';

@Component({
    selector: 'app-task-details',
    templateUrl: 'task-details.component.html',
    styleUrls: ['task-details.component.css']
})
export class TaskDetailsComponent {
    @Input() taskDetails: TaskDetails;

    @Input() loaded: boolean;

    @Output() delete: EventEmitter<TaskDetails> = new EventEmitter<
        TaskDetails
    >();

    onDelete(): void {
        this.delete.emit(this.taskDetails);
    }
}
