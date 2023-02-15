import { Component } from '@angular/core';
import { GalleryModel } from '@models/gallery-model';
import { HttpGalleryService } from 'src/app/services/http-gallery.service';

@Component({
  selector: 'app-portfolio-main',
  templateUrl: './portfolio-main.component.html',
  styleUrls: ['./portfolio-main.component.scss']
})
export class PortfolioMainComponent {
public gallery: GalleryModel | null = null;
constructor(private httpGallery: HttpGalleryService) {
  httpGallery.getGalleryByName('portfolio').subscribe(gallery => {
    this.gallery = gallery;
  })
}

}
