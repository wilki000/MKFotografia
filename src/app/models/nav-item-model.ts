export interface NavItemModel {
  displayName: string;
  path: string;
  last: boolean;
  subCategories: NavItemModel[] | null;
}

export const CATEGORIES: NavItemModel[] = [
  {
    displayName: 'Home',
    path: '/home',
    last: false,
    subCategories: null,
  },
  {
    displayName: 'Blog',
    path: '/blog',
    last: false,
    subCategories: null,
  },
  {
    displayName: 'Portfolio',
    path: '/portfolio',
    last: false,
    subCategories: null,
  },
  {
    displayName: 'Oferta',
    path: '',
    last: false,
    subCategories: [
      {
        displayName: 'Reportaż ślubny',
        path: '/offer/wedding-reportage',
        last: false,
        subCategories: null,
      },
      {
        displayName: 'Sesja ślubna/narzeczeńska',
        path: '/offer/engagement-wedding-session',
        last: false,
        subCategories: null,
      },
      {
        displayName: 'Chrzest',
        path: '/offer/christening',
        last: false,
        subCategories: null,
      },
      {
        displayName: 'Komunia',
        path: '/offer/communion',
        last: false,
        subCategories: null,
      },
      {
        displayName: 'Pełna oferta',
        path: '/offer',
        last: false,
        subCategories: null,
      },
    ],
  },
  {
    displayName: 'Warto wiedzieć',
    path: '/good-to-know',
    last: false,
    subCategories: null,
  },
  {
    displayName: 'Kontakt',
    path: '/contact',
    last: true,
    subCategories: null,
  },
];
