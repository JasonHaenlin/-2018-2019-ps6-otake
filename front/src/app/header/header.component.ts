import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public icon = 'fas fa-home fa-2x';
  public arrow_icon = 'fas fa-angle-down';

  constructor() { }

  ngOnInit() {
  }

}
