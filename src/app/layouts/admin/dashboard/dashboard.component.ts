import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpExtendedClient } from 'src/app/modules/http-auth/http-auth.module';
import { HttpErrorInterceptorService } from 'src/app/services/http-error-interceptor.service';
import { HttpErrorPopupService } from 'src/app/services/http-error-popup.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private http: HttpExtendedClient,
    private router: Router,
    private vcref: ViewContainerRef,
    private httpErrorPopup: HttpErrorPopupService
  ) {
    this.httpErrorPopup.setViewContainerRef(this.vcref);
  }
  ngOnInit(): void {
    let loggedPromise = this.http.isLoggedIn();
    loggedPromise.then((valid) => {
      if (!valid) {
        this.http.logout();
        this.router.navigate(['/', 'admin', 'login']);
      } else {
        this.router.navigate(['/', 'admin', 'blog-list']);
      }
    });
  }
}
