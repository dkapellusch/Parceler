import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { counterReducer } from "./reducers/counter.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AlertEffect } from "./effects/alert.effect";
import { CounterComponent } from "./components/counter/counter.component";
import { Actions } from "@ngrx/effects/src/actions";
import { Store } from "@ngrx/store/src/store";
import { AppComponent } from "./components/app/app.component";
import { AlertService } from "./services/alert.service";

@NgModule({
    imports: [
        BrowserModule,
        StoreModule.forRoot({ count: counterReducer }),
        StoreDevtoolsModule.instrument({
            maxAge: 10
        }),
        EffectsModule.forRoot([AlertEffect]),
        RouterModule.forRoot([
            {path: 'home', component: HomeComponent},
            { path: "counter", component: CounterComponent },
        ])
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        CounterComponent
    ],
    providers:[Store, Actions, AlertService],
    bootstrap: [AppComponent]    
})
export class AppModule {}