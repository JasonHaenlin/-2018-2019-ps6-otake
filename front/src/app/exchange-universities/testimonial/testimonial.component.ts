import { Component, OnInit, Input } from '@angular/core';
import { Testimonial } from 'src/models/Testimonial';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  @Input()
  testimonial: Testimonial;

  constructor() { }

  ngOnInit() {

  }

}
