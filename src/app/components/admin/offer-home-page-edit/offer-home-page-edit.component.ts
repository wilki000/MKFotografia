import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferHomePageModel } from '@models/offer-home-page-model';
import { catchError, throwError } from 'rxjs';
import { HttpOfferService } from 'src/app/services/http-offer.service';

@Component({
  selector: 'app-offer-home-page-edit',
  templateUrl: './offer-home-page-edit.component.html',
  styleUrls: ['./offer-home-page-edit.component.scss'],
})
export class OfferHomePageEditComponent implements OnInit {
  public angForm: FormGroup | null = null;
  public homePageModel: OfferHomePageModel | null = null;
  private id: number | null = null;
  public mainPhoto: string = '';
  private file: File | null = null;
  public requestInProgress: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpOfferService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.http
        .getOfferById<OfferHomePageModel>(params['id'])
        .subscribe((offerModel) => {
          this.homePageModel = offerModel;
          this.angForm?.controls['homeImgAlt']?.setValue(offerModel.homeImgAlt);
          this.mainPhoto = 'url(' + offerModel.homePageImage + ')';
        });
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      homeImg: [null, Validators.required],
      homeImgAlt: [null, Validators.required],
    });
  }

  loadFileToPreview(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0] as File;
      this.file = file;
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        const input = event.target as FileReader;
        this.mainPhoto = 'url(' + input.result + ')';
      };
      reader.readAsDataURL(file);
    }
  }

  saveHomePageOfferPhoto() {
    if (this.angForm !== null && this.id !== null && this.file !== null) {
      this.requestInProgress = true;
      this.http
        .putOffer(this.id, {
          homeImgAlt: this.angForm?.controls['homeImgAlt']?.value,
          homeImg: this.file,
        })
        .pipe(
          catchError((error: HttpErrorResponse) => {
            this.requestInProgress = false;
            return throwError(() => error);
          })
        )
        .subscribe(() => {
          this.router.navigate(['/', 'admin', 'offer-home-page-list']);
        });
    }
  }
}
