import { Component } from '@angular/core';
import {
  OfferHomePageModel,
  OFFER_HOME_PAGE,
} from '@models/offer-home-page-model';
import { HttpOfferService } from 'src/app/services/http-offer.service';

@Component({
  selector: 'app-offer-home-page-list',
  templateUrl: './offer-home-page-list.component.html',
  styleUrls: ['./offer-home-page-list.component.scss'],
})
export class OfferHomePageListComponent {
  offers: OfferHomePageModel[] | null = null;

  constructor(private http: HttpOfferService) {
    http
      .getOfferByNames<OfferHomePageModel>(
        [
          'offer/wedding-reportage',
          'offer/engagement-wedding-session',
          'offer/christening',
          'offer/communion',
        ],
        OFFER_HOME_PAGE
      )
      .subscribe((offers) => {
        this.offers = offers;
      });
  }
}
