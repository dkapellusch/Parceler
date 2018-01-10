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

<div style="margin: auto; width:100vw; display:inline-block;">
    <button class="btn btn-primary btn2" (click)="increment()">Increment</button>
    <button class="btn btn-warning" (click)="decrement()">Decrement</button>
    <button class="btn btn-danger" (click)="reset()">Reset Counter</button>
    <div>Current Count: {{ count$ | async }}</div>
</div>
<hr/>

  `,
/*************************** HTML ***************************/


/*************************** CSS ***************************/

  styles:[`

    .btn {
        border: medium solid rgba(51, 50, 50, 0.123);
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
