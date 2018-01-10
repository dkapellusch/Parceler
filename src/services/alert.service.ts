import { Injectable } from "@angular/core";

@Injectable()
export class AlertService {
  constructor(
  ) {}

  public AlertSomething(message: string) {
      alert(message);
  }
 
}