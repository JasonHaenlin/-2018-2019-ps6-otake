import { Injectable } from '@angular/core';
import { SPECIALITY_MOCKED_IMAFA } from 'src/mocks/Speciality.mock';
import { of, Observable } from 'rxjs';
import { Speciality } from 'src/models/Speciality';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {
  private specialities = SPECIALITY_MOCKED_IMAFA;

  constructor() { }

  getSpeciality(name: string): Observable<Speciality> {
    return of(this.specialities.find(u => u.shorthand === name));
  }
}
