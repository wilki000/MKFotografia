import {
  Component,
  ViewChild,
} from '@angular/core';

import { DisplayPhotoComponent } from '@components/display-photo/display-photo.component';
import { GalleryPhotoModel } from '@models/gallery-model';
import { PortfolioModel } from '@models/portfolio-model';
import { Subscription } from 'rxjs';
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
  gallerySubscription: Subscription | null = null;
  galleryPhotoSubscription: Subscription | null = null;

  constructor(
    private httpGallery: HttpGalleryService,
    private httpGalleryPhoto: HttpGalleryPhotoService
  ) {
    this.displayNonePhotoStyle = {
      display: 'none',
    };
    this.gallerySubscription = httpGallery
      .getGalleryByName('portfolio')
      .subscribe((gallery) => {
        this.galleryPhotoSubscription = httpGalleryPhoto
          .getGalleryPhotos({
            pageNumber: 1,
            pageSize: 13,
            galleryId: gallery.id,
            initial: null,
          })
          .subscribe((pagedResult) => {
            this.pictures = pagedResult.items;
            this.galleryPhotoSubscription?.unsubscribe();
          });
        this.gallerySubscription?.unsubscribe();
      });
  }

  activate(index: number) {
    this.active = true;
    this.displayPhoto.setCurrentPhoto(index);
  }
}
