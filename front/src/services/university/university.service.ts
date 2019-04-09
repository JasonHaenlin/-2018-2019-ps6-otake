import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { ApplicationHttpClient } from 'src/core/http-client';
import { UNIVERSITIES_MOCKED } from 'src/mocks/Universities.mock';
import { University } from 'src/models/University';
import { UNIVERCITY_CARD_MOCKED } from '../../mocks/UniversityCard.mock';
import { GeographicalArea } from '../../models/GeographicalArea';
import { Major } from '../../models/Major';
import { UniversityCard } from '../../models/UniversityCard';
import { TESTIMONIAL_CALTECH_MOCKED } from 'src/mocks/Testimonial.mock';
import {Language} from "../../models/Language";

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

  getUniversitiesByArea(area: string): Observable<UniversityCard[]> {
    return this.http.get<UniversityCard[]>(`universities/${area}`, 'get Universities by area', []);
  }

  getUniversitiesByLanguage(language: string): Observable<UniversityCard[]> {
    return this.http.get<UniversityCard[]>(`universities/${language}`, 'get Universities by language', []);
  }

  getUniversitiesByMajor(major: string): Observable<UniversityCard[]> {
    return this.http.get<UniversityCard[]>(`universities/${major}`, 'get Universities by major', []);
  }

  getUniversityCards(): Observable<UniversityCard[]> {
    return of(this.universityCards);
  }

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>('universities/languages', 'get Languages list', []);
  }

  getAreas(): Observable<GeographicalArea[]> {
    return this.http.get<GeographicalArea[]>('universities/areas', 'get Areas list', []);
  }


  getMajors(): Observable<Major[]> {
    return this.http.get<Major[]>('universities/majors', 'get Majors list', []);
  }


  getAdvice() {
    return of(TESTIMONIAL_CALTECH_MOCKED);
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error!');
  }
}
