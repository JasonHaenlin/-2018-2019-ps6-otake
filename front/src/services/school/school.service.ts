import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApplicationHttpClient } from 'src/core/http-client';
import { Course } from 'src/models/Course';
import { Major } from 'src/models/Major';
import { Deadline } from './../../models/Deadline';
import { SpecialityCard } from './../../models/SpecialityCard';
import { Speciality } from 'src/models/Speciality';
import { CONTRACTS_AREA_MOCKED } from '../../mocks/ContractsArea.mock';
import { Supervisor } from '../../models/Supervisor';
import { map } from 'rxjs/operators';
import { Mail } from '../../models/Mail';

const baseEndPoint = 'school/';
@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: ApplicationHttpClient) { }

  // SPECIALITIES

  getCardSpecialities(majorShorthand: string): Observable<SpecialityCard[]> {
    return this.http.get<SpecialityCard[]>(`${baseEndPoint}/specialities-cards/${majorShorthand}`,
      'getting all specialities of a chosen major', []);
  }

  getSpeciality(majorShorthand: string): Observable<Speciality> {
    return this.http.get<Speciality>(`${baseEndPoint}specialities/${majorShorthand}`, 'getting a speciality for a chosen major');
  }

  // COURSES

  getCoursesOf(majorShorthand: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${baseEndPoint}/courses/${majorShorthand}`,
      'getting all courses of a chosen major', []);
  }

  getCoursesOfMajorForThisSemester(majorShorthand, semester: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${baseEndPoint}/courses/${majorShorthand}/${semester}`,
      'getting all courses of a chosen major of a chosen semester', []);
  }

  // CONTRACTS

  getContractsForAccordion(specialityShort: string) {
    console.log('Request accordion from back', specialityShort);
    return of(CONTRACTS_AREA_MOCKED);
  }

  // OTHERS

  getdeadlines(openingYear: number): Observable<Deadline[]> {
    return this.http.get<Deadline[]>
      (`${baseEndPoint}/deadlines/${openingYear}-${++openingYear}`,
        'get deadlines for a specific year', []);
  }

  getMajorByShorthand(majorShorthand: string): Observable<Major> {
    return this.http.get<Major>(`${baseEndPoint}/majors/${majorShorthand}`, 'getting a specific major within majors');
  }

  getSupervisors(): Observable<Supervisor[]> {
    return this.http.get<Supervisor[]>(`${baseEndPoint}supervisors`, 'get supervisor list', []);
  }


  getSupervisorEmailByCategory(category: string): Observable<string[]> {
    return this.http.get<Supervisor[]>(`${baseEndPoint}supervisors/${category}`, 'get supervisor list by category', [])
      .pipe(map(ss => ss.map(s => s.email)));
  }

  sendEmail(mail: Mail) {
    return this.http.post<Mail>(`${baseEndPoint}email`, mail, 'post an email');
  }
}
