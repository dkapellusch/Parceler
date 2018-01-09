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
    
    test(event:Event) {
        alert("test" + event);
    }
    ngOnInit() {
        console.log('Main component initialized');
    }
}