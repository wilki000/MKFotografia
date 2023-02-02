import { Component, Input, ViewChild } from '@angular/core';
import { DisplayPhotoComponent } from '@components/display-photo/display-photo.component';
import { GalleryModel, GALLERY_MODEL } from '@models/gallery-model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @ViewChild('displayPhoto', { static: false })
  displayPhoto!: DisplayPhotoComponent;
  @Input() gallery!: GalleryModel;

  active: boolean = false;
  displayNonePhotoStyle: { [klass: string]: any } = {};
  constructor() {
    this.displayNonePhotoStyle = {
      display: 'none',
    };
  }
  activate(index: number) {
    this.active = true;
    this.displayPhoto.setCurrentPhoto(index);
  }
  loadMore() {
    if (this.gallery != null) {
      this.gallery.photos = this.gallery.photos.concat(
        GALLERY_MODEL.photos.slice(0, 4)
      );
    }
  }
}
