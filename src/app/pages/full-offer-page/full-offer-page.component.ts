import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FullOfferModel, FULL_OFFER } from '@models/full-offer-model';
import { HttpOfferService } from 'src/app/services/http-offer.service';

@Component({
  selector: 'app-full-offer-page',
  templateUrl: './full-offer-page.component.html',
  styleUrls: ['./full-offer-page.component.scss'],
})
export class FullOfferPageComponent {
  fullOffer: FullOfferModel[] | null = null;

  constructor(
    private http: HttpOfferService,
    private metaService: Meta,
    private titleService: Title
  ) {
    metaService.updateTag({
      name: 'title',
      content: 'Oferta | Fotograf Grajewo Podlaskie | Magia Chwili Fotografia',
    });
    titleService.setTitle(
      'Oferta | Fotograf Grajewo Podlaskie | Magia Chwili Fotografia'
    );
    metaService.updateTag({
      name: 'description',
      content:
        'Fotograf Grajewo ✔️ Oferta Fotografii Naturalnej. Profesjonalny fotograf uchwyci najpiękniejsze chwile z Twojego życia. Podlasie, Mazury',
    });
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
