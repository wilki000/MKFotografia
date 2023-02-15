import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DisplayPhotoComponent } from '@components/display-photo/display-photo.component';
import { GalleryModel, GalleryPhotoQueryModel } from '@models/gallery-model';
import { PagedResult } from '@models/paged-results-model';
import { HttpGalleryPhotoService } from 'src/app/services/http-gallery-photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @ViewChild('displayPhoto', { static: false })
  displayPhoto!: DisplayPhotoComponent;
  @Input() gallery: GalleryModel | null = null;
  active: boolean = false;
  displayNonePhotoStyle: { [klass: string]: any } = {};
  allLoaded: boolean = false;
  private query!: GalleryPhotoQueryModel;
  private pagedResult: PagedResult<void> | null = null;

  constructor(private http: HttpGalleryPhotoService) {
    this.displayNonePhotoStyle = {
      display: 'none',
    };
  }
  ngOnInit(): void {
    this.query = {
      pageNumber: 1,
      pageSize: 4,
      initial: 8,
      galleryId: <number>this.gallery?.id,
    };
    this.loadPagedPhotos();
  }
  activate(index: number) {
    this.active = true;
    this.displayPhoto.setCurrentPhoto(index);
  }
  loadMore() {
    if (
      this.pagedResult != null &&
      this.query.pageNumber <= this.pagedResult.totalPages
    ) {
      this.loadPagedPhotos();
    }
  }
  loadPagedPhotos(): void {
    this.http.getGalleryPhotos(this.query).subscribe((pagedResult) => {
      if (this.gallery) {
        if (this.gallery.photos) {
          this.gallery.photos = this.gallery.photos.concat(pagedResult.items);
        } else {
          this.gallery.photos = pagedResult.items;
        }
      }
      this.pagedResult = { ...pagedResult, items: [] };
      this.allLoaded = this.pagedResult.totalPages === this.query.pageNumber;
      this.query.pageNumber++;
    });
  }
}
