import { Component } from '@angular/core';
import {
  OfferHomePageModel,
  OFFER_HOME_PAGE,
} from '@models/offer-home-page-model';
import { Subscription } from 'rxjs';
import { HttpOfferService } from 'src/app/services/http-offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent {
  offers: OfferHomePageModel[] | null = null;
  currentPhoto: { [klass: string]: any } = {};
  private scrollElementPressed: boolean = false;
  private mousePosition: number | undefined = undefined;
  private offerSubscription: Subscription | null = null;

  constructor(private http: HttpOfferService) {
    this.offerSubscription = http
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
        this.offers.forEach((offer) => {
          offer.visible = false;
        });
        this.offers[0].visible = true;
        this.currentPhoto = {
          'background-image': 'url(' + this.offers[0].homePageImage + ')',
          'background-position': 'center',
        };
        this.offerSubscription?.unsubscribe();
      });
  }

  activateTab(newOffer: OfferHomePageModel) {
    this.offers?.forEach((offer) => {
      if (offer === newOffer) {
        offer.visible = true;
        this.currentPhoto = {
          'background-image': 'url(' + offer.homePageImage + ')',
          'background-position': 'center',
        };
      } else {
        offer.visible = false;
      }
    });
  }
  mouseDown(event: MouseEvent) {
    this.mousePosition = event.clientX;
    this.scrollElementPressed = true;
  }
  mouseUp() {
    this.scrollElementPressed = false;
  }
  mouseMove(event: MouseEvent) {
    if (this.scrollElementPressed && event.currentTarget != null) {
      event.preventDefault();
      let diff = this.mousePosition! - event.clientX;
      this.mousePosition = event.clientX;
      (<Element>event.currentTarget).scrollLeft =
        (<Element>event.currentTarget).scrollLeft + diff;
    }
  }
}
