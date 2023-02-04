import { GalleryModel, GALLERY_MODEL } from "./gallery-model";

export interface PostModel {
  image: string;
  titleShort: string;
  title: string;
  //paragraph: string[];
  postData: PostDataModel;
  buttonURL: string;
  alt: string;
  gallery: GalleryModel;
}

export interface PostDataModel {
  teaser: string;
  mainContent: string[];
}

export const BLOG: PostModel[] = [
  {
    image: 'assets/img/blog.jpg',
    titleShort: 'Monika & Przemek',
    title: 'Monika & Przemek | Dworek Victoria | Grajewo | 10.06.2020r.',
    postData: {
      teaser : 'Wesele Moniki i Przemka w Dworku Victoria w Grajewie było pięknym wydarzeniem, które zostanie w pamięci na długie lata. Nowożeńcy otoczeni byli wspaniałymi gośćmi, którzy dzielili się swoją radością i świętowali z mnóstwem śmiechu. Współpraca między Parą Młodą a wszystkimi osobami zaangażowanymi w perfekcyjne uświetnienie dnia ślubu układała się znakomicie. To był dzień pełen naturalności i miłych wspomnień, które zostaną z nami na zawsze.',
      mainContent: ['Wesele Moniki i Przemka w Dworku Victoria w Grajewie było pięknym wydarzeniem, które zostanie w pamięci na długie lata. Nowożeńcy otoczeni byli wspaniałymi gośćmi, którzy dzielili się swoją radością i świętowali z mnóstwem śmiechu. Współpraca między Parą Młodą a wszystkimi osobami zaangażowanymi w perfekcyjne uświetnienie dnia ślubu układała się znakomicie. To był dzień pełen naturalności i miłych wspomnień, które zostaną z nami na zawsze.','To był niesamowity dzień pełen radości i miłości, a dzięki współpracy z ich fotografem stał się jeszcze bardziej wyjątkowy. Zdjęcia zrobione tego dnia będą trwałą pamiątką tego wyjątkowego dnia i będą pamiątką Moniki, Przemka i ich rodzin na długie lata.', 'Ślub Moniki i Przemka z pewnością zostanie zapamiętany na długie lata jako jeden z najpiękniejszych ślubów, jakie kiedykolwiek widzieliśmy!', 'Mamy przyjemność zaprosić Was na wirtualny spacer po ślubie Moniki i Przemka w Dworku Victoria w Grajewie! Dzięki temu fotoreportażowi uzyskasz wgląd w ich wyjątkowy dzień i wszystkie chwile, które uczyniły go tak unikalnym. Mamy nadzieję, że oglądanie tych zdjęć sprawi Ci tyle samo radości, co mi ich robienie.'],
    },
    buttonURL: '',
    alt: '',
    gallery: GALLERY_MODEL,
  },
];
