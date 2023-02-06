import { GalleryModel } from "./gallery-model";

export interface OfferModel {
    id: number | null;
    title: string;
    imgAlt: string | null;
    name: string;
    photoOffset: number;
    offerParagraph: string[];
    spaceBetweenIndex: number;
    prize: string | null;
    additionalInfo: string[];
    gallery: GalleryModel | null;
  }