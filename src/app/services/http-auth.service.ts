import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDataModel } from '@models/login-data-model';
import { Observable } from 'rxjs';
import { HttpExtendedClient } from '../modules/http-auth/http-auth.module';

@Injectable({
  providedIn: 'root',
})
export class HttpAuthService {
  private url = 'https://magiachwilifotografia.pl/api/user';

  constructor(private http: HttpExtendedClient) {}

  login(data: LoginDataModel): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
      responseType: 'text' as 'json',
    };
    return this.http.post(this.url + '/login', { ...data }, options);
  }

  setAuthToken(token: string): void {
    this.http.setAuthToken(token);
  }
  logout(): void {
    this.http.logout();
  }
  requestReset(data: { login: string }): void {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
      responseType: 'text' as 'json',
    };
    this.http
      .post(this.url + '/request-reset', { ...data }, options)
      .subscribe();
  }

  sendNewPassword(data: {
    key: string;
    password: string;
    confirmPassword: string;
  }): Observable<void> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
      responseType: 'text' as 'json',
    };
    return this.http.post<void>(
      this.url + '/new-password',
      { ...data },
      options
    );
  }
}
