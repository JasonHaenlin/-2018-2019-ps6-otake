import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.definefilesYearSession();
  }

  private definefilesYearSession() {
    const currentDate = new Date();
    let admissionYear = currentDate.getFullYear();
    if (currentDate.getMonth() > 8) { admissionYear++; }
    // `${admissionYear}-${++admissionYear}`;
  }
}
