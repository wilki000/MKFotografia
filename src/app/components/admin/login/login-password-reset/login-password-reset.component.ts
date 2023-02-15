import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpAuthService } from 'src/app/services/http-auth.service';
import { HttpErrorPopupService } from 'src/app/services/http-error-popup.service';

@Component({
  selector: 'app-login-password-reset',
  templateUrl: './login-password-reset.component.html',
  styleUrls: ['./login-password-reset.component.scss'],
})
export class LoginPasswordResetComponent implements OnInit {
  public angForm: FormGroup | null = null;
  private id: string = '';
  constructor(
    private fb: FormBuilder,
    private httpErrorPopup: HttpErrorPopupService,
    private vcref: ViewContainerRef,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpAuthService
  ) {
    this.httpErrorPopup.setViewContainerRef(this.vcref);
    this.createForm();
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
  samePassword(): ValidatorFn {
    return () => {
      let password = this.angForm?.controls['password'].value;
      let confirmPassword = this.angForm?.controls['confirmPassword'].value;
      if (password === confirmPassword) {
        return null;
      } else {
        this.angForm?.controls['confirmPassword'].setErrors({
          notSame: { actualValue: confirmPassword, requiredValue: password },
        });
        return { notSame: true };
      }
    };
  }
  createForm() {
    this.angForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, this.samePassword()]],
    });
  }

  sendNewPassword() {
    if (this.angForm != null) {
      this.http
        .sendNewPassword({
          key: this.id,
          password: this.angForm.controls['password'].value,
          confirmPassword: this.angForm.controls['confirmPassword'].value,
        })
        .subscribe((response) => {
          this.router.navigate(['admin', 'login']);
        });
    }
  }
}
