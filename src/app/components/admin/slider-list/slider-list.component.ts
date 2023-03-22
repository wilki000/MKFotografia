import { Component } from '@angular/core';
import { SliderPhotoModel } from '@models/slider-photo-model';
import { HttpSliderPhotosService } from 'src/app/services/http-slider-photos.service';

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.scss'],
})
export class SliderListComponent {
  sliderPhotos: SliderPhotoModel[] | null = null;
  numberOfPhotos: number | null = null;

  constructor(private http: HttpSliderPhotosService) {
    this.http.getSliderPhotos().subscribe((sliderPhotos) => {
      this.sliderPhotos = sliderPhotos;
      this.numberOfPhotos = this.sliderPhotos.length;
    });
  }
}
