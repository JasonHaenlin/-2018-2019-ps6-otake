import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { httpOptionsBase, serverUrl } from 'src/config/server.config';
import { handleError } from './http-error';


@Injectable()
export class ApplicationHttpClient {

  private api = serverUrl;

  public constructor(public http: HttpClient) {
    // you can use the default http too if you want
  }

  /**
   * GET request
   * @param string endPoint it doesn't need / in front of the end point
   * @param string operation to be display when an error is catch
   * @param any backupValue is used when an error occured. Can be `[]` for example or something else
   * @param options options options of the request like headers, body, etc.
   * @returns Observable<T>
   */
  public get<T>(endPoint: string,
    operation: string = '',
    backupValue: any = null,
    options: Object = httpOptionsBase): Observable<T> {
    return this.http.get<T>(this.api + endPoint, options)
      .pipe(catchError(handleError(operation, backupValue)));
  }

  /**
   * POST request
   * @param string endPoint end point of the api
   * @param Object params body of the request.
   * @param string operation to be display when an error is catch
   * @param any backupValue is used when an error occured. Can be `[]` for example or something else
   * @param options options options of the request like headers, body, etc.
   * @returns Observable<T>
   */
  public post<T>(endPoint: string,
    params: Object,
    operation: string = '',
    backupValue: any = null,
    options: Object = httpOptionsBase): Observable<T> {
    return this.http.post<T>(this.api + endPoint, params, options)
      .pipe(catchError(handleError(operation, backupValue)));
  }

  /**
   * PUT request
   * @param string endPoint end point of the api
   * @param Object params body of the request.
   * @param string operation to be display when an error is catch
   * @param any backupValue is used when an error occured. Can be `[]` for example or something else
   * @param options options options of the request like headers, body, etc.
   * @returns Observable<T>
   */
  public put<T>(endPoint: string,
    params: Object,
    operation: string = '',
    backupValue: any = null,
    options: Object = httpOptionsBase): Observable<T> {
    return this.http.put<T>(this.api + endPoint, params, options)
      .pipe(catchError(handleError(operation, backupValue)));
  }

  /**
   * DELETE request
   * @param string endPoint end point of the api
   * @param options options options of the request like headers, body, etc.
   * @param string operation to be display when an error is catch
   * @param any backupValue is used when an error occured. Can be `[]` for example or something else
   * @returns Observable<T>
   */
  public delete<T>(endPoint: string,
    operation: string = '',
    backupValue: any = null,
    options: Object = httpOptionsBase): Observable<T> {
    return this.http.delete<T>(this.api + endPoint, options)
      .pipe(catchError(handleError(operation, backupValue)));
  }
}

export function applicationHttpClientCreator(http: HttpClient) {
  return new ApplicationHttpClient(http);
}
