import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() text: string;
  @Input() type: string;

  public style = 'basic';

  constructor() { }

  ngOnInit() {
    this.type = this.type || 'basic';
    if (this.type === 'warning') {
      this.style = 'warning';
    }
  }

}
