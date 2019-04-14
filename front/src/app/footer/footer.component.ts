import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public schoolYear = '';

  constructor() { }

  ngOnInit() {
    this.setfilesYearSession();
  }

  private setfilesYearSession() {
    const currentDate = new Date();
    let admissionyear = currentDate.getFullYear();
    if (currentDate.getMonth() > 8) { admissionyear++; }
    this.schoolYear = `${admissionyear}-${++admissionyear}`;
  }
}
