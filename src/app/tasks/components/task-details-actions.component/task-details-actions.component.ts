import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-task-details-actions",
    templateUrl: "task-details-actions.component.html",
    styleUrls: ["task-details-actions.component.css"]
})
export class TaskDetailsActionsComponent {
    @Output() delete: EventEmitter<void> = new EventEmitter<void>();

    onDelete() {
        this.delete.emit();
    }
}
