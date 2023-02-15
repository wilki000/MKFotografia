import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss'],
})
export class DeleteConfirmationComponent {
  @Output() close = new EventEmitter<boolean>();
  emitClose(deleted: boolean) {
    this.close.emit(deleted);
  }
}
