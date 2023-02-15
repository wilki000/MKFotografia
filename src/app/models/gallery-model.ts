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
  order: number;
}

export interface GalleryPhotoQueryModel {
  pageNumber: number;
  pageSize: number;
  galleryId: number;
  initial: number | null;
}

export interface GalleryQueryModel {
  pageNumber: number;
  pageSize: number;
}

export interface PostPhotoToGalleryModel {
  photo: File;
  order: number;
  alternativeText: string;
}
export interface PhotoOrderModel {
  id: number;
  order: number;
}
export interface PutPhotoOrdersModel {
  photoOrders: PhotoOrderModel[];
}