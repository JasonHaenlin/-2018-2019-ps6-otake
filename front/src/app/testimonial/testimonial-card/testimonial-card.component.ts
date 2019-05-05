import { Component, OnInit, Input } from '@angular/core';
import { Testimonial } from 'src/models/Testimonial';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {

  @Input()
  testimonial: Testimonial;

  constructor() { }

  ngOnInit() {
    console.log(this.testimonial);

  }

}
