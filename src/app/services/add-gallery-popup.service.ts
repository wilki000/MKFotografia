import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { AddGalleryPopupComponent } from '@components/admin/add-gallery-popup/add-gallery-popup.component';

@Injectable({
  providedIn: 'root',
})
export class AddGalleryPopupService {
  private addGalleryPopupComponentRef: ComponentRef<AddGalleryPopupComponent> | null =
    null;
  public vcref!: ViewContainerRef;
  constructor() {}
  public setViewContainerRef(vcref: ViewContainerRef) {
    this.vcref = vcref;
  }
  async loadGalleryPopupComponent(callback: (data: {statusOk: boolean, id: number | null}) => void) {
    this.vcref.clear();
    const { AddGalleryPopupComponent } = await import(
      '@components/admin/add-gallery-popup/add-gallery-popup.component'
    );
    this.addGalleryPopupComponentRef = this.vcref.createComponent(
      AddGalleryPopupComponent
    );
    this.addGalleryPopupComponentRef.instance.close.subscribe((data) => {
      this.vcref.remove();
      callback(data);
    });
  }
}
