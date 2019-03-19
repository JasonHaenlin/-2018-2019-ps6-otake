import { GEOGRAPHICAL_AREA_MOCKED } from './../../mocks/GeographicalArea.mock';
import { Major } from './../../models/Major';
import { MAJOR_MOCKED } from './../../mocks/Major.mock';
import { GeographicalArea } from './../../models/GeographicalArea';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { University } from 'src/models/university';
import { UNIVERSITIES_MOCKED } from 'src/mocks/universities.mock';
import { API_URL } from '../httpHelper';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  url = API_URL + 'universities/';
  private universities = UNIVERSITIES_MOCKED;

  constructor(private http: HttpClient) { }

  getUniversity(id: number): Observable<University> {
    // return this.http.get<University>(this.url + id).pipe(
    //   catchError(this.handleError)
    // );
    return of(this.universities.find(u => u.id === id));
  }

  getUniversities(): Observable<University[]> {
    return of(this.universities);
  }

  getMajors(): Observable<Major[]> {
    return of(MAJOR_MOCKED);
  }

  getGeographicalAreas(): Observable<GeographicalArea[]> {
    return of(GEOGRAPHICAL_AREA_MOCKED);
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error!');
  }
}
