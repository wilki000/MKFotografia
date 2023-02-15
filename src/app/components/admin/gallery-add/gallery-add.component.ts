import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { HttpGalleryService } from 'src/app/services/http-gallery.service';

@Component({
  selector: 'app-gallery-add',
  templateUrl: './gallery-add.component.html',
  styleUrls: ['./gallery-add.component.scss'],
})
export class GalleryAddComponent {
  public angForm: FormGroup | null = null;
  public requestInProgress: boolean = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpGalleryService,
    private router: Router
  ) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      displayName: [null, Validators.required],
    });
  }

  addGallery() {
    if (this.angForm !== null) {
      this.requestInProgress = true;
      this.http
        .postGallery(this.angForm.controls['displayName'].value)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            this.requestInProgress = false;
            return throwError(() => error);
          })
        )
        .subscribe((response: HttpResponse<any>) => {
          let location = response.headers.get('location');
          if (location) {
            let splittedLocation: string[] = location?.split('/');
            let id: number = Number(
              splittedLocation[splittedLocation?.length - 1]
            );
            this.router.navigate(['/', 'admin', 'gallery-edit', id]);
          }
        });
    }
  }
}
