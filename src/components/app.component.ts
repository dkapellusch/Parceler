import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
    selector: 'app',
 template: `
<div style="margin-left:50px;">
    <div>
        <a [routerLink]="['/home']">Home</a>
    </div>
    <div>
        <a [routerLink]="['/counter']">Counter</a>
    </div>
    <div>
        <a [routerLink]="['/test']">Test</a>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <router-outlet></router-outlet>
</div>

`
,
})

export class AppComponent implements OnInit {

    ngOnInit() {
    }
}