import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
    selector: 'home',
 template: `

    <button class="btn btn-primary btn2" (click)="fetchFromServer(el.value)" #el> Send Fetch </button >
    <button class="btn btn-primary btn2" (click)="openWebSocket()" #el2> Open Web Socket </button >

`
})

export class HomeComponent implements OnInit {

    constructor(private alertService: AlertService) {}
   
    text: String = 'Hello world1';
    
    async fetchFromServer(event:Event) {
        let response = await fetch("http://localhost:8081/api/test",{mode: 'cors'});
        let jsonResponse = await response.json();
        this.alertService.AlertSomething((JSON.stringify(jsonResponse)));
    }
    
    openWebSocket() {
        let socket = new WebSocket("ws://localhost:8081");
        socket.onmessage= (m) => {
            this.alertService.AlertSomething("Wow I got " + JSON.stringify(m.data));
        }
    }
    

    ngOnInit() {
    }
}