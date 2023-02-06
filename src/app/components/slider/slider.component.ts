import {
  Component,
  Renderer2,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { SliderPhotoModel } from '@models/slider-photo-model';
import { Subscription } from 'rxjs';
import { HttpSliderPhotosService } from 'src/app/services/http-slider-photos.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterViewInit, OnDestroy {
  slides!: HTMLElement[];
  sliderPhotos!: SliderPhotoModel[];
  numberOfPhotos!: number;
  visiblePhotoStyle: { [klass: string]: any } = {};
  hiddenPhotoStyle: { [klass: string]: any } = {};
  visiblePhotoTextStyle: { [klass: string]: any } = {};
  hiddenPhotoTextStyle: { [klass: string]: any } = {};
  private sliderPhotoSubscription!: Subscription;

  constructor(
    private renderer: Renderer2,
    private elem: ElementRef,
    private http: HttpSliderPhotosService
  ) {
    this.visiblePhotoStyle = {
      opacity: '1',
      'z-index': '1',
      transition: 'opacity 0.5s ease 0s',
    };
    this.hiddenPhotoStyle = {
      opacity: '0',
      'z-index': '0',
      transition: 'opacity 0.5s ease 0s',
    };
    this.visiblePhotoTextStyle = {
      opacity: '1',
      transition: 'opacity 0.5s ease 0.5s',
    };
    this.hiddenPhotoTextStyle = {
      opacity: '0',
      transition: 'opacity 0.5s ease 0s',
    };
    this.sliderPhotoSubscription = this.http.getSliderPhotos().subscribe((sliderPhotos) => {
      this.sliderPhotos = sliderPhotos;
      this.sliderPhotos.forEach((photo) => {
        photo.photoStyle = this.hiddenPhotoStyle;
        photo.textStyle = this.hiddenPhotoTextStyle;
      });
      this.sliderPhotos[0].photoStyle = this.visiblePhotoStyle;
      this.sliderPhotos[0].textStyle = this.visiblePhotoTextStyle;
      this.numberOfPhotos = this.sliderPhotos.length;
    });
  }
  ngOnDestroy(): void {
    this.sliderPhotoSubscription.unsubscribe();
  }

  changePhoto(index: number) {
    for (let i = 1; i <= this.numberOfPhotos; i++) {
      if (index === i) {
        this.sliderPhotos[i - 1].photoStyle = this.visiblePhotoStyle;
        this.sliderPhotos[i - 1].textStyle = this.visiblePhotoTextStyle;
      } else {
        this.sliderPhotos[i - 1].photoStyle = this.hiddenPhotoStyle;
        this.sliderPhotos[i - 1].textStyle = this.hiddenPhotoTextStyle;
      }
    }
  }

  ngAfterViewInit(): void {
    this.slides = this.elem.nativeElement.querySelectorAll('.slide');
  }
}
