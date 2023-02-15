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
import { FrontComponent } from './layouts/front/front.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { LoginComponent } from '@components/admin/login/login.component';
import { DashboardComponent } from './layouts/admin/dashboard/dashboard.component';
import { BlogListComponent } from '@components/admin/blog-list/blog-list.component';
import { BlogAddComponent } from '@components/admin/blog-add/blog-add.component';
import { BlogEditComponent } from '@components/admin/blog-edit/blog-edit.component';
import { SliderListComponent } from '@components/admin/slider-list/slider-list.component';
import { SliderEditComponent } from '@components/admin/slider-edit/slider-edit.component';
import { OfferHomePageListComponent } from '@components/admin/offer-home-page-list/offer-home-page-list.component';
import { OfferHomePageEditComponent } from '@components/admin/offer-home-page-edit/offer-home-page-edit.component';
import { FullOfferListComponent } from '@components/admin/full-offer-list/full-offer-list.component';
import { FullOfferEditComponent } from '@components/admin/full-offer-edit/full-offer-edit.component';
import { PortfolioMainComponent } from '@components/admin/portfolio-main/portfolio-main.component';
import { GalleryListComponent } from '@components/admin/gallery-list/gallery-list.component';
import { GalleryEditComponent } from '@components/admin/gallery-edit/gallery-edit.component';
import { GalleryAddComponent } from '@components/admin/gallery-add/gallery-add.component';
import { LoginForgottenPasswordComponent } from '@components/admin/login/login-forgotten-password/login-forgotten-password.component';
import { LoginInfoComponent } from '@components/admin/login/login-info/login-info.component';
import { LoginPasswordResetComponent } from '@components/admin/login/login-password-reset/login-password-reset.component';

const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
        data: { style: 'white' },
      },
      {
        path: 'home',
        component: HomePageComponent,
        data: { style: 'white' },
      },
      {
        path: 'qa',
        component: QaPageComponent,
        data: { style: 'black' },
      },
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
        data: { style: 'black' },
      },
      {
        path: 'offer',
        component: FullOfferPageComponent,
        data: { style: 'black' },
      },
      {
        path: '404',
        component: PageNotFoundComponent,
        data: { style: 'black' },
      },
    ],
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'admin',
        component: DashboardComponent,
        children: [
          {
            path: 'blog-list',
            component: BlogListComponent,
          },
          {
            path: 'blog-add',
            component: BlogAddComponent,
          },
          {
            path: 'blog-edit/:id',
            component: BlogEditComponent,
          },
          {
            path: 'slider-list',
            component: SliderListComponent,
          },
          {
            path: 'slider-edit/:id',
            component: SliderEditComponent,
          },
          {
            path: 'offer-home-page-list',
            component: OfferHomePageListComponent,
          },
          {
            path: 'offer-home-page-edit/:id',
            component: OfferHomePageEditComponent,
          },
          {
            path: 'full-offer-list',
            component: FullOfferListComponent,
          },
          {
            path: 'full-offer-edit/:id',
            component: FullOfferEditComponent,
          },
          {
            path: 'portfolio-main',
            component: PortfolioMainComponent,
          },
          {
            path: 'gallery-list',
            component: GalleryListComponent,
          },
          {
            path: 'gallery-add',
            component: GalleryAddComponent,
          },
          {
            path: 'gallery-edit/:id',
            component: GalleryEditComponent,
          },
        ],
      },
      {
        path: 'admin/login',
        component: LoginComponent,
      },
      {
        path: 'admin/login-forgotten-password',
        component: LoginForgottenPasswordComponent,
      },
      {
        path: 'admin/login-info',
        component: LoginInfoComponent,
      },
      {
        path: 'admin/login-password-reset/:id',
        component: LoginPasswordResetComponent,
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
    data: { style: 'black' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollOffset: [0, 0],
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
