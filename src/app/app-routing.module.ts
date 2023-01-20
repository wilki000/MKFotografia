import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '@pages/contact/contact.component';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';
import { PortfolioPageComponent } from '@pages/portfolio-page/portfolio-page.component';
import { QaPageComponent } from '@pages/qa-page/qa-page.component';

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
