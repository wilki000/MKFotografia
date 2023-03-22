import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { lastValueFrom } from 'rxjs';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
})
export class HttpExtendedClient extends HttpClient {
  private url: string = 'https://magiachwilifotografia.pl/api/user';
  authToken: string | null = null;
  catch: any;
  constructor(
    private httpHandler: HttpHandler,
    private cookieService: CookieService
  ) {
    super(httpHandler);
    let token = this.cookieService.get('authToken');
    this.authToken = token !== null && token.length > 0 ? token : null;
  }
  setAuthToken(token: string): void {
    if (token !== null && token.length > 0) {
      this.authToken = token;
      this.cookieService.set('authToken', token, 1);
    } else {
      this.authToken = null;
      this.cookieService.delete('authToken');
    }
  }
  async isLoggedIn(): Promise<boolean> {
    if (this.authToken !== null && this.authToken.length > 0) {
      let headers = new HttpHeaders({
        Authorization: this.getBearerToken(),
      });
      let request = this.get<void>(this.url + '/validate-token', {
        headers,
      });
      let valid: boolean;
      let requestPromise = lastValueFrom(request);
      await requestPromise
        .then((success) => (valid = true))
        .catch((error) => (valid = false));
      return valid!;
    }
    return false;
  }
  getBearerToken(): string {
    return 'Bearer ' + this.authToken;
  }
  logout(): void {
    this.authToken = null;
    this.cookieService.delete('authToken');
  }
  private fillFormData(
    formData: FormData,
    object: Object,
    name: string = ''
  ): FormData {
    if (object != null && object !== '') {
      if (typeof object === 'string' || object instanceof File) {
        formData.append(name, object);
      } else if (typeof object === 'number') {
        formData.append(name, object.toString());
      } else {
        Object.values(object).forEach((value, index) => {
          if (typeof value !== 'object' && !Array.isArray(value)) {
            formData = this.fillFormData(
              formData,
              value,
              name + Object.keys(object).at(index)
            );
          } else if (Array.isArray(value)) {
            value.forEach((arrValue) => {
              let dot = '';
              if (typeof arrValue === 'object') {
                dot = '.';
              }
              formData = this.fillFormData(
                formData,
                arrValue,
                name + Object.keys(object).at(index) + dot
              );
            });
          } else {
            let dot = '.';
            if (value instanceof File) {
              dot = '';
            }
            formData = this.fillFormData(
              formData,
              value,
              name + Object.keys(object).at(index) + dot
            );
          }
        });
      }
    }
    return formData;
  }

  createFormDataWithoutNullOrEmptyValues(data: Object): FormData {
    let formData = new FormData();
    formData = this.fillFormData(formData, data);
    return formData;
  }
  createHttpParamsWithoutNullValues(
    data: Object,
    params: HttpParams
  ): HttpParams {
    Object.values(data).forEach((value, index) => {
      if (value === null) {
        params = params.set(Object.keys(data).at(index)!, '');
      }
    });
    return params;
  }
}
