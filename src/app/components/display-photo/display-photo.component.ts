import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ChangeItemComponent } from '@components/common/change-item/change-item.component';
import { PortfolioModel } from '@models/portfolio-model';

@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.scss'],
})
export class DisplayPhotoComponent {
  @Output() exit = new EventEmitter<void>();
  @Input() pictures!: PortfolioModel[];
  @ViewChild('changeItem', { static: false })
  changeItem!: ChangeItemComponent;
  currentPhotoObj!: PortfolioModel;
  currentPhoto: number = 0;

  openInNewTab() {
    window.open(this.pictures[this.currentPhoto].image, '_blank');
  }

  close() {
    this.exit.emit();
    this.changeItem.currentItemIndex = 1;
    this.toggleScroll();
  }

  setCurrentPhoto(newCurrentPhoto: number, isEmitedByEvent: boolean = false) {
    this.currentPhoto = isEmitedByEvent ? newCurrentPhoto - 1 : newCurrentPhoto;
    if (!isEmitedByEvent) {
      this.changeItem.currentItemIndex = newCurrentPhoto + 1;
      this.toggleScroll();
    }
  }

  toggleScroll() {
    document.querySelector('body')?.classList.toggle('noscroll');
  }
}
