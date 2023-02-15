import { GalleryModel } from "./gallery-model";

export interface OfferModel {
    id: number | null;
    title: string;
    homeImgAlt: string | null;
    pageImgAlt: string | null;
    name: string;
    photoOffset: number;
    offerParagraph: string[];
    spaceBetweenIndex: number;
    price: string | null;
    additionalInfo: string[];
    gallery: GalleryModel | null;
  }