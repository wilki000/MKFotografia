import { query } from '@angular/animations';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  GalleryPhotoModel,
  GalleryPhotoQueryModel,
  PutPhotoOrdersModel,
} from '@models/gallery-model';
import { PagedResult } from '@models/paged-results-model';
import { map, Observable } from 'rxjs';
import { HttpExtendedClient } from '../modules/http-auth/http-auth.module';

@Injectable({
  providedIn: 'root',
})
export class HttpGalleryPhotoService {
  private url = 'https://magiachwilifotografia.pl/api/gallery-photo';

  constructor(private http: HttpExtendedClient) {}

  getGalleryPhotos(
    galleryPhotoQuery: GalleryPhotoQueryModel
  ): Observable<PagedResult<GalleryPhotoModel>> {
    let params = new HttpParams({
      fromObject: { ...galleryPhotoQuery, initial: galleryPhotoQuery.initial! },
    });
    params = this.http.createHttpParamsWithoutNullValues(
      galleryPhotoQuery,
      params
    );
    return this.http
      .get<PagedResult<GalleryPhotoModel>>(this.url, { params: params })
      .pipe(
        map(
          (pagedResult) =>
            <PagedResult<GalleryPhotoModel>>{
              ...pagedResult,
              items: pagedResult.items.map(
                (galleryPhoto: GalleryPhotoModel) => ({
                  ...galleryPhoto,
                  image: this.url + '/' + galleryPhoto.id,
                })
              ),
            }
        )
      );
  }

  getGalleryPhotosByGalleryId(
    galleryId: number
  ): Observable<GalleryPhotoModel[]> {
    const params = new HttpParams({
      fromObject: { galleryId: galleryId },
    });
    const options = {
      params: params,
      headers: new HttpHeaders({ Authorization: this.http.getBearerToken() }),
    };
    return this.http
      .get<GalleryPhotoModel[]>(this.url + '/admin', options)
      .pipe(
        map((photos) =>
          photos.map((photo: GalleryPhotoModel) => ({
            ...photo,
            image: this.url + '/' + photo.id,
          }))
        )
      );
  }

  removePhoto(id: number): Observable<void> {
    const options = {
      headers: new HttpHeaders({ Authorization: this.http.getBearerToken() }),
    };
    return this.http.delete<void>(this.url + '/' + id, options);
  }

  putOrders(data: PutPhotoOrdersModel): Observable<void> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this.http.getBearerToken(),
      }),
      responseType: 'text' as 'json',
    };
    return this.http.put<void>(this.url, JSON.stringify(data), options);
  }
}
