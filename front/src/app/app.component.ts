
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public flowActived = false;

  constructor() { }

  flowActivedEvent(state: boolean) {
    this.flowActived = state;
  }
}
