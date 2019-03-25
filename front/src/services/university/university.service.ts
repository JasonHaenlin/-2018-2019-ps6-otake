import { GEOGRAPHICAL_AREA_MOCKED } from './../../mocks/GeographicalArea.mock';
import { Major } from '../../models/Major';
import { MAJOR_MOCKED } from './../../mocks/Major.mock';
import { GeographicalArea } from '../../models/GeographicalArea';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { University } from 'src/models/University';
import { UNIVERSITIES_MOCKED } from 'src/mocks/Universities.mock';
import { API_URL } from '../httpHelper';
import {UNIVERCITY_CARD_MOCKED} from "../../mocks/UniversityCard.mock";
import {Location, UniversityCard} from "../../models/UniversityCard";

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  url = API_URL + 'universities/';
  private universities = UNIVERSITIES_MOCKED;
  private universityCards = UNIVERCITY_CARD_MOCKED;

  constructor(private http: HttpClient) { }

  getUniversity(name: string): Observable<University> {
    // return this.http.get<University>(this.url + id).pipe(
    //   catchError(this.handleError)
    // );
    return of(this.universities.find(u => u.name === name));
  }

  getUniversities(): Observable<University[]> {
    return of(this.universities);
  }

  getUniversityCard(name: string): Observable<UniversityCard> {
    return of(this.universityCards.find( u => u.name === name));
  }

  getUniversityCardList(location: Location): Observable<UniversityCard[]> {
    const universityCardList: UniversityCard[] = [];
    this.universityCards.forEach( u => {
        if(u.location === location){
          universityCardList.push(u);
        }
      }
    )
    return of(universityCardList);
  }

  getUniversityCards(): Observable<UniversityCard[]>{
    return of(this.universityCards)
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
