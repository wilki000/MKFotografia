export interface GalleryModel {
  id: number;
  name: string;
  displayName: string;
  photos: GalleryPhotoModel[];
}

export interface GalleryPhotoModel {
  id: number;
  alt: string;
  image: string;
}

export interface GalleryPhotoQueryModel {
  pageNumber: number;
  pageSize: number;
  galleryId: number;
  initial: number | null;
}

export const GALLERY_MODEL: GalleryModel = {
  id: 1,
  name: 'aaa',
  displayName: '',
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
