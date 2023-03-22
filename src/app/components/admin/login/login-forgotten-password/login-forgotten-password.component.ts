import { Component, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpAuthService } from 'src/app/services/http-auth.service';
import { HttpErrorPopupService } from 'src/app/services/http-error-popup.service';

@Component({
  selector: 'app-login-forgotten-password',
  templateUrl: './login-forgotten-password.component.html',
  styleUrls: ['./login-forgotten-password.component.scss'],
})
export class LoginForgottenPasswordComponent {
  public angForm: FormGroup | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpAuthService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      login: ['', Validators.required],
    });
  }

  sendResetRequest() {
    if (this.angForm != null) {
      this.http.requestReset({ login: this.angForm.controls['login']?.value });
      this.router.navigate(['admin', 'login-info']);
    }
  }
}
