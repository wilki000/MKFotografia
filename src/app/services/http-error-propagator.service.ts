import { HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorPropagatorService {
  @Output() error = new EventEmitter<HttpErrorResponse>();
  constructor() {}
}
