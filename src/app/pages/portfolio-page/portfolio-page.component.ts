import { Component } from '@angular/core';
import { PORTFOLIO, PortfolioModel } from '@models/portfolio-model';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent {
  pictures: PortfolioModel[];

  constructor() {
    this.pictures = PORTFOLIO;
  }
}
