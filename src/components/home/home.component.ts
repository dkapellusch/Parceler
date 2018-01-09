import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app',
 template: `
<h1>
    {{text}}
</h1>
<button class="btn btn-primary btn2" (click)="test(el.value)" #el >A Button </button >
`
})

export class HomeComponent implements OnInit {
    text: String = 'Hello world1';
    
    async test(event:Event) {
        let response = await fetch("http://localhost:8081/api/test",{mode: 'cors'});
        let jsonResponse = await response.json();
        alert(JSON.stringify(jsonResponse));
        let socket = new WebSocket("ws://localhost:8081");
        socket.onmessage= (m) => {
            alert("Wow I got " + JSON.stringify(m.data));
        }
    }
    ngOnInit() {
        console.log('Main component initialized');
    }
}