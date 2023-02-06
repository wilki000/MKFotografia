import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '@pages/contact/contact.component';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { PortfolioPageComponent } from '@pages/portfolio-page/portfolio-page.component';
import { QaPageComponent } from '@pages/qa-page/qa-page.component';
import { FullOfferPageComponent } from '@pages/full-offer-page/full-offer-page.component';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';
import { SingleOfferPageComponent } from '@pages/single-offer-page/single-offer-page.component';
import { BlogListPageComponent } from '@pages/blog-list-page/blog-list-page.component';
import { BlogArticlePageComponent } from '@pages/blog-article-page/blog-article-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
    data: { style: 'white' },
  },
  { path: 'home', component: HomePageComponent, data: { style: 'white' } },
  { path: 'qa', component: QaPageComponent, data: { style: 'black' } },
  {
    path: 'portfolio',
    component: PortfolioPageComponent,
    data: { style: 'black' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { style: 'black' },
  },
  {
    path: 'blog/:id',
    component: BlogArticlePageComponent,
    data: { style: 'black' },
  },
  {
    path: 'blog',
    component: BlogListPageComponent,
    data: { style: 'black' },
  },
  {
    path: 'offer/:name',
    component: SingleOfferPageComponent,
    data: { style: 'black', offerId: 0 },
  },
  {
    path: 'offer',
    component: FullOfferPageComponent,
    data: { style: 'black' },
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
    data: { style: 'black' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollOffset: [0, 0],
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
