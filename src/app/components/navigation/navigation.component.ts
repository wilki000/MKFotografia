import { Component, HostListener, OnInit } from '@angular/core';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavItemModel, CATEGORIES } from '@models/nav-item-model';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  categories: NavItemModel[];
  scrollPosition: number = 0;

  constructor() {
    this.categories = CATEGORIES;
  }
  @HostListener('window:scroll', ['$event'])
  setScrollPosition(event: MouseEvent) {
    const oldPosition = this.scrollPosition;
    this.scrollPosition = window.pageYOffset;
    if (oldPosition < this.scrollPosition) {
      document.getElementById('navbar')!.classList.remove('visible');
      document.getElementById('navbar')!.classList.add('hidden');
      console.debug('Scrolling down');
    } else {
      document.getElementById('navbar')!.classList.remove('hidden');
      document.getElementById('navbar')!.classList.add('visible');
      console.debug('scrolling up');
    }
  }

  @HostListener('window:resize', ['$event'])
  setScreenHeight(event: Event) {
    this.screenHeight = window.innerHeight;
  }
  toggleScroll() {
    document.querySelector('body')?.classList.toggle('noscroll');
  }

  public screenHeight: any;

  ngOnInit() {
    this.screenHeight = window.innerHeight;
  }
}
