import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-window',
  templateUrl: './task-window.component.html',
  styleUrls: ['./task-window.component.scss']
})
export class TaskWindowComponent implements OnInit {

  public windowState = true;

  constructor() { }

  ngOnInit() {
  }

}
