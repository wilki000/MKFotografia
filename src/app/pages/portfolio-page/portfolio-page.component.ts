import { Component, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { DisplayPhotoComponent } from '@components/display-photo/display-photo.component';
import { GalleryPhotoModel } from '@models/gallery-model';
import { HttpGalleryPhotoService } from 'src/app/services/http-gallery-photo.service';
import { HttpGalleryService } from 'src/app/services/http-gallery.service';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
})
export class PortfolioPageComponent {
  @ViewChild('displayPhoto', { static: false })
  displayPhoto!: DisplayPhotoComponent;

  pictures!: GalleryPhotoModel[];
  active: boolean = false;
  displayNonePhotoStyle: { [klass: string]: any } = {};

  constructor(
    private httpGallery: HttpGalleryService,
    private httpGalleryPhoto: HttpGalleryPhotoService,
    private metaService: Meta,
    private titleService: Title
  ) {
    metaService.updateTag({
      name: 'title',
      content: 'Portfolio | Fotograf Ślubny Grajewo | Magia Chwili Fotografia',
    });
    titleService.setTitle(
      'Portfolio | Fotograf Ślubny Grajewo | Magia Chwili Fotografia'
    );
    metaService.updateTag({
      name: 'description',
      content:
        'Stworzyłam portfolio z moich najlepszych prac 📷  Podobają Ci się? Skorzystaj z indywidualnej sesji zdjęciowej w Grajewie. Podlasie, Mazury',
    });
    this.displayNonePhotoStyle = {
      display: 'none',
    };
    httpGallery.getGalleryByName('portfolio').subscribe((gallery) => {
      httpGalleryPhoto
        .getGalleryPhotos({
          pageNumber: 1,
          pageSize: 13,
          galleryId: gallery.id,
          initial: null,
        })
        .subscribe((pagedResult) => {
          this.pictures = pagedResult.items;
        });
    });
  }

  activate(index: number) {
    this.active = true;
    this.displayPhoto.setCurrentPhoto(index);
  }
}
