import {NgModule} from "@angular/core";
import {EffectsModule} from "@ngrx/effects";
import {effects} from "./effects";
import {StoreModule} from "@ngrx/store";
import {containers} from "./containers";
import {components} from "./components";
import {CommonModule} from "@angular/common";
import {TasksRoutingModule} from "./tasks-routing.module";
import {reducers} from "./reducers";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";

@NgModule({
    declarations: [...containers, ...components],
    imports: [
        CommonModule,
        TasksRoutingModule,
        StoreModule.forFeature('tasks', reducers),
        EffectsModule.forFeature(effects),
        FormsModule,
        MaterialModule
    ]
})
export class TasksModule {

}
