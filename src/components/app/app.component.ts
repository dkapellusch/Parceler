import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
    selector: 'app',
 template: `
 <div>
    <a [routerLink]="['/home']">Home</a>
</div>
<div>
</div>
<div>
    <a [routerLink]="['/counter']">Counter</a>
</div>
<router-outlet></router-outlet>
`
,
})

export class AppComponent implements OnInit {

    ngOnInit() {
        console.log('Main component initialized');
    }
}