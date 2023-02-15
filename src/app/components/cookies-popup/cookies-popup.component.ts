import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies-popup',
  templateUrl: './cookies-popup.component.html',
  styleUrls: ['./cookies-popup.component.scss'],
})
export class CookiesPopupComponent {
  public accepted: boolean = false;
  constructor(private cookieService: CookieService) {
    this.accepted = this.cookieService.get('cookiesPermission') === 'true';
  }
  acceptCookies() {
    this.cookieService.set('cookiesPermission', 'true', 7);
    this.accepted = true;
  }
}
