import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { HomeComponent } from "./components/home/home.component";
import { NgbAccordionConfig } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    bootstrap: [HomeComponent],
    imports:[
        BrowserModule
    ],
    declarations:[
        HomeComponent
    ],
    providers:[NgbAccordionConfig]
})
export class AppModule{}