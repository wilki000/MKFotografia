import { Component } from '@angular/core';
import { FullOfferModel, FULL_OFFER } from '@models/full-offer-model';

@Component({
  selector: 'app-full-offer-page',
  templateUrl: './full-offer-page.component.html',
  styleUrls: ['./full-offer-page.component.scss']
})
export class FullOfferPageComponent {
  fullOffer: FullOfferModel[];

  constructor() {
    this.fullOffer = FULL_OFFER;
  }
}
