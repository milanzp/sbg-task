import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TasksCollectionComponent, ViewTaskComponent} from "./containers";

export const routes: Routes = [
    {path: '', component: TasksCollectionComponent},
    {path: ':id', component: ViewTaskComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksRoutingModule {
}

