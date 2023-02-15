import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  OfferHomePageModel,
  PutHomeOfferPhotoModel,
} from '@models/offer-home-page-model';
import { OfferModel } from '@models/offer-model';
import { PutPageOfferModel } from '@models/single-offer-page-model';
import { map, Observable } from 'rxjs';
import { HttpExtendedClient } from '../modules/http-auth/http-auth.module';

@Injectable({
  providedIn: 'root',
})
export class HttpOfferService {
  private url = 'https://magiachwilifotografia.pl/api/offer';

  constructor(private http: HttpExtendedClient) {}

  getOfferByNames<T>(names: string[], concatWith: T[]): Observable<T[]> {
    const params = new HttpParams({
      fromObject: { names },
    });
    return this.http
      .get<OfferModel[]>(this.url + '/get-by-names', { params: params })
      .pipe(
        map((offerModel: OfferModel[]) =>
          offerModel.map((offer: OfferModel) => ({
            ...offer,
            pageImage: this.url + '/' + offer.id + '/img/page',
            homePageImage: this.url + '/' + offer.id + '/img/home',
          }))
        ),
        map(
          (offerModel) => <T[]>offerModel.map(
              (offer: OfferModel, index: number) => ({
                ...offer,
                ...concatWith[index],
              })
            )
        )
      );
  }

  getOfferByName<T>(name: string, concatWith: T): Observable<T> {
    const params = new HttpParams({
      fromObject: { name },
    });
    return this.http
      .get<OfferModel>(this.url + '/get-by-name', { params: params })
      .pipe(
        map(
          (offerModel: OfferModel) =>
            <T>{
              ...offerModel,
              pageImage: this.url + '/' + offerModel.id + '/img/page',
              homePageImage: this.url + '/' + offerModel.id + '/img/home',
              ...concatWith,
            }
        )
      );
  }

  getOfferById<T>(id: number): Observable<T> {
    return this.http.get<OfferModel>(this.url + '/' + id).pipe(
      map(
        (model) =>
          <T>{
            ...model,
            pageImage: this.url + '/' + model.id + '/img/page',
            homePageImage: this.url + '/' + model.id + '/img/home',
          }
      )
    );
  }

  putOffer(
    id: number,
    data: PutHomeOfferPhotoModel | PutPageOfferModel
  ): Observable<void> {
    let formData = this.http.createFormDataWithoutNullOrEmptyValues(data);
    const options = {
      headers: new HttpHeaders({ Authorization: this.http.getBearerToken() }),
    };
    return this.http.put<void>(this.url + '/' + id, formData, options);
  }
}
