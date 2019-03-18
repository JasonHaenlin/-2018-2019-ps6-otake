import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { University } from 'src/models/university';
import { UNIVERSITIES_MOCKED } from 'src/mocks/universities.mock';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  url = 'http://localhost:3000/universities/';
  private universities = UNIVERSITIES_MOCKED;

  constructor(private http: HttpClient) { }

  getUniversity(id: number): Observable<University>{
    // return this.http.get<University>(this.url + id).pipe(
    //   catchError(this.handleError)
    // );
    return of(this.universities.find(u => u.id === id));
  }

  getUniversities(): Observable<University[]>{
    return of(this.universities);
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error!');
  }
}
