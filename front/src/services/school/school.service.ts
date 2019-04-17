import { Deadline } from './../../models/Deadline';
import { SpecialityCard } from './../../models/SpecialityCard';
import { Injectable } from '@angular/core';
import { ApplicationHttpClient } from 'src/core/http-client';
import { Observable } from 'rxjs';

const baseEndPoint = 'school/';
@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: ApplicationHttpClient) { }

  getSpecialitiesOf(majorShorthand: string): Observable<SpecialityCard[]> {
    return this.http.get<SpecialityCard[]>(`${baseEndPoint}/specialities/${majorShorthand}`,
      'getting all speccialities of a chosen major', []);
  }

  getdeadlines(openingYear: number): Observable<Deadline[]> {
    return this.http.get<Deadline[]>
      (`${baseEndPoint}/deadlines/${openingYear}-${++openingYear}`,
        'get deadlines for a specific year', []);
  }
}
