import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { SliderPhotoModel, SLIDER_PHOTOS } from '@models/slider-photo-model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterViewInit {
  slides!: HTMLElement[];
  sliderPhotos: SliderPhotoModel[];
  numberOfPhotos: number;
  visiblePhotoStyle: { [klass: string]: any } = {};
  hiddenPhotoStyle: { [klass: string]: any } = {};
  visiblePhotoTextStyle:  { [klass: string]: any } = {};
  hiddenPhotoTextStyle:  { [klass: string]: any } = {};

  constructor(private renderer: Renderer2, private elem: ElementRef) {
    this.visiblePhotoStyle = {
      opacity: '1',
      'z-index': '1',
      transition: 'opacity 0.5s ease 0s'
    };
    this.hiddenPhotoStyle = {
      opacity: '0',
      'z-index': '0',
      transition: 'opacity 0.5s ease 0s'
    };
    this.visiblePhotoTextStyle = {
      opacity: '1',
      transition: 'opacity 0.5s ease 0.5s'
    };
    this.hiddenPhotoTextStyle = {
      opacity: '0',
      transition: 'opacity 0.5s ease 0s'
    };
    this.sliderPhotos = SLIDER_PHOTOS;
    this.sliderPhotos.forEach((photo) => {
      photo.photoStyle = this.hiddenPhotoStyle;
      photo.textStyle = this.hiddenPhotoTextStyle;
    });
    this.sliderPhotos[0].photoStyle = this.visiblePhotoStyle;
    this.sliderPhotos[0].textStyle = this.visiblePhotoTextStyle;
    this.numberOfPhotos = this.sliderPhotos.length;
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

  // changePhoto(index: number) {
  //   for (let i = 1; i <= this.numberOfPhotos; i++) {
  //     if (index === i) {
  //       this.slides[i - 1].classList.add('visible');
  //       this.slides[i - 1].style.zIndex = '1';
  //     } else {
  //       this.slides[i - 1].classList.remove('visible');
  //       this.slides[i - 1].style.zIndex = '0';
  //     }
  //   }
  //   console.log(this.slides);
  // }

  ngAfterViewInit(): void {
    this.slides = this.elem.nativeElement.querySelectorAll(
      '.slideshow-container__slides__slide'
    );
  }
}
