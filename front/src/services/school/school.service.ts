import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApplicationHttpClient } from 'src/core/http-client';
import { ContractArea } from 'src/models/ContractArea';
import { Course } from 'src/models/Course';
import { Major } from 'src/models/Major';
import { Speciality } from 'src/models/Speciality';
import { Mail } from '../../models/Mail';
import { Supervisor } from '../../models/Supervisor';
import { Deadline } from './../../models/Deadline';
import { SpecialityCard } from './../../models/SpecialityCard';

const baseEndPoint = 'school/';
@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: ApplicationHttpClient) { }

  // SPECIALITIES

  getSpecialities(majorShorthand: string): Observable<SpecialityCard[]> {
    return this.http.get<SpecialityCard[]>(`${baseEndPoint}specialities/${majorShorthand}`,
      'getting all specialities of a chosen major', []);
  }

  getSpecialityDetails(majorShorthand: string): Observable<Speciality> {
    return this.http.get<Speciality>(`${baseEndPoint}speciality/${majorShorthand}`, 'getting a speciality for a chosen major');
  }

  // COURSES

  getCoursesOf(majorShorthand: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${baseEndPoint}courses/${majorShorthand}`,
      'getting all courses of a chosen major', []);
  }

  getCoursesOfMajorForThisSemester(majorShorthand, semester: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${baseEndPoint}courses/${majorShorthand}/${semester}`,
      'getting all courses of a chosen major of a chosen semester', []);
  }

  // CONTRACTS

  getContractsForAccordion(specialityShort: string) {
    return this.http.get<ContractArea[]>(`${baseEndPoint}contracts/${specialityShort}`,
      'getting all contracts of a chosen speciality', []);
  }

  // OTHERS

  getdeadlines(openingYear: number): Observable<Deadline[]> {
    return this.http.get<Deadline[]>
      (`${baseEndPoint}/deadlines/${openingYear}-${++openingYear}`,
        'get deadlines for a specific year', []);
  }

  getMajorByShorthand(majorShorthand: string): Observable<Major> {
    return this.http.get<Major>(`${baseEndPoint}majors/${majorShorthand}`, 'getting a specific major within majors');
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
