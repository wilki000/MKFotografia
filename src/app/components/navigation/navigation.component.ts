import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NavItemModel, CATEGORIES } from '@models/nav-item-model';
import { filter, map, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  @ViewChild('checkbox') checkbox!: ElementRef;
  @ViewChild('navbar') navbar!: ElementRef;
  categories: NavItemModel[];
  scrollPosition: number = 0;
  styleSubscription!: Subscription;
  currentStyle!: string;
  public screenHeight: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.categories = CATEGORIES;
  }
  restartCheckedState() {
    this.checkbox.nativeElement.checked = false;
    this.checkbox.nativeElement.classList.remove('has-checked');
    this.checkbox.nativeElement.classList.add('has-checked');
    document.querySelector('body')?.classList.remove('noscroll');
  }
  @HostListener('window:scroll', ['$event'])
  setScrollPosition(event: MouseEvent) {
    const oldPosition = this.scrollPosition;
    this.scrollPosition = window.pageYOffset;
    if (oldPosition < this.scrollPosition) {
      this.navbar.nativeElement.classList.remove('visible');
      this.navbar.nativeElement.classList.add('hidden');
    } else {
      this.navbar.nativeElement.classList.remove('hidden');
      this.navbar.nativeElement.classList.add('visible');
    }
  }

  @HostListener('window:resize', ['$event'])
  setScreenHeight(event: Event) {
    this.screenHeight = window.innerHeight;
  }
  toggleScroll() {
    document.querySelector('body')?.classList.toggle('noscroll');
  }

  ngOnInit() {
    this.styleSubscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => route.firstChild),
        switchMap((route) => route!.data),
        map((data) => data['style'])
      )
      .subscribe((style) => (this.currentStyle = style));
    this.screenHeight = window.innerHeight;
  }
  ngOnDestroy() {
    this.styleSubscription.unsubscribe();
  }
}
