import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/services/university/university.service';
import { Testimonial } from 'src/models/Testimonial';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testimonial-list',
  templateUrl: './testimonial-list.component.html',
  styleUrls: ['./testimonial-list.component.scss']
})
export class TestimonialListComponent implements OnInit {

  private testimonial$: Observable<Testimonial[]>;

  constructor(
    private universityService: UniversityService
  ) { }

  ngOnInit() {
    this.testimonial$ = this.universityService.getTestimonials();
  }

}
