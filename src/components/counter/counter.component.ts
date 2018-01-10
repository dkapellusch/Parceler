import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { INCREMENT, DECREMENT, RESET } from "../../reducers/counter.reducer";
interface AppState {
  count: number;
}

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
}as any)
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
