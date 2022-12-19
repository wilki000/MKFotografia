import { Component, Input, OnInit } from '@angular/core';
import { NavItemModel } from '@models/nav-item-model';
import sharpArrowDropDown from '@iconify/icons-ic/sharp-arrow-drop-down';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  @Input() mainCategory!: NavItemModel;

  arrowDrop = sharpArrowDropDown;

  hasSubcategories!: boolean;
  constructor() {}
  ngOnInit(): void {
    this.hasSubcategories = this.mainCategory.subCategories != null;
  }
}
