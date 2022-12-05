import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TitleComponent } from './components/title/title.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { InfoComponent } from './components/info/info.component';
import { IconModule } from '@visurel/iconify-angular';
import { SpecialPhotoComponent } from './components/special-photo/special-photo.component';
import { DoubtComponent } from './components/doubt/doubt.component';
import { FooterComponent } from './components/footer/footer.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, IconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
