import { Observable, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';


export const handleError = <T>(operation: string, result?: T)
  : (error: HttpErrorResponse) => Observable<T> => {
  return (error: HttpErrorResponse): Observable<T> => {
    if (!environment.production) {
      console.log(`operation: ${operation}`);
      console.log(error);
    }
    return of(result as T);
  };

};
