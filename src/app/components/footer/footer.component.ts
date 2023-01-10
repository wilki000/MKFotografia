import { Component } from '@angular/core';
import outlineFacebook  from '@iconify/icons-ic/outline-facebook';
import instagramIcon from '@iconify/icons-mdi/instagram';
import phoneIcon from '@iconify/icons-mdi/phone';
import baselineAlternateEmail from '@iconify/icons-ic/baseline-alternate-email';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  fbIcon = outlineFacebook;
  instIcon = instagramIcon;
  phoneIcon = phoneIcon;
  emailIcon = baselineAlternateEmail;

  get footer(): string {
    return '© Monika Kalicka';
  }

  getDate(): Date {
    return new Date();
  }
}
