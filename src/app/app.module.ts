import { InjectionToken, NgModule } from '@angular/core';
import { FrontComponent } from 'src/app/layouts/front/front.component';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { BlogComponent } from '@components/blog/blog.component';
import { ChangeItemComponent } from '@components/common/change-item/change-item.component';
import { DisplayPhotoComponent } from '@components/display-photo/display-photo.component';
import { DoubtComponent } from '@components/doubt/doubt.component';
import { FooterComponent } from '@components/footer/footer.component';
import { GalleryComponent } from '@components/gallery/gallery.component';
import { InfoComponent } from '@components/info/info.component';
import { IntroductionComponent } from '@components/introduction/introduction.component';
import { NavItemComponent } from '@components/navigation/nav-item/nav-item.component';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { OfferComponent } from '@components/offer/offer.component';
import { SliderComponent } from '@components/slider/slider.component';
import { SpecialPhotoComponent } from '@components/special-photo/special-photo.component';
import { TitleComponent } from '@components/title/title.component';
import { BlogArticlePageComponent } from '@pages/blog-article-page/blog-article-page.component';
import { BlogListPageComponent } from '@pages/blog-list-page/blog-list-page.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { FullOfferPageComponent } from '@pages/full-offer-page/full-offer-page.component';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';
import { PortfolioPageComponent } from '@pages/portfolio-page/portfolio-page.component';
import { QaPageComponent } from '@pages/qa-page/qa-page.component';
import { SingleOfferPageComponent } from '@pages/single-offer-page/single-offer-page.component';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './layouts/admin/admin.component';
import { LoginComponent } from './components/admin/login/login.component';
import { DashboardComponent } from './layouts/admin/dashboard/dashboard.component';
import { NavComponent } from './components/admin/nav/nav.component';
import { BlogListComponent } from './components/admin/blog-list/blog-list.component';
import { BlogAddComponent } from './components/admin/blog-add/blog-add.component';
import { BlogEditComponent } from './components/admin/blog-edit/blog-edit.component';
import { SliderListComponent } from './components/admin/slider-list/slider-list.component';
import { SliderEditComponent } from './components/admin/slider-edit/slider-edit.component';
import { OfferHomePageListComponent } from './components/admin/offer-home-page-list/offer-home-page-list.component';
import { OfferHomePageEditComponent } from './components/admin/offer-home-page-edit/offer-home-page-edit.component';
import { FullOfferListComponent } from './components/admin/full-offer-list/full-offer-list.component';
import { FullOfferEditComponent } from './components/admin/full-offer-edit/full-offer-edit.component';
import { PortfolioMainComponent } from './components/admin/portfolio-main/portfolio-main.component';
import { GalleryListComponent } from './components/admin/gallery-list/gallery-list.component';
import { GalleryEditComponent } from './components/admin/gallery-edit/gallery-edit.component';
import { GalleryAddComponent } from './components/admin/gallery-add/gallery-add.component';
import { DeleteConfirmationComponent } from '@components/admin/delete-confirmation/delete-confirmation.component';
import { HttpExtendedClient } from './modules/http-auth/http-auth.module';
import { AddGalleryPopupComponent } from './components/admin/add-gallery-popup/add-gallery-popup.component';
import { LoginForgottenPasswordComponent } from './components/admin/login/login-forgotten-password/login-forgotten-password.component';
import { LoginInfoComponent } from './components/admin/login/login-info/login-info.component';
import { LoginPasswordResetComponent } from './components/admin/login/login-password-reset/login-password-reset.component';
import { ErrorPopupComponent } from './components/admin/error-popup/error-popup.component';
import { CookiesPopupComponent } from './components/cookies-popup/cookies-popup.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptorService } from './services/http-error-interceptor.service';
import { HttpErrorPopupService } from './services/http-error-popup.service';
import { HttpErrorPropagatorService } from './services/http-error-propagator.service';
@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    AdminComponent,
    HomePageComponent,
    TitleComponent,
    IntroductionComponent,
    InfoComponent,
    SpecialPhotoComponent,
    DoubtComponent,
    FooterComponent,
    NavigationComponent,
    NavItemComponent,
    SliderComponent,
    ChangeItemComponent,
    OfferComponent,
    BlogComponent,
    QaPageComponent,
    PortfolioPageComponent,
    DisplayPhotoComponent,
    ContactComponent,
    PageNotFoundComponent,
    FullOfferPageComponent,
    SingleOfferPageComponent,
    GalleryComponent,
    BlogListPageComponent,
    BlogArticlePageComponent,
    LoginComponent,
    DashboardComponent,
    NavComponent,
    BlogListComponent,
    BlogAddComponent,
    BlogEditComponent,
    SliderListComponent,
    SliderEditComponent,
    OfferHomePageListComponent,
    OfferHomePageEditComponent,
    FullOfferListComponent,
    FullOfferEditComponent,
    PortfolioMainComponent,
    GalleryListComponent,
    GalleryEditComponent,
    GalleryAddComponent,
    DeleteConfirmationComponent,
    AddGalleryPopupComponent,
    LoginForgottenPasswordComponent,
    LoginInfoComponent,
    LoginPasswordResetComponent,
    ErrorPopupComponent,
    CookiesPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpExtendedClient,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true,
    },
    HttpErrorPropagatorService,
    Meta,
  ],
  bootstrap: [AppComponent],
  exports: [FormsModule, ReactiveFormsModule],
})
export class AppModule {}
