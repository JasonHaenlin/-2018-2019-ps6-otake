import { Testimonial } from './Testimonial';
import { Identifiers } from '@angular/compiler';

export interface UniversityDetails {
  name?: string;
  big_picture?: string;
  presentation_text?: string;
  admission_text?: string;
  student_life_text?: string;
  cost_of_living_text?: string;
  testimonial?: Testimonial[];
}
