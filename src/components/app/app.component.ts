import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
    selector: 'app',
 template: `
 <div>
    <a [routerLink]="['/home']">Home</a>
</div>
<div>
    <a [routerLink]="['/counter']">Counter</a>
</div>
<br>
<br>
<br>
<br>
<br>
<router-outlet></router-outlet>
`
,
})

export class AppComponent implements OnInit {

    ngOnInit() {
    }
}