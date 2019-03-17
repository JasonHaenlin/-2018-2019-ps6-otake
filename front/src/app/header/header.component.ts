import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public icone = 'fas fa-home';
  public arrow_icone = 'fas fa-angle-down';

  constructor() { }

  ngOnInit() {
  }

}
