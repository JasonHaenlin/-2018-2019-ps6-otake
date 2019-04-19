import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApplicationHttpClient } from 'src/core/http-client';
import { UniversityDetails } from 'src/models/UniversityDetails';
import { GeographicalArea } from '../../models/GeographicalArea';
import { Language } from '../../models/Language';
import { Major } from '../../models/Major';
import { University } from '../../models/University';

const baseEndPoint = 'universities/';

@Injectable({
  providedIn: 'root'
})

export class UniversityService {

  constructor(private http: ApplicationHttpClient) { }

  getUniversityDetails(name: string): Observable<UniversityDetails> {
    return this.http.get<UniversityDetails>(`${baseEndPoint}details/${name}`, 'get university details');
  }

  getUniversities(page: number, destination: string, language?: string, major?: string): Observable<University[]> {
    const optionList = this.buildOption(page, { destination: destination, language: language, major: major });
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

  private buildOption(page: number, option: { destination: string; language: string; major: string; }) {
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
    return `page=${page}${options}`;
  }
}
