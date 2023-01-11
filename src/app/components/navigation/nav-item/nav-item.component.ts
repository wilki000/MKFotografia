import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  HostListener,
  AfterViewInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { NavItemModel } from '@models/nav-item-model';
import { filter, map, Subscription, switchMap } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() mainCategory!: NavItemModel;
  @Output() routeEvent = new EventEmitter<void>();

  subcategories!: HTMLElement;
  category!: HTMLElement;
  styleSubscription!: Subscription;
  currentStyle!: string;

  hasSubcategories!: boolean;
  constructor(private renderer: Renderer2, private elem: ElementRef, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.hasSubcategories = this.mainCategory.subCategories != null;
    this.styleSubscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => route.firstChild),
        switchMap((route) => route!.data),
        map((data) => data['style'])
      )
      .subscribe((style) => (this.currentStyle = style));
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

  ngOnDestroy() {
    this.styleSubscription.unsubscribe();
  }
}
