import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss']
})
export class UniversityListComponent implements OnInit {
  destination: string;
  department: string;
  language: string;
  onDetails: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.destination = params.destination;
      this.department = params.department;
      this.language = params.department;
    });
  }

  switchDetailsOrListView() {
    this.onDetails = !this.onDetails;
  }

  goBack(){
    this.location.back();
  }

  // goToDetails(universityName: string) {
  //   this.router.navigate([universityName], {relativeTo: this.route});
  // }

}
