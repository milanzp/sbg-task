import {NgModule} from "@angular/core";
import {EffectsModule} from "@ngrx/effects";
import {effects} from "./effects";
import {StoreModule} from "@ngrx/store";
import {services} from "../services";
import {containers} from "./containers";
import {components} from "./components";
import {CommonModule} from "@angular/common";
import {TasksRoutingModule} from "./tasks-routing.module";
import {
    MatButtonModule, MatDialogModule, MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTableModule
} from "@angular/material";
import {reducers} from "./reducers";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [...containers, ...components],
    imports: [
        CommonModule,
        TasksRoutingModule,
        StoreModule.forFeature('tasks', reducers),
        EffectsModule.forFeature(effects),
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatSelectModule,
        MatDialogModule,
        MatInputModule

    ]
})
export class TasksModule {

}
