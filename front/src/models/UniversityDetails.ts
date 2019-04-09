import { Testimonial } from './Testimonial';

export interface University {
    id?: number;
    name?: string;
    city_id?: number;
    cost_of_living?: number;
    nb_of_place?: number;
    admission_rate?: number;
    small_picture?: string;
    big_picture?: string;
    presentation_text?: string;
    admission_text?: string;
    student_life_text?: string;
    cost_of_living_text?: string;
    testimonials?: Testimonial[];
}
