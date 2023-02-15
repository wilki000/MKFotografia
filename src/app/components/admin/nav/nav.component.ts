import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpExtendedClient } from 'src/app/modules/http-auth/http-auth.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

constructor(private http: HttpExtendedClient, private router: Router){}

  logout() {
    this.http.logout();
    this.router.navigate(['/','admin', 'login']);
  }

}
