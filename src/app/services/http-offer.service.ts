import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfferModel } from '@models/offer-model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpOfferService {
  private url = 'https://mk.wilpa.pl:3443/api/offer';

  constructor(private http: HttpClient) {}

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
}
