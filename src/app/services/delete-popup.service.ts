import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { DeleteConfirmationComponent } from '@components/admin/delete-confirmation/delete-confirmation.component';

@Injectable({
  providedIn: 'root',
})
export class DeletePopupService {
  private deleteComponentRef: ComponentRef<DeleteConfirmationComponent> | null =
    null;
  public vcref!: ViewContainerRef;
  constructor() {}
  public setViewContainerRef(vcref: ViewContainerRef) {
    this.vcref = vcref;
  }
  async loadDeleteConfirmationComponent(callback: (deleted: boolean) => void) {
    this.vcref.clear();
    const { DeleteConfirmationComponent } = await import(
      '@components/admin/delete-confirmation/delete-confirmation.component'
    );
    this.deleteComponentRef = this.vcref.createComponent(
      DeleteConfirmationComponent
    );
    this.deleteComponentRef.instance.close.subscribe((data) => {
      this.vcref.remove();
      callback(data);
    });
  }
}
