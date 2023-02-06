import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TitleComponent } from './components/title/title.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { InfoComponent } from './components/info/info.component';
import { SpecialPhotoComponent } from './components/special-photo/special-photo.component';
import { DoubtComponent } from './components/doubt/doubt.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavItemComponent } from './components/navigation/nav-item/nav-item.component';
import { SliderComponent } from './components/slider/slider.component';
import { ChangeItemComponent } from './components/common/change-item/change-item.component';
import { OfferComponent } from './components/offer/offer.component';
import { BlogComponent } from './components/blog/blog.component';
import { QaPageComponent } from './pages/qa-page/qa-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { DisplayPhotoComponent } from './components/display-photo/display-photo.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FullOfferPageComponent } from './pages/full-offer-page/full-offer-page.component';
import { SingleOfferPageComponent } from '@pages/single-offer-page/single-offer-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BlogListPageComponent } from './pages/blog-list-page/blog-list-page.component';
import { BlogArticlePageComponent } from './pages/blog-article-page/blog-article-page.component';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
