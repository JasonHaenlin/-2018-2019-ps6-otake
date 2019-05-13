import { Component, OnInit, Input } from '@angular/core';
import { ContractArea } from 'src/models/ContractArea';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-accordion',
  animations: [
    trigger('openClose', [
      state('open', style({
        'height': '*', 'opacity': '1', 'visibility': 'visible'
      })),
      state('close', style({
        'height': '0', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('open => close', [group([
        animate('400ms ease-in-out', style({
          'opacity': '0'
        })),
        animate('600ms ease-in-out', style({
          'height': '0'
        })),
        animate('700ms ease-in-out', style({
          'visibility': 'hidden'
        }))
      ]
      )]),
      transition('close => open', [group([
        animate('1ms ease-in-out', style({
          'visibility': 'visible'
        })),
        animate('600ms ease-in-out', style({
          'height': '*'
        })),
        animate('800ms ease-in-out', style({
          'opacity': '1'
        }))
      ]
      )])
    ]),
  ],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  constructor() { }

  @Input()
  formatedPastContracts: ContractArea;
  public display = false;

  ngOnInit() { }

  displayContent() {
    this.display = !this.display;
  }
}
