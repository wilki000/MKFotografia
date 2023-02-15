import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryModel, GalleryQueryModel } from '@models/gallery-model';
import { PagedResult } from '@models/paged-results-model';
import { DeletePopupService } from 'src/app/services/delete-popup.service';
import { HttpGalleryService } from 'src/app/services/http-gallery.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss'],
})
export class GalleryListComponent {
  galleries: GalleryModel[] | null = null;
  public query: GalleryQueryModel = { pageNumber: 1, pageSize: 10 };
  public pagedResult: PagedResult<void> | null = null;

  constructor(
    private http: HttpGalleryService,
    public popupService: DeletePopupService,
    private vcref: ViewContainerRef,
    private router: Router
  ) {
    this.popupService.setViewContainerRef(this.vcref);
    this.loadPagedGalleries();
  }

  loadPagedGalleries(): void {
    this.http.getGalleries(this.query).subscribe((pagedResult) => {
      this.galleries = pagedResult.items;
      this.pagedResult = { ...pagedResult, items: [] };
    });
  }

  previousPage() {
    if (this.query.pageNumber > 1) {
      this.query.pageNumber--;
      this.loadPagedGalleries();
    }
  }
  nextPage() {
    if (
      this.pagedResult !== null &&
      this.query.pageNumber < this.pagedResult.totalPages
    ) {
      this.query.pageNumber++;
      this.loadPagedGalleries();
    }
  }

  private reloadPage(): void {
    this.router
      .navigateByUrl('/', {
        skipLocationChange: true,
      })
      .then(() => {
        this.router.navigate(['/', 'admin', 'gallery-list']);
      });
  }

  deleteGallery(galleryId: number): (deleted: boolean) => void {
    return (deleted: boolean) => {
      if (deleted) {
        this.http.deleteGallery(galleryId).subscribe(() => {
          this.reloadPage();
        });
      }
    };
  }
}
