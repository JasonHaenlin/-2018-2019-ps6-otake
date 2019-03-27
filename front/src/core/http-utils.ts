import { Observable, of, pipe, UnaryFunction } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, finalize, timeout } from 'rxjs/internal/operators';

/**
 * handle the failure of http requests.
 * @param operation the name of the http request
 * @param result that should return the function in case an error occur
 * @returns the default result when the request couldn't end successfully
 * like empty result or object or empty array of any type
 */
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
