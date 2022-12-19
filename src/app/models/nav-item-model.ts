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
    path: '/offer',
    last: false,
    subCategories: [
      {
        displayName: 'Reportaż ślubny',
        path: '/wedding-reportage',
        last: false,
        subCategories: null,
      },
      {
        displayName: 'Sesja ślubna/narzeczeńska',
        path: '/engagement-wedding-session',
        last: false,
        subCategories: null,
      },
      {
        displayName: 'Chrzest',
        path: '/christening',
        last: false,
        subCategories: null,
      },
      {
        displayName: 'Komunia',
        path: '/communion',
        last: false,
        subCategories: null,
      },
      {
        displayName: 'Pełna oferta',
        path: '/full-offer',
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
