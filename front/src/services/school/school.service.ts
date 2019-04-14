import { Deadline } from './../../models/Deadline';
import { Injectable } from '@angular/core';
import { ApplicationHttpClient } from 'src/core/http-client';
import { Observable } from 'rxjs';

const baseEndPoint = 'school/';
@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: ApplicationHttpClient) { }

  getdeadlines(openingYear: number): Observable<Deadline[]> {
    return this.http.get<Deadline[]>
      (`${baseEndPoint}/deadlines/${openingYear}-${++openingYear}`,
        'get deadlines for a specific year', []);
  }
}
