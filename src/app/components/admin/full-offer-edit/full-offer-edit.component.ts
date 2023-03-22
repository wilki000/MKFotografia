import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewContainerRef } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SingleOfferPageModel } from '@models/single-offer-page-model';
import { catchError, throwError } from 'rxjs';
import { AddGalleryPopupService } from 'src/app/services/add-gallery-popup.service';
import { HttpOfferService } from 'src/app/services/http-offer.service';

@Component({
  selector: 'app-full-offer-edit',
  templateUrl: './full-offer-edit.component.html',
  styleUrls: ['./full-offer-edit.component.scss'],
})
export class FullOfferEditComponent {
  public angForm: FormGroup | null = null;
  private id: number | null = null;
  public pageImg: string = '';
  public singleOfferPageModel: SingleOfferPageModel | null = null;
  private file: File | null = null;
  public requestInProgress: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpOfferService,
    private route: ActivatedRoute,
    private router: Router,
    public addGalleryPopupService: AddGalleryPopupService,
    private vcref: ViewContainerRef
  ) {
    this.addGalleryPopupService.setViewContainerRef(this.vcref);
    this.createForm();
  }
  get offerParagraph(): FormArray {
    return this.angForm?.get('offerParagraph') as FormArray;
  }
  get additionalInfo(): FormArray {
    return this.angForm?.get('additionalInfo') as FormArray;
  }
  public getOfferParagraphElement(i: number): FormControl {
    return this.offerParagraph.at(i) as FormControl;
  }
  public getAdditionalInfoElement(i: number): FormControl {
    return this.additionalInfo.at(i) as FormControl;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.http
        .getOfferById<SingleOfferPageModel>(params['id'])
        .subscribe((singleOfferPageModel) => {
          this.singleOfferPageModel = singleOfferPageModel;
          this.angForm?.controls['alt']?.setValue(
            singleOfferPageModel.pageImgAlt
          );
          this.angForm?.controls['title']?.setValue(singleOfferPageModel.title);
          this.angForm?.controls['photoOffset']?.setValue(
            singleOfferPageModel.photoOffset
          );
          this.angForm?.controls['galleryId']?.setValue(
            singleOfferPageModel.gallery?.id
          );
          this.angForm?.controls['spaceBetweenIndex']?.setValue(
            singleOfferPageModel.spaceBetweenIndex
          );
          this.angForm?.controls['price']?.setValue(singleOfferPageModel.price);
          if (singleOfferPageModel.offerParagraph !== undefined) {
            for (let paragraph of singleOfferPageModel.offerParagraph) {
              this.offerParagraph.push(
                this.fb.control(paragraph, Validators.required)
              );
            }
          }

          if (singleOfferPageModel.additionalInfo !== undefined) {
            for (let paragraph of singleOfferPageModel.additionalInfo) {
              this.additionalInfo.push(
                this.fb.control(paragraph, Validators.required)
              );
            }
          }

          this.pageImg = 'url(' + singleOfferPageModel.pageImage + ')';
        });
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      pageImg: [null],
      alt: [null],
      title: [null],
      photoOffset: [null],
      galleryId: [null],
      offerParagraph: this.fb.array([], Validators.minLength(1)),
      spaceBetweenIndex: [null],
      price: [null],
      additionalInfo: this.fb.array([], Validators.minLength(1)),
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
        this.pageImg = 'url(' + input.result + ')';
      };
      reader.readAsDataURL(file);
    }
  }

  removeOfferParagraph(id: number) {
    this.offerParagraph.removeAt(id);
  }
  removeAdditionalInfoParagraph(id: number) {
    this.additionalInfo.removeAt(id);
  }

  addOfferParagraph() {
    this.offerParagraph.push(this.fb.control(null, Validators.required));
  }

  addAdditionalInfoParagraph() {
    this.additionalInfo.push(this.fb.control(null, Validators.required));
  }

  saveFullOffer() {
    if (this.angForm !== null && this.id !== null) {
      this.requestInProgress = true;
      this.http
        .putOffer(this.id, {
          title: this.angForm?.controls['title']?.value,
          pageImg: this.file,
          pageImgAlt: this.angForm?.controls['alt']?.value,
          photoOffset: this.angForm?.controls['photoOffset']?.value,
          spaceBetweenIndex: this.angForm?.controls['spaceBetweenIndex']?.value,
          price: this.angForm?.controls['price']?.value,
          galleryId: this.angForm?.controls['galleryId']?.value,

          offerParagraph: this.offerParagraph.controls.flatMap<
            string,
            FormControl
          >((control) => {
            return control.value;
          }),

          additionalInfo: this.additionalInfo.controls.flatMap<
            string,
            FormControl
          >((control) => {
            return control.value;
          }),
        })
        .pipe(
          catchError((error: HttpErrorResponse) => {
            this.requestInProgress = false;
            return throwError(() => error);
          })
        )
        .subscribe(() => {
          if (this.angForm?.controls['galleryId'].value !== null) {
            this.router.navigate([
              '/',
              'admin',
              'gallery-edit',
              this.angForm?.controls['galleryId'].value,
            ]);
          } else {
            this.router.navigate(['/', 'admin', 'full-offer-list']);
          }
        });
    }
  }
  addGallery(): (data: { statusOk: boolean; id: number | null }) => void {
    return (data: { statusOk: boolean; id: number | null }) => {
      if (data.statusOk) {
        this.angForm?.controls['galleryId'].setValue(data.id);
      }
    };
  }
}
