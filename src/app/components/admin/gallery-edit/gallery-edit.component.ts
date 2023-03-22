import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryModel, PhotoOrderModel } from '@models/gallery-model';
import { catchError, throwError } from 'rxjs';
import { DeletePopupService } from 'src/app/services/delete-popup.service';
import { HttpGalleryPhotoService } from 'src/app/services/http-gallery-photo.service';
import { HttpGalleryService } from 'src/app/services/http-gallery.service';

@Component({
  selector: 'app-gallery-edit',
  templateUrl: './gallery-edit.component.html',
  styleUrls: ['./gallery-edit.component.scss'],
})
export class GalleryEditComponent implements OnInit {
  public photoForm: FormGroup | null = null;
  public galleryForm: FormGroup | null = null;
  public galleryModel: GalleryModel | null = null;
  private id: number | null = null;
  private file: File | null = null;
  public editMode: boolean = true;
  public requestInProgress: boolean = false;

  constructor(
    private fb: FormBuilder,
    private httpPhoto: HttpGalleryPhotoService,
    private httpGallery: HttpGalleryService,
    private route: ActivatedRoute,
    private router: Router,
    public popupService: DeletePopupService,
    private vcref: ViewContainerRef
  ) {
    this.popupService.setViewContainerRef(this.vcref);
    this.createForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.httpGallery
        .getGalleryById(params['id'])
        .subscribe((galleryModel) => {
          this.galleryModel = galleryModel;
          this.httpPhoto
            .getGalleryPhotosByGalleryId(params['id'])
            .subscribe((photoModel) => {
              this.galleryModel!.photos = photoModel;
              for (let photo of this.galleryModel!.photos) {
                this.photoOrders.push(
                  this.fb.group({
                    id: [photo.id, Validators.required],
                    order: [
                      this.galleryModel!.photos.indexOf(photo) + 1,
                      Validators.required,
                    ],
                  })
                );
              }
              this.photoForm?.controls['order'].setValue(
                this.galleryModel!.photos.length
              );
            });
        });
    });
  }

  get photoOrders(): FormArray {
    return this.galleryForm?.get('photoOrders') as FormArray;
  }

  public getPhotoOrderGroup(i: number): FormGroup {
    return this.photoOrders.at(i) as FormGroup;
  }

  public getFormControlFromPhotoOrderGroup(
    i: number,
    name: string
  ): FormControl {
    return this.getPhotoOrderGroup(i).get(name) as FormControl;
  }

  createForm() {
    this.galleryForm = this.fb.group({
      photoOrders: this.fb.array([]),
    });
    this.photoForm = this.fb.group({
      photo: [null, Validators.required],
      order: [null, Validators.required],
      alternativeText: [null, Validators.required],
    });
  }

  saveGallery() {
    if (this.galleryForm !== null) {
      this.requestInProgress = true;
      this.httpPhoto
        .putOrders({
          photoOrders: this.photoOrders.controls.flatMap<
            PhotoOrderModel,
            FormGroup
          >((group) => {
            return {
              id: group.get('id')?.value,
              order: group.get('order')?.value,
            };
          }),
        })
        .pipe(
          catchError((error: HttpErrorResponse) => {
            this.requestInProgress = false;
            return throwError(() => error);
          })
        )
        .subscribe(() => {
          this.reloadPage();
        });
    }
  }

  uploadPhoto() {
    if (this.photoForm !== null && this.id !== null && this.file !== null) {
      this.requestInProgress = true;
      this.httpGallery
        .postGalleryPhoto(this.id, {
          photo: this.file,
          order: this.photoForm?.controls['order']?.value,
          alternativeText: this.photoForm?.controls['alternativeText']?.value,
        })
        .pipe(
          catchError((error: HttpErrorResponse) => {
            this.requestInProgress = false;
            return throwError(() => error);
          })
        )
        .subscribe(() => {
          this.reloadPage();
        });
    }
  }
  private reloadPage(): void {
    this.router
      .navigateByUrl('/', {
        skipLocationChange: true,
      })
      .then(() => {
        this.router.navigate(['/', 'admin', 'gallery-edit', this.id]);
      });
  }
  loadFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0] as File;
      this.file = file;
      var reader = new FileReader();

      reader.readAsDataURL(file);
    }
  }

  removePhoto(photoId: number): (deleted: boolean) => void {
    return (deleted: boolean) => {
      if (deleted) {
        this.httpPhoto.removePhoto(photoId).subscribe(() => {
          this.reloadPage();
        });
      }
    };
  }
  reorderPhotos() {
    this.photoOrders.controls.sort((leftControl, rightControl) => {
      let comprasion = 0;
      let leftValue = leftControl.get('order')?.value;
      let rightValue = rightControl.get('order')?.value;
      if (leftValue > rightValue) {
        comprasion = 1;
      } else if (leftValue < rightValue) {
        comprasion = -1;
      }
      return comprasion;
    });
    for (let i: number = 0; i < this.photoOrders.controls.length; i++) {
      this.photoOrders.controls
        .at(i)
        ?.get('order')
        ?.setValue(i + 1);
    }
    this.galleryModel!.photos.sort((leftPhoto, rightPhoto) => {
      let leftControl = this.photoOrders.controls.find((control) => {
        return control.get('id')?.value === leftPhoto.id;
      });
      let rightControl = this.photoOrders.controls.find((control) => {
        return control.get('id')?.value === rightPhoto.id;
      });
      let comprasion = 0;
      let leftValue = leftControl?.get('order')?.value;
      let rightValue = rightControl?.get('order')?.value;
      if (leftValue > rightValue) {
        comprasion = 1;
      } else if (leftValue < rightValue) {
        comprasion = -1;
      }
      return comprasion;
    });
  }
  toggleEditMode() {
    this.editMode = !this.editMode;
  }
  changeOrder(index: number, delta: number) {
    if (
      !(index === 0 && delta < 0) &&
      !(index === this.photoOrders.controls.length - 1 && delta > 1)
    ) {
      this.photoOrders.controls
        .at(index)
        ?.get('order')
        ?.setValue(index + delta);
      this.photoOrders.controls
        .at(index + delta)
        ?.get('order')
        ?.setValue(index - delta);
    }
    this.reorderPhotos();
  }
}
