import { Component } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  get footer(): string {
    return '© Magia Chwili Fotografia';
  }

  getDate(): Date {
    return new Date();
  }
}
