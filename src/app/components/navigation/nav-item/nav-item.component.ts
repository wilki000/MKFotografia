import {
  Component,
  ElementRef,
  Input,
  OnInit,
  HostListener,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { NavItemModel } from '@models/nav-item-model';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit, AfterViewInit {
  @Input() mainCategory!: NavItemModel;
  @Input() currentStyle!: string;
  @Output() routeEvent = new EventEmitter<void>();

  subcategories!: HTMLElement;
  category!: HTMLElement;

  hasSubcategories!: boolean;
  constructor(private elem: ElementRef) {}

  ngOnInit(): void {
    this.hasSubcategories = this.mainCategory.subCategories != null;
  }
  ngAfterViewInit(): void {
    this.subcategories =
      this.elem.nativeElement.querySelectorAll('.subcategory')[0];
    this.category = this.elem.nativeElement.querySelectorAll('.category')[0];
  }

  toggleClickSubcategories(): void {
    this.category.classList.toggle('clicked-subcategory');
    this.subcategories.classList.toggle('clicked');
    this.toggleHidden();
  }

  removeClick(force: boolean = false) {
    if (this.subcategories === undefined || this.category === undefined) {
      return;
    }
    if (force || window.innerWidth > 992) {
      this.subcategories.classList.remove('clicked');
      this.category.classList.remove('clicked-subcategory');
      this.toggleHidden();
    }
  }

  toggleHidden() {
    if (this.subcategories.classList.contains('clicked')) {
      this.subcategories.classList.remove('hidden');
    } else {
      this.subcategories.classList.add('hidden');
    }
  }

  @HostListener('window:scroll')
  hideSubcategory() {
    this.removeClick(true);
  }

  emitRouteEvent() {
    this.routeEvent.emit();
  }
}
