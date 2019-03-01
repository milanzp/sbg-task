import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header-actions",
    templateUrl: "header-actions.component.html",
    styleUrls: ["header-actions.component.css"]
})
export class HeaderActionsComponent {
    @Output() createProject: EventEmitter<void> = new EventEmitter<void>();

    onCreateProject() {
        this.createProject.emit();
    }
}
