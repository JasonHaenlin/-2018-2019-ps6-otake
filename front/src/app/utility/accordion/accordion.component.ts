import { Component, OnInit, Input } from '@angular/core';
import { ContractArea } from 'src/models/ContractArea';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input()
  formatedPastContracts: ContractArea;

  public display = true;

  constructor() { }

  ngOnInit() {
  }

  displayContent() {
    this.display = !this.display;
    console.log(this.display);
  }
}
