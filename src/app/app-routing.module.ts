import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TasksCollectionComponent} from "./containers";

const routes: Routes = [
    {path: '', redirectTo: '/tasks', pathMatch: 'full'},
    {path: 'tasks', component: TasksCollectionComponent},
    {path: '**', redirectTo: '/tasks'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
