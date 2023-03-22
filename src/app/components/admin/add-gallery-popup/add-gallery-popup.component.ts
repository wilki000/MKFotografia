import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpGalleryService } from 'src/app/services/http-gallery.service';

@Component({
  selector: 'app-add-gallery-popup',
  templateUrl: './add-gallery-popup.component.html',
  styleUrls: ['./add-gallery-popup.component.scss']
})
export class AddGalleryPopupComponent {
  @Output() close = new EventEmitter<{statusOk: boolean, id: number | null}>();

  public angForm: FormGroup | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpGalleryService,
  ) {
    this.createForm();
  }


  emitClose(statusOk: boolean, id: number | null) {
    this.close.emit({statusOk: statusOk, id: id});
  }

  createForm() {
    this.angForm = this.fb.group({
      displayName: [null, Validators.required],
    });
  }

  addGallery() {
    if (this.angForm !== null) {
      this.http
        .postGallery(this.angForm.controls['displayName'].value)
        .subscribe((response: HttpResponse<any>) => {
          let location = response.headers.get('location');
          if (location) {
            let splittedLocation: string[] = location?.split('/');
            let id: number = Number(
              splittedLocation[splittedLocation?.length - 1]
            );
            this.emitClose(true, id);
          }
        });
    }
  }
}
