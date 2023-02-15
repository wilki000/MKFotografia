import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  GalleryModel,
  GalleryQueryModel,
  PostPhotoToGalleryModel,
} from '@models/gallery-model';
import { PagedResult } from '@models/paged-results-model';
import { Observable } from 'rxjs';
import { HttpExtendedClient } from '../modules/http-auth/http-auth.module';

@Injectable({
  providedIn: 'root',
})
export class HttpGalleryService {
  private url = 'https://magiachwilifotografia.pl/api/gallery';

  constructor(private http: HttpExtendedClient) {}

  getGalleryByName(galleryName: string): Observable<GalleryModel> {
    return this.http.get<GalleryModel>(
      this.url + '/get-by-name/' + galleryName
    );
  }

  getGalleries(
    galleryQuery: GalleryQueryModel
  ): Observable<PagedResult<GalleryModel>> {
    const params = new HttpParams({
      fromObject: { ...galleryQuery },
    });
    const options = {
      params: params,
      headers: new HttpHeaders({ Authorization: this.http.getBearerToken() }),
    };
    return this.http.get<PagedResult<GalleryModel>>(this.url, options);
  }

  getGalleryById(id: number): Observable<GalleryModel> {
    const options = {
      headers: new HttpHeaders({ Authorization: this.http.getBearerToken() }),
    };
    return this.http.get<GalleryModel>(this.url + '/' + id, options);
  }

  postGalleryPhoto(
    galleryId: number,
    data: PostPhotoToGalleryModel
  ): Observable<void> {
    let formData = this.http.createFormDataWithoutNullOrEmptyValues(data);
    const options = {
      headers: new HttpHeaders({ Authorization: this.http.getBearerToken() }),
    };
    return this.http.post<void>(this.url + '/' + galleryId, formData, options);
  }

  postGallery(displayName: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: this.http.getBearerToken(),
      }),
      observe: 'response' as 'body',
      responseType: 'text' as 'json',
    };
    return this.http.post<any>(
      this.url,
      JSON.stringify({ displayName: displayName }),
      options
    );
  }

  deleteGallery(galleryId: number): Observable<any> {
    const options = {
      headers: new HttpHeaders({ Authorization: this.http.getBearerToken() }),
    };
    return this.http.delete<any>(this.url + '/' + galleryId, options);
  }
}
