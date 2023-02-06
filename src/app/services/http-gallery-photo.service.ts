import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  GalleryPhotoModel,
  GalleryPhotoQueryModel,
} from '@models/gallery-model';
import { PagedResult } from '@models/paged-results-model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpGalleryPhotoService {
  private url = 'https://mk.wilpa.pl:3443/api/gallery-photo';

  constructor(private http: HttpClient) {}

  getGalleryPhotos(
    galleryPhotoQuery: GalleryPhotoQueryModel
  ): Observable<PagedResult<GalleryPhotoModel>> {
    let params = new HttpParams({
      fromObject: { ...galleryPhotoQuery, initial: galleryPhotoQuery.initial! },
    });
    if (galleryPhotoQuery.initial === null) {
      params = params.set('initial', '');
    }
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
}
