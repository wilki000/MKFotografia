export interface PostModel {
  image: string;
  title: string;
  paragraph: string;
  buttonURL: string;
  alt: string;
}

export const BLOG: PostModel[] = [
  {
    image: 'assets/img/blog.jpg',
    title: 'Marcin & Kaja  | Gościniec Szlachecki | Białystok | 10.06.2020r. ',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip..."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...',
    buttonURL: '/offer/wedding-reportage',
    alt: '',
  },
];
