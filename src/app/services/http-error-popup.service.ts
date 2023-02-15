import { HttpErrorResponse } from '@angular/common/http';
import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { ErrorPopupComponent } from '@components/admin/error-popup/error-popup.component';
import { HttpErrorPropagatorService } from './http-error-propagator.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorPopupService {
  private errorPopupComponentRef: ComponentRef<ErrorPopupComponent> | null =
    null;
  public vcref!: ViewContainerRef;
  constructor(private propagator: HttpErrorPropagatorService) {}
  public setViewContainerRef(vcref: ViewContainerRef) {
    this.vcref = vcref;
    this.propagator.error.subscribe((error: any) => {
      this.loadErrorPopupComponent(error);
    });
  }
  loadErrorPopupComponent(error: HttpErrorResponse) {
    this.vcref.clear();
    this.errorPopupComponentRef =
      this.vcref.createComponent(ErrorPopupComponent);
    this.errorPopupComponentRef.instance.error = error;
    this.errorPopupComponentRef.instance.close.subscribe(() => {
      this.vcref.remove();
    });
  }
}
