export interface SliderPhotoModel {
  image: string;
  title: string;
  subtitle: string;
  alt: string;
  photoStyle?: { [klass: string]: any };
  textStyle?: { [klass: string]: any };
}

export const SLIDER_PHOTOS: SliderPhotoModel[] = [
  {
    image: 'assets/img/slide-1.webp',
    title: 'Naturalna Fotografia Ślubna',
    subtitle:
      'Profesjonalna oprawa fotograficzna najważniejszego dnia w Waszym życiu.',
    alt: 'Młoda para całująca się w otoczeniu drzew.',
  },
  {
    image: 'assets/img/slide-2.jpg',
    title: 'Fotografia Weselna',
    subtitle: 'Szczere i autentyczne zdjęcia będą pamiątką na lata.',
    alt: 'Tańcząca para młoda.',
  },
  {
    image: 'assets/img/slide-3.webp',
    title: 'Profesjonalny Reportaż Ślubny',
    subtitle: 'Wyjątkowe zdjęcia z najważniejszych chwil w Waszym życiu.',
    alt: 'Pan młody trzymający pannę młodą w wodzie.',
  },
  {
    image: 'assets/img/slide-4.jpg',
    title: 'Fotografia Weselna',
    subtitle: 'Szczere i autentyczne zdjęcia będą pamiątką na lata.',
    alt: 'Tańcząca para młoda.',
  },
  {
    image: 'assets/img/slide-5.jpg',
    title: 'Fotografia Weselna',
    subtitle: 'Szczere i autentyczne zdjęcia będą pamiątką na lata.',
    alt: 'Tańcząca para młoda.',
  },
  {
    image: 'assets/img/slide-6.jpg',
    title: 'Fotografia Weselna',
    subtitle: 'Szczere i autentyczne zdjęcia będą pamiątką na lata.',
    alt: 'Tańcząca para młoda.',
  }
];
