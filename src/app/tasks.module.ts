import {NgModule} from "@angular/core";
import {EffectsModule} from "@ngrx/effects";
import {effects} from "./effects";
import {StoreModule} from "@ngrx/store";
import {services} from "./services";
import {containers} from "./containers";
import {components} from "./components";
import {CommonModule} from "@angular/common";
import {reducer} from "./reducers/tasks.reducer";
import {reducer as userReducer} from './reducers/user.reducer'
import {TasksRoutingModule} from "./tasks-routing.module";

@NgModule({
    declarations: [...containers, ...components],
    imports: [
        CommonModule,
        TasksRoutingModule,
        StoreModule.forFeature('tasks', reducer),
        StoreModule.forFeature('user', userReducer),
        EffectsModule.forFeature(effects)
    ],
    providers: [...services]
})
export class TasksModule {

}
