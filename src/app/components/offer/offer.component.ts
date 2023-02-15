import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  OfferHomePageModel,
  OFFER_HOME_PAGE,
} from '@models/offer-home-page-model';
import { HttpOfferService } from 'src/app/services/http-offer.service';
import { Location } from '@angular/common';

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

  constructor(
    private http: HttpOfferService,
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {
    this.http
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
        //This is ok because response comes from the server after ngOnInit
        this.activatedRoute.queryParamMap.subscribe((params) => {
          let offerParam = params.get('offer');
          if (offerParam !== null) {
            let foundOffer = this.offers?.find(
              (offer) => offer.query == offerParam
            );
            if (foundOffer != undefined) {
              this.activateTab(foundOffer);
            } else {
              this.router.navigate(['/not-found']);
            }
          }
        });
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
    const url = this.router
      .createUrlTree([], {
        relativeTo: this.activatedRoute,
        queryParams: { offer: newOffer.query },
      })
      .toString();

    this.location.go(url);
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
