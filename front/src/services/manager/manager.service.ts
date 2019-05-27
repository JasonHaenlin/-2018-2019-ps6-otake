import { Injectable } from '@angular/core';
import { ApplicationHttpClient } from 'src/core/http-client';

const baseEndPoint = 'account/form/';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: ApplicationHttpClient) { }

  sendTestimonialForm(emails: string[]) {
    return this.http.post<string[]>(`${baseEndPoint}testimonial`, emails, 'post testimonials request');
  }
}
