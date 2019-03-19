import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/services/university/university.service';
import { Observable } from 'rxjs';
import { University } from 'src/models/university';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-university-content',
  templateUrl: './university-content.component.html',
  styleUrls: ['./university-content.component.scss']
})
export class UniversityContentComponent implements OnInit {

  public university$: Observable<University>;

  constructor(
    private universityService: UniversityService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.university$ = this.universityService.getUniversity(+this.route.snapshot.paramMap.get('id'));
  }

  replaceURLWithHTMLLinks(text) {
      const exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
      return text.replace(exp, '<a href=\'$1\'>$1</a>');
  }

}
