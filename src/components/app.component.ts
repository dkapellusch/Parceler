import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
    selector: 'app',
 template: `
<div style="margin-left:10px; margin-top:5px;">
    <div>
        <a [routerLink]="['/home']">Home</a>
    </div>

    <div>
        <a [routerLink]="['/counter']">Counter</a>
    </div>

    <div class="nav-bottom"></div>

    <router-outlet></router-outlet>
        
</div>

`,
styles: [` 

.nav-bottom {
    margin-bottom: 30px;
}

`]
})

export class AppComponent implements OnInit {

    ngOnInit() {
    }
}