import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { INCREMENT, DECREMENT, RESET } from "../reducers/counter.reducer";
interface AppState {
  count: number;
}

@Component({
  selector: "app-counter",

/*************************** HTML ***************************/
  
  template: `

<div class="container">
    <button class="btn btn-primary btn2 flexItem" (click)="increment()">Increment</button>
    <button class="btn btn-warning flexItem" (click)="decrement()">Decrement</button>
    <button class="btn btn-danger flexItem" (click)="reset()">Reset Counter</button>
    <span class="count flexItem">Current Count: {{ count$ | async }}</span>
</div>
<hr/>

  `,
/*************************** HTML ***************************/


/*************************** CSS ***************************/

  styles:[`

    .btn {
        border: medium solid rgba(51, 50, 50, 0.123);
        margin:auto;
    }

    .count {
       color: black !important;
       margin:auto;
    }

    .container {
      display:flex !important;
      flex-direction:column;
      padding-right:20%;
    }

    .flexItem {
    
    }

  `]
  
/*************************** CSS ***************************/

})
export class CounterComponent {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.select(a => a.count);
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

}
