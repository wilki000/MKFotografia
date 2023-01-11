import { Component } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  get footer(): string {
    return '© Monika Kalicka';
  }

  getDate(): Date {
    return new Date();
  }
}
