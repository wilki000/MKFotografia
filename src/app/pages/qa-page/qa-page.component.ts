import { Component } from '@angular/core';
import { QA, QaModel } from '@models/qa-model';

@Component({
  selector: 'app-qa-page',
  templateUrl: './qa-page.component.html',
  styleUrls: ['./qa-page.component.scss'],
})
export class QaPageComponent {
  qaCollection: QaModel[];
  icons: string[];

  constructor() {
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
