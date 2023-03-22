import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewContainerRef } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PostModel } from '@models/post-model';
import { catchError, throwError } from 'rxjs';
import { AddGalleryPopupService } from 'src/app/services/add-gallery-popup.service';
import { HttpPostService } from 'src/app/services/http-post.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss'],
})
export class BlogAddComponent {
  public angForm: FormGroup | null = null;
  public image: string | null = null;
  public postModel: PostModel | null = null;
  private file: File | null = null;
  public requestInProgress: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpPostService,
    private router: Router,
    public addGalleryPopupService: AddGalleryPopupService,
    private vcref: ViewContainerRef
  ) {
    this.createForm();
    this.addGalleryPopupService.setViewContainerRef(this.vcref);
  }

  get postData(): FormGroup {
    return this.angForm?.get('postData') as FormGroup;
  }

  get mainContent(): FormArray {
    return this.postData.get('mainContent') as FormArray;
  }

  public getMainContentParagraph(i: number): FormControl {
    return this.mainContent.at(i) as FormControl;
  }

  createForm() {
    this.angForm = this.fb.group({
      photo: [null, Validators.required],
      alt: ['', Validators.required],
      title: ['', Validators.required],
      galleryId: [null],
      postData: this.fb.group({
        teaser: [null, Validators.required],
        mainContent: this.fb.array(
          [this.fb.control(null, Validators.required)],
          Validators.minLength(1)
        ),
      }),
    });
  }

  removeParagraph(id: number) {
    this.mainContent.removeAt(id);
  }

  addParagraph() {
    this.mainContent.push(this.fb.control(null, Validators.required));
  }

  loadFileToPreview(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0] as File;
      this.file = file;
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        const input = event.target as FileReader;
        this.image = 'url(' + input.result + ')';
      };
      reader.readAsDataURL(file);
    }
  }

  savePost() {
    if (this.angForm !== null) {
      this.requestInProgress = true;
      this.http
        .postPost({
          title: this.angForm?.controls['title']?.value,
          galleryId: this.angForm?.controls['galleryId']?.value,
          alt: this.angForm?.controls['alt']?.value,
          postData: {
            teaser: this.postData.controls['teaser']?.value,
            mainContent: this.mainContent.controls.flatMap<string, FormControl>(
              (control) => {
                return control.value;
              }
            ),
          },
          photo: this.file,
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
            this.router.navigate(['/', 'admin', 'blog-list']);
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
