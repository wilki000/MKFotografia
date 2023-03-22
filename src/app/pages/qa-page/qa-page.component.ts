import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { QA, QaModel } from '@models/qa-model';

@Component({
  selector: 'app-qa-page',
  templateUrl: './qa-page.component.html',
  styleUrls: ['./qa-page.component.scss'],
})
export class QaPageComponent {
  qaCollection: QaModel[];
  icons: string[];

  constructor(private metaService: Meta, private titleService: Title) {
    metaService.updateTag({
      name: 'title',
      content: 'Warto Wiedzieć | Fotograf Grajewo | Magia Chwili Fotografia',
    });
    titleService.setTitle(
      'Warto Wiedzieć | Fotograf Grajewo | Magia Chwili Fotografia'
    );
    metaService.updateTag({
      name: 'description',
      content:
        'Praktyczne informacje i porady dotyczące wynajęcia fotografa. Wszystko po to by ważne wydarzenia były niezapomniane. Pytania i odpowiedzi. Podlasie, Mazury',
    });
    this.qaCollection = structuredClone(QA);
    this.icons = [
      'M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z',
      'M19 12.998H5v-2h14z',
    ];
  }
  toggleVisible(event: MouseEvent, model: QaModel) {
    (<Element>(<Element>event.currentTarget).parentNode).classList.toggle(
      'visible'
    );
    model.expanded = !model.expanded;
  }
}
