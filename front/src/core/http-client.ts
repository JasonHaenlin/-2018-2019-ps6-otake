import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, UnaryFunction, pipe } from 'rxjs';
import { httpOptionsBase, serverUrl } from 'src/config/server.config';
import { catchError, finalize, timeout, delay, shareReplay } from 'rxjs/internal/operators';
import { handleError } from './http-utils';
import { LoaderService } from 'src/app/utility/loader/loader.service';

const requestTimeout = 5000;
@Injectable()
export class ApplicationHttpClient {

  private api = serverUrl;

  public constructor(public http: HttpClient, public loader: LoaderService) {
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
    this.activateLoader();
    return this.http.get<T>(this.api + endPoint, options)
      .pipe(
        this.processPipe<T>(operation, backupValue),
        finalize(() => this.deactivateLoader())
      );
  }

  /**
   * POST request
   * @param string endPoint it doesn't need / in front of the end point
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
      .pipe(this.processPipe<T>(operation, backupValue));
  }

  /**
   * PUT request
   * @param string endPoint it doesn't need / in front of the end point
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
      .pipe(this.processPipe<T>(operation, backupValue));
  }

  /**
   * DELETE request
   * @param string endPoint it doesn't need / in front of the end point
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
      .pipe(this.processPipe<T>(operation, backupValue));
  }

  private activateLoader = () => this.loader.show();
  private deactivateLoader = () => this.loader.hide();

  private processPipe = <T>(operation: string, backupValue?: T): UnaryFunction<Observable<{}>, Observable<any>> =>
    pipe(
      timeout(requestTimeout),
      shareReplay(1),
      catchError(handleError<T>(operation, backupValue))
    )
}


export function applicationHttpClientCreator(http: HttpClient, loader: LoaderService) {
  return new ApplicationHttpClient(http, loader);
}
