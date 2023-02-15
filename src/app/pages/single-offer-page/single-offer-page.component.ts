import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {
  SingleOfferPageModel,
  SINGLE_OFFER_PAGE,
} from '@models/single-offer-page-model';
import { catchError, throwError } from 'rxjs';
import { HttpOfferService } from 'src/app/services/http-offer.service';

@Component({
  selector: 'app-single-offer-page',
  templateUrl: './single-offer-page.component.html',
  styleUrls: ['./single-offer-page.component.scss'],
})
export class SingleOfferPageComponent implements OnInit {
  singleOfferPage: SingleOfferPageModel | null = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpOfferService,
    private router: Router,
    private metaService: Meta,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let name = 'offer/' + params['name'];
      this.metaService.updateTag({
        name: 'title',
        content: SINGLE_OFFER_PAGE[name].metaTitle,
      });
      this.titleService.setTitle(SINGLE_OFFER_PAGE[name].metaTitle);
      this.metaService.updateTag({
        name: 'description',
        content: SINGLE_OFFER_PAGE[name].metaDescription,
      });
      this.http
        .getOfferByName<SingleOfferPageModel>(name, SINGLE_OFFER_PAGE[name])
        .pipe(
          catchError((error: HttpErrorResponse) => {
            this.router.navigate(['/not-found']);
            return throwError(() => error);
          })
        )
        .subscribe((singleOfferPage) => {
          this.singleOfferPage = singleOfferPage;
        });
    });
  }
}
