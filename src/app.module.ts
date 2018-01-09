import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { HomeComponent } from "./components/home/home.component";


@NgModule({
    bootstrap: [HomeComponent],
    imports:[
        BrowserModule
    ],
    declarations:[
        HomeComponent
    ]
})
export class AppModule{}