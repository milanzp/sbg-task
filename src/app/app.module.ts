import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {reducers, metaReducers} from './reducers';
import {environment} from '../environments/environment';
import {HttpClientModule} from "@angular/common/http";
import {TasksModule} from "./tasks.module";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        StoreRouterConnectingModule.forRoot(),
        EffectsModule.forRoot([]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        TasksModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
