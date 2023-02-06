import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SliderPhotoModel } from '@models/slider-photo-model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpSliderPhotosService {
  private url = 'https://mk.wilpa.pl:3443/api/slider-photo';

  constructor(private http: HttpClient) {}

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
}
