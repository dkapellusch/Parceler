import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app',
 template: `
<h1>
    {{text}}
</h1>
<button (click)="test(el.value)" #el >A Button </button >
`
})

export class HomeComponent implements OnInit {
    text: String = 'Hello world';

    constructor() {

    }
    
    async test(event:Event) {
        let response = await fetch("http://localhost:8081/api/test");
        let jsonResponse = await response.json();
        alert(JSON.stringify(jsonResponse));
    }
    ngOnInit() {
        console.log('Main component initialized');
    }
}