import { Component } from '@angular/core';
import { FullOfferModel, FULL_OFFER } from '@models/full-offer-model';
import { Subscription } from 'rxjs';
import { HttpOfferService } from 'src/app/services/http-offer.service';

@Component({
  selector: 'app-full-offer-page',
  templateUrl: './full-offer-page.component.html',
  styleUrls: ['./full-offer-page.component.scss'],
})
export class FullOfferPageComponent {
  fullOffer: FullOfferModel[] | null = null;
  private offerSubscription: Subscription | null = null;

  constructor(private http: HttpOfferService) {
    this.offerSubscription = http
      .getOfferByNames<FullOfferModel>([
        'offer/wedding-reportage',
        'offer/engagement-wedding-session',
        'offer/christening',
        'offer/communion',
        'offer/family',
        'offer/pregnancy',
        'offer/newborn',
        'offer/baby',
        'offer/birthday'
      ], FULL_OFFER)
      .subscribe((offers) => {
        this.fullOffer = offers;

        this.offerSubscription?.unsubscribe();
      });
  }
}
