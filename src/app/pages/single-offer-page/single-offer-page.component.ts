import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  SingleOfferPageModel,
  SINGLE_OFFER_PAGE,
} from '@models/single-offer-page-model';
import { Subscription } from 'rxjs';
import { HttpOfferService } from 'src/app/services/http-offer.service';

@Component({
  selector: 'app-single-offer-page',
  templateUrl: './single-offer-page.component.html',
  styleUrls: ['./single-offer-page.component.scss'],
})
export class SingleOfferPageComponent implements OnInit {
  singleOfferPage: SingleOfferPageModel | null = null;
  offerNameSubscription!: Subscription;
  private offerSubscription: Subscription | null = null;

  constructor(private route: ActivatedRoute, private http: HttpOfferService) {}

  ngOnInit() {
    this.offerNameSubscription = this.route.params.subscribe((params) => {
      let name = 'offer/' + params['name'];
      this.offerNameSubscription?.unsubscribe();
      this.offerSubscription = this.http
        .getOfferByName<SingleOfferPageModel>(name, SINGLE_OFFER_PAGE[name])
        .subscribe((singleOfferPage) => {
          this.singleOfferPage = singleOfferPage;
          this.offerSubscription?.unsubscribe();
        });
    });
  }
}
