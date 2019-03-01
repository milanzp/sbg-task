import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { effects } from './effects';
import { services } from './services';
import { constainers } from './containers';
import { components } from './components';
import { entryComponents } from './entry-components';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [
        AppComponent,
        ...components,
        ...constainers,
        ...entryComponents
    ],
    entryComponents: [...entryComponents],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule.forRoot(),
        EffectsModule.forRoot(effects),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule
    ],
    providers: [...services],
    bootstrap: [AppComponent]
})
export class AppModule {}
