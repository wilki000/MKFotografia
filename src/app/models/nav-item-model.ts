export interface NavItemModel {
  displayName: string;
  path: string;
  last: boolean;
  navStyle: string;
  subCategories: NavItemModel[] | null;
}

export const CATEGORIES: NavItemModel[] = [
  {
    displayName: 'Home',
    path: '/home',
    last: false,
    navStyle: "white",
    subCategories: null,
  },
  {
    displayName: 'Blog',
    path: '/blog',
    last: false,
    navStyle: "black",
    subCategories: null,
  },
  {
    displayName: 'Portfolio',
    path: '/portfolio',
    last: false,
    navStyle: "black",
    subCategories: null,
  },
  {
    displayName: 'Oferta',
    path: '',
    last: false,
    navStyle: "black",
    subCategories: [
      {
        displayName: 'Reportaż ślubny',
        path: '/offer/wedding-reportage',
        last: false,
        navStyle: "black",
        subCategories: null,
      },
      {
        displayName: 'Sesja ślubna/narzeczeńska',
        path: '/offer/engagement-wedding-session',
        last: false,
        navStyle: "black",
        subCategories: null,
      },
      {
        displayName: 'Chrzest',
        path: '/offer/christening',
        last: false,
        navStyle: "black",
        subCategories: null,
      },
      {
        displayName: 'Komunia',
        path: '/offer/communion',
        last: false,
        navStyle: "black",
        subCategories: null,
      },
      {
        displayName: 'Pełna oferta',
        path: '/full-offer',
        last: false,
        navStyle: "black",
        subCategories: null,
      },
    ],
  },
  {
    displayName: 'Warto wiedzieć',
    path: '/qa',
    last: false,
    navStyle: "black",
    subCategories: null,
  },
  {
    displayName: 'Kontakt',
    path: '/contact',
    last: true,
    navStyle: "black",
    subCategories: null,
  },
];
