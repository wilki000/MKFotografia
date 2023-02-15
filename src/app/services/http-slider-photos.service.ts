import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PutPhotoModel, SliderPhotoModel } from '@models/slider-photo-model';
import { map, Observable } from 'rxjs';
import { HttpExtendedClient } from '../modules/http-auth/http-auth.module';

@Injectable({
  providedIn: 'root',
})
export class HttpSliderPhotosService {
  private url = 'https://magiachwilifotografia.pl/api/slider-photo';

  constructor(private http: HttpExtendedClient) {}

  getSliderPhotos(): Observable<SliderPhotoModel[]> {
    return this.http.get<SliderPhotoModel[]>(this.url).pipe(
      map((sliderPhotos) =>
        sliderPhotos.map((sliderPhoto) => ({
          ...sliderPhoto,
          image: this.url + '/' + sliderPhoto.id,
        }))
      )
    );
  }

  getSliderPhoto(id: number): Observable<SliderPhotoModel> {
    return this.http.get<SliderPhotoModel>(this.url + '/' + id + '/meta').pipe(
      map((sliderPhoto) => ({
        ...sliderPhoto,
        image: this.url + '/' + sliderPhoto.id,
      }))
    );
  }

  putSliderPhoto(id: number, data: PutPhotoModel): Observable<void> {
    let formData = this.http.createFormDataWithoutNullOrEmptyValues(data);
    const options = {
      headers: new HttpHeaders({ Authorization: this.http.getBearerToken() }),
    };
    return this.http.put<void>(this.url + '/' + id, formData, options);
  }
}
