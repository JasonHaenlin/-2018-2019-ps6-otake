import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApplicationHttpClient } from 'src/core/http-client';

const baseEndPoint = 'auth/';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: ApplicationHttpClient) { }

  login(username, password) {
    return this.http.post(`${baseEndPoint}login`, { username: username, password: password }, 'login failed');
  }

  logout() {
    return this.http.get(`${baseEndPoint}logout`, 'logout failed');
  }

  isLoggedIn(): Observable<{}> {
    return this.http.get<any>(`${baseEndPoint}check`, 'check login')
      .pipe(map(response => response.auth));
  }



}
