import { Component, OnInit, Input } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

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

  showContent() {
    if (this.display) {
      return 'content';
    }
    return 'none';
  }
}
