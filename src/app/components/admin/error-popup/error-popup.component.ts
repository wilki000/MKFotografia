import { HttpErrorResponse } from '@angular/common/http';
import { Component, DoCheck, EventEmitter, Output } from '@angular/core';

export interface ErrorModel {
  name: string;
  issues: string[];
}

@Component({
  selector: 'app-error-popup',
  templateUrl: './error-popup.component.html',
  styleUrls: ['./error-popup.component.scss'],
})
export class ErrorPopupComponent implements DoCheck {
  @Output() close = new EventEmitter<void>();
  public error: HttpErrorResponse | null = null;
  public convertedErrors: ErrorModel[] | null = null;
  ngDoCheck(): void {
    this.convertedErrors = [];
    if (
      this.error !== null &&
      this.error.error !== null &&
      !this.isSimpleError()
    ) {
      let indexOfErrors = Object.keys(this.error!.error).indexOf('errors');
      let errors = Object.values(this.error!.error).at(indexOfErrors)!;
      Object.keys(errors).forEach((key, index) => {
        this.convertedErrors?.push({
          name: key,
          issues: Object.values(errors).at(index),
        } as ErrorModel);
      });
    }
  }
  closePopup() {
    this.close.emit();
  }
  isSimpleError(): boolean {
    return typeof this.error!.error === 'string';
  }
}
