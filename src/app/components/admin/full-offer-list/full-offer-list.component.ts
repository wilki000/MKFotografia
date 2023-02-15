import { Component } from '@angular/core';
import { FullOfferModel, FULL_OFFER } from '@models/full-offer-model';
import { HttpOfferService } from 'src/app/services/http-offer.service';

@Component({
  selector: 'app-full-offer-list',
  templateUrl: './full-offer-list.component.html',
  styleUrls: ['./full-offer-list.component.scss'],
})
export class FullOfferListComponent {
  fullOffer: FullOfferModel[] | null = null;

  constructor(private http: HttpOfferService) {
    http
      .getOfferByNames<FullOfferModel>(
        [
          'offer/wedding-reportage',
          'offer/engagement-wedding-session',
          'offer/christening',
          'offer/communion',
          'offer/family',
          'offer/pregnancy',
          'offer/newborn',
          'offer/baby',
          'offer/birthday',
        ],
        FULL_OFFER
      )
      .subscribe((offers) => {
        this.fullOffer = offers;
      });
  }
}
