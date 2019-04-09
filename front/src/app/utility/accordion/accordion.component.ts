import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input()
  title: string;

  public display = true;

  constructor() { }

  ngOnInit() {
  }

  displayContent() {
    this.display = !this.display;
    console.log(this.display);
  }
}
