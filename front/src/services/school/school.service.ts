import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationHttpClient } from 'src/core/http-client';
import { Course } from 'src/models/Course';
import { Major } from 'src/models/Major';
import { Deadline } from './../../models/Deadline';
import { SpecialityCard } from './../../models/SpecialityCard';
import {SUPERVISOR_MOCKED} from "../../mocks/Supervisor.mock";
import {Supervisor} from "../../models/Supervisor";

const baseEndPoint = 'school/';
@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private supervisorList = SUPERVISOR_MOCKED;

  constructor(private http: ApplicationHttpClient) { }

  getSpecialitiesOf(majorShorthand: string): Observable<SpecialityCard[]> {
    return this.http.get<SpecialityCard[]>(`${baseEndPoint}/specialities/${majorShorthand}`,
      'getting all specialities of a chosen major', []);
  }

  getCoursesOf(majorShorthand: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${baseEndPoint}/courses/${majorShorthand}`,
      'getting all courses of a chosen major', []);
  }

  getCoursesOfMajorForThisSemester(majorShorthand, semester: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${baseEndPoint}/courses/${majorShorthand}/${semester}`,
      'getting all courses of a chosen major of a chosen semester', []);
  }

  getdeadlines(openingYear: number): Observable<Deadline[]> {
    return this.http.get<Deadline[]>
      (`${baseEndPoint}/deadlines/${openingYear}-${++openingYear}`,
        'get deadlines for a specific year', []);
  }

  getMajorByShorthand(majorShorthand: string): Observable<Major> {
    return this.http.get<Major>(`${baseEndPoint}/majors/${majorShorthand}`, 'getting a specific major within majors');
  }

  getSupervisors(): Supervisor[] {
    return this.supervisorList;
  }
}
