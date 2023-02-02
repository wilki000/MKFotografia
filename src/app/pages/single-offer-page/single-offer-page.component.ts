import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Scroll } from '@angular/router';
import {
  SingleOfferPageModel,
  SINGLE_OFFER_PAGE,
} from '@models/single-offer-page-model';
import { filter, map, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-single-offer-page',
  templateUrl: './single-offer-page.component.html',
  styleUrls: ['./single-offer-page.component.scss'],
})
export class SingleOfferPageComponent implements OnInit, OnDestroy {
  singleOfferPage: SingleOfferPageModel | null = null;
  offerIdSubscription!: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.offerIdSubscription = this.router.events
      .pipe(
        filter((event) => event instanceof Scroll),
        map(() => this.activatedRoute),
        switchMap((route) => route!.data),
        map((data) => data['offerId'])
      )
      .subscribe(
        (offerId) => (this.singleOfferPage = SINGLE_OFFER_PAGE[offerId])
      );
  }

  ngOnDestroy() {
    this.offerIdSubscription.unsubscribe();
  }
}
