import { GalleryModel } from './gallery-model';

export interface PostModel {
  id: number;
  image: string;
  title: string;
  createdDate: string;
  postData: PostDataModel;
  alt: string;
  gallery: GalleryModel;
}

export interface PostDataModel {
  teaser: string;
  mainContent: string[];
}

export interface PostQueryModel {
  pageNumber: number;
  pageSize: number;
}

export interface PutPostModel {
  title: string | null;
  galleryId: number | null;
  alt: string | null;
  postData: PostDataModel;
  photo: File | null;
}
