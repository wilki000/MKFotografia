import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SliderPhotoModel } from '@models/slider-photo-model';
import { catchError, throwError } from 'rxjs';
import { HttpSliderPhotosService } from 'src/app/services/http-slider-photos.service';

@Component({
  selector: 'app-slider-edit',
  templateUrl: './slider-edit.component.html',
  styleUrls: ['./slider-edit.component.scss'],
})
export class SliderEditComponent implements OnInit {
  public angForm: FormGroup | null = null;
  public photoModel: SliderPhotoModel | null = null;
  public imgSrc: string = '';
  private id: number | null = null;
  private file: File | null = null;
  public requestInProgress: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpSliderPhotosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.http.getSliderPhoto(params['id']).subscribe((photoModel) => {
        this.photoModel = photoModel;
        this.angForm?.controls['alternativeText']?.setValue(
          photoModel.alternativeText
        );
        this.imgSrc = 'url(' + photoModel.image + ')';
      });
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      photo: [null, Validators.required],
      alternativeText: [null, Validators.required],
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
        this.imgSrc = 'url(' + input.result + ')';
      };
      reader.readAsDataURL(file);
    }
  }

  saveSliderPhoto() {
    if (this.angForm !== null && this.id !== null && this.file !== null) {
      this.requestInProgress = true;
      this.http
        .putSliderPhoto(this.id, {
          alternativeText: this.angForm?.controls['alternativeText']?.value,
          photo: this.file,
        })
        .pipe(
          catchError((error: HttpErrorResponse) => {
            this.requestInProgress = false;
            return throwError(() => error);
          })
        )
        .subscribe(() => {
          this.router.navigate(['/', 'admin', 'slider-list']);
        });
    }
  }
}
