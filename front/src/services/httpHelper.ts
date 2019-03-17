import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const handleError = <T>(operation = 'operation', result?: T)
  : (error: any) => Observable<T> => {
  return (error: any): Observable<T> => {
    console.log(error);
    return of(result);
  };
};

const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const API_URL = 'http://localhost:3000/';

export {
  // consts
  HTTP_OPTIONS,
  API_URL,
  // functions
  handleError
};
