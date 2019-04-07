import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { ApplicationHttpClient } from 'src/core/http-client';
import { UNIVERSITIES_MOCKED } from 'src/mocks/Universities.mock';
import { University } from 'src/models/University';
import { GEOGRAPHICAL_AREA_MOCKED } from '../../mocks/GeographicalArea.mock';
import { MAJOR_MOCKED } from '../../mocks/Major.mock';
import { UNIVERCITY_CARD_MOCKED } from '../../mocks/UniversityCard.mock';
import { GeographicalArea } from '../../models/GeographicalArea';
import { Major } from '../../models/Major';
import { UniversityCard } from '../../models/UniversityCard';
import { TESTIMONIAL_CALTECH_MOCKED } from 'src/mocks/Testimonial.mock';

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

  getUniversities(): Observable<UniversityCard[]> {
    return this.http.get<UniversityCard[]>('universities/', 'get Universities list', []);
  }

  getUniversityCard(name: string): Observable<UniversityCard> {
    return of(this.universityCards.find(u => u.name === name));
  }

  getUniversityCardList(area: string): Observable<UniversityCard[]> {
    const universityCardList: UniversityCard[] = [];
    this.universityCards.forEach(u => {
      if (u.area === area) {
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

  getAdvice() {
    return of(TESTIMONIAL_CALTECH_MOCKED);
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error!');
  }
}
