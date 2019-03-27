import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { UNIVERSITIES_MOCKED } from 'src/mocks/Universities.mock';
import { University } from 'src/models/University';
import { GEOGRAPHICAL_AREA_MOCKED } from '../../mocks/GeographicalArea.mock';
import { MAJOR_MOCKED } from '../../mocks/Major.mock';
import { UNIVERCITY_CARD_MOCKED } from '../../mocks/UniversityCard.mock';
import { GeographicalArea } from '../../models/GeographicalArea';
import { Major } from '../../models/Major';
import { UniversityCard } from '../../models/UniversityCard';
import { ApplicationHttpClient } from 'src/core/http-client';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private universities = UNIVERSITIES_MOCKED;
  private universityCards = UNIVERCITY_CARD_MOCKED;

  constructor(private http: ApplicationHttpClient) { }

  getUniversity(name: string): Observable<University> {
    return of(this.universities.find(u => u.name === name));
  }

  getUniversities(): Observable<University[]> {
    return of(this.universities);
  }

  getUniversityCard(name: string): Observable<UniversityCard> {
    return of(this.universityCards.find(u => u.name === name));
  }

  getUniversityCardList(location: string): Observable<UniversityCard[]> {
    const universityCardList: UniversityCard[] = [];
    this.universityCards.forEach(u => {
      if (u.location === location) {
        universityCardList.push(u);
      }
    }
    );
    return of(universityCardList);
  }

  getUniversityCards(): Observable<UniversityCard[]> {
    return of(this.universityCards);
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
