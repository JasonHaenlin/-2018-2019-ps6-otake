import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApplicationHttpClient } from 'src/core/http-client';
import { UNIVERSITIES_MOCKED } from 'src/mocks/Universities.mock';
import { GeographicalArea } from '../../models/GeographicalArea';
import { Language } from '../../models/Language';
import { Major } from '../../models/Major';
import { University } from '../../models/University';
import { UniversityDetails } from '../../models/UniversityDetails';

const baseEndPoint = 'universities/';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private universities = UNIVERSITIES_MOCKED;

  constructor(private http: ApplicationHttpClient) { }

  getUniversity(name: string): Observable<UniversityDetails> {
    return of(this.universities.find(u => u.name === name));
  }

  getUniversities(destination: string, language: string, major: string): Observable<University[]> {
    const optionList = this.buildOption({ destination: destination, language: language, major: major });
    return this.http.get<University[]>(`${baseEndPoint}${optionList}`, 'get Universities list', []);
  }

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(`${baseEndPoint}languages`, 'get Languages list', []);
  }

  getAreas(): Observable<GeographicalArea[]> {
    return this.http.get<GeographicalArea[]>(`${baseEndPoint}areas`, 'get Areas list', []);
  }

  getMajors(): Observable<Major[]> {
    return this.http.get<Major[]>(`${baseEndPoint}majors`, 'get Majors list', []);
  }

  private buildOption(option: { destination: string; language: string; major: string; }) {
    let separator = '?';
    let options = '';
    if (option.destination) {
      options += separator + 'area=' + option.destination;
      separator = '&';
    }
    if (option.language) {
      options += separator + 'language=' + option.language;
      separator = '&';
    }
    if (option.major) {
      options += separator + 'major=' + option.major;
    }
    return options;
  }
}
