export interface SliderPhotoModel {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  alternativeText: string;
  order: number;
  photoStyle?: { [klass: string]: any };
  textStyle?: { [klass: string]: any };
}

export interface PutPhotoModel {
  photo: File;
  alternativeText: string;
}

