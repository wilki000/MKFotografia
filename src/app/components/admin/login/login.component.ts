import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpExtendedClient } from 'src/app/modules/http-auth/http-auth.module';
import { HttpAuthService } from 'src/app/services/http-auth.service';
import { HttpErrorPopupService } from 'src/app/services/http-error-popup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public angForm: FormGroup | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpExtended: HttpExtendedClient,
    private httpAuth: HttpAuthService,
    private httpErrorPopup: HttpErrorPopupService,
    private vcref: ViewContainerRef
  ) {
    this.httpErrorPopup.setViewContainerRef(this.vcref);
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    let loggedPromise = this.httpExtended.isLoggedIn();
    loggedPromise.then((valid) => {
      if (valid) {
        this.redirect();
      } else {
        this.httpAuth.logout();
      }
    });
  }

  private redirect(): void {
    this.router.navigate(['/', 'admin', 'blog-list']);
  }

  signIn() {
    if (this.angForm?.valid) {
      this.httpAuth
        .login({
          email: this.angForm?.controls['login'].value,
          password: this.angForm?.controls['password'].value,
        })
        .subscribe((token) => {
          this.httpAuth.setAuthToken(token);
          this.redirect();
        });
    }
  }
}
