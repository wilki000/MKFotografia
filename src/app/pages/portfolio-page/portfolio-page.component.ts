import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import { DisplayPhotoComponent } from '@components/display-photo/display-photo.component';
import { PORTFOLIO, PortfolioModel } from '@models/portfolio-model';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
})
export class PortfolioPageComponent {
  @ViewChild('displayPhoto', { static: false })
  displayPhoto!: DisplayPhotoComponent;

  pictures: PortfolioModel[];
  active: boolean = false;
  displayNonePhotoStyle: { [klass: string]: any } = {};

  constructor() {
    this.pictures = PORTFOLIO;
    this.displayNonePhotoStyle = {
      display: 'none',
    };
  }

  activate(index: number) {
    this.active = true;
    this.displayPhoto.setCurrentPhoto(index);
    
  }
}
