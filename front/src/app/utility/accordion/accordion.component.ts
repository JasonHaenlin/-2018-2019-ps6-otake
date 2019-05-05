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

  chevron: string[] = ['fa fa-fw fa-chevron-down', 'fa fa-fw fa-chevron-right'];
  public display = false;

  constructor() { }

  ngOnInit() {
  }

  displayContent() {
    this.display = !this.display;
    console.log(this.display, this.chevron[this.display ? 0 : 1]);
  }
}
