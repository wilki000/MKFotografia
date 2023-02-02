export interface GalleryModel {
  id: number;
  name: string;
  alt: string;
  photos: GalleryPhotoModel[];
}

export interface GalleryPhotoModel {
  id: number;
  alt: string;
  image: string;
}

export const GALLERY_MODEL: GalleryModel = {
  id: 1,
  name: 'aaa',
  alt: '',
  photos: [
    {
      id: 1,
      alt: '',
      image: 'assets/img/full-offer-1.jpg',
    },
    {
      id: 1,
      alt: '',
      image: 'assets/img/full-offer-5.jpg',
    },
    {
      id: 1,
      alt: '',
      image: 'assets/img/full-offer-1.jpg',
    },
    {
      id: 1,
      alt: '',
      image: 'assets/img/full-offer-5.jpg',
    },
    {
      id: 1,
      alt: '',
      image: 'assets/img/full-offer-1.jpg',
    },
    {
      id: 1,
      alt: '',
      image: 'assets/img/full-offer-5.jpg',
    },
    {
      id: 1,
      alt: '',
      image: 'assets/img/full-offer-1.jpg',
    },
    {
      id: 1,
      alt: '',
      image: 'assets/img/full-offer-5.jpg',
    },
    {
      id: 1,
      alt: '',
      image: 'assets/img/full-offer-1.jpg',
    },
    {
      id: 1,
      alt: '',
      image: 'assets/img/full-offer-5.jpg',
    },
    {
      id: 1,
      alt: '',
      image: 'assets/img/full-offer-1.jpg',
    },
    {
      id: 1,
      alt: '',
      image: 'assets/img/full-offer-5.jpg',
    },
  ],
};
