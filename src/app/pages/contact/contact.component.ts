import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private metaService: Meta, private titleService: Title) {
    metaService.updateTag({
      name: 'title',
      content: 'Kontakt | Fotograf Grajewo Podlaskie | Magia Chwili Fotografia',
    });
    titleService.setTitle(
      'Kontakt | Fotograf Grajewo Podlaskie | Magia Chwili Fotografia'
    );
    metaService.updateTag({
      name: 'description',
      content:
        'Umów się już dziś. Zawsze odpowiadam w przeciągu 24 godzin. Tel: +48 575 122 002 E-mail: magiachwilifotografia@gmail.com ',
    });
  }
}
