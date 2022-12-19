import { Component } from '@angular/core';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavItemModel, CATEGORIES } from '@models/nav-item-model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  categories: NavItemModel[];
  constructor() {
    this.categories = CATEGORIES;
  }
  toggleScroll() {
    document.querySelector("body")?.classList.toggle("noscroll");
  }
}
