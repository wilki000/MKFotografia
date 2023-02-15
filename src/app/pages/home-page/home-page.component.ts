import { Component } from '@angular/core';
import { TitleComponent } from '@components/title/title.component';
import { IntroductionComponent } from '@components/introduction/introduction.component';
import { InfoComponent } from '@components/info/info.component';
import { DoubtComponent } from '@components/doubt/doubt.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(private metaService: Meta, private titleService: Title) {
    metaService.updateTag({
      name: 'title',
      content: 'Fotograf Ślubny Grajewo ❤️ | Magia Chwili Fotografia',
    });
    titleService.setTitle(
      'Fotograf Ślubny Grajewo ❤️ | Magia Chwili Fotografia'
    );
    metaService.updateTag({
      name: 'description',
      content:
        'Fotograf Ślubny Grajewo ✔️ Profesjonalny Fotograf Ślubny na Twoje wesele, robiący zdjęcia ślubne i plener ślubny. Naturalna fotografia ślubna. Podlasie, Mazury',
    });
  }
}
