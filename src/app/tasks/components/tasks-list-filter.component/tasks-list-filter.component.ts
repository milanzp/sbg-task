import {Component, EventEmitter, Output} from "@angular/core";
import {availableTaskStatuses} from "../../config";

@Component({
    selector: 'app-tasks-list-filter',
    templateUrl: 'tasks-list-filter.component.html'
})

export class TasksListFilterComponent {

    statuses = availableTaskStatuses;

    @Output() statusSelected: EventEmitter<string> = new EventEmitter<string>();

    onStatusSelection(status: string) {
        this.statusSelected.emit(status);
    }
}
