export interface FullOfferModel {
  image: string;
  title: string;
  teaser: string[];
  alt: string;
  relativeURL: string;
}

export const FULL_OFFER: FullOfferModel[] = [
  {
    image: 'assets/img/full-offer-1.jpg',
    title: 'Reportaż ślubny',
    teaser: [
      'Staram się swoją obecnością z aparatem nie stresować pary młodej ani zaproszonych gości. Dzięki łatwości w nawiązywaniu kontaktów oraz przyjemnej atmosferze jaką staram się wytworzyć podczas robienia zdjęć, staram się sprawić, aby wszyscy czuli się swobodnie i nie bali się obiektywu aparatu.',
    ],
    alt: '',
    relativeURL: 'wedding-reportage',
  },
  {
    image: 'assets/img/full-offer-2.jpg',
    title: 'Plener ślubny',
    teaser: [
      'Jeśli marzy wam się historia pełna miłości i szaleństwa sesja, dobrze trafiliście! Niech ta sesja stanie się dla Was ekscytującą przygodą. Potraktujcie ten czas jako randkę, tyle że w towarzystwie uśmiechniętej pani fotograf.',
    ],
    alt: '',
    relativeURL: 'engagement-wedding-session',
  },
  {
    image: 'assets/img/full-offer-3.jpg',
    title: 'Chrzest',
    teaser: [
      'Chrzest Święty to wyjątkowe i niepowtarzalne wydarzenie w życiu każdej rodziny. Uroczystość jest pełna wzruszeń i silnych emocji, które towarzyszą młodym rodzicom  i rodzinie. Dla dziecka to także emocje, choć ono zazwyczaj tego nie pamięta.',
    ],
    alt: '',
    relativeURL: 'christening',
  },
  {
    image: 'assets/img/full-offer-4.jpg',
    title: 'Komunia Święta',
    teaser: [
      'Dzieci przygotowują się do Komunii Świętej przez wiele miesięcy, jest to w końcu jeden z pierwszych sakramentów, który dziecko przyjmie w pełni świadomie. Tak piękny i wzniosły dzień wart jest do zapamiętania na całe życie.',
      'Fotografia Komunii Świętej jest pamiątką, która zostanie z Tobą na długie lata i pozwoli na odświeżenie pięknych wspomnień.',
    ],
    alt: '',
    relativeURL: 'communion',
  },
  {
    image: 'assets/img/full-offer-5.jpg',
    title: 'Sesje rodzinne',
    teaser: [
      'Dzieci rosną zdecydowanie za szybko. Dlatego sesja rodzinna może być sposobem na miłe spędzenie wspólnego czasu i cudowną pamiątkę dla Was i Waszych dzieci.',
      'Fotografia rodzinna wykonana przez doświadczonego fotografa to coś zupełnie innego niż zdjęcia robione telefonem. W czasie sesji możecie skupić się na sobie i po prostu cieszyć się chwilą - ja to uwiecznię.',
    ],
    alt: '',
    relativeURL: 'family',
  },
  {
    image: 'assets/img/full-offer-6.jpg',
    title: 'Sesja brzuszkowa',
    teaser: [
      'Ciąża to ten moment, gdy już wiesz, że za chwilę otworzysz drzwi do lepszego świata. Dla każdej przyszłej mamy ciąża to przepełniony emocjami czas oczekiwania.',
      'Najlepszy czas na wykonanie takich zdjęć to 6-7 miesiąc ciąży. Wtedy przyszłe mamy wyglądają pięknie, brzuszek mają ładnie zaokrąglony i emanują pozytywną energią.',
    ],
    alt: '',
    relativeURL: 'pregnancy',
  },
  {
    image: 'assets/img/full-offer-7.jpg',
    title: 'Sesje noworodkowe',
    teaser: [
      'Najlepszy czas na wykonanie sesji to dwa pierwsze tygodnie życia naszego Maluszka.',
      'W tym czasie dziecko wciąż jeszcze porusza i układa się tak, jak w brzuchu mamy. Będzie tak tylko przez krótki czas po pojawieniu się na świecie, więc warto zatrzymać te momenty na dłużej.',
    ],
    alt: '',
    relativeURL: 'newborn',
  },
  {
    image: 'assets/img/full-offer-8.jpg',
    title: 'Sesje niemowlęce',
    teaser: [
      'Okres kiedy dziecko stawia pierwsze kroki i zaczyna płatać pierwsze figle to czas wielu wrażeń i nowych emocji. Maluszek uczy się świata i przeżywa wielkie emocje, a jego opiekunowie podwójnie tyle ile ich mała pociecha.',
      'Warto zachować ten beztroski czas w kadrze i wracać do tych pięknych chwil, odkrywając te emocje na nowo.',
    ],
    alt: '',
    relativeURL: 'baby',
  },
  {
    image: 'assets/img/full-offer-9.jpg',
    title: 'Sesje urodzinowe',
    teaser: [
      'Pierwsze urodziny to świetna okazja na sesję zdjęciową. Wasze maleństwo czasami stawia już pierwsze kroki. Jest wesołe, uśmiechnięte i chętnie poznaje otoczenie.',
      'Pierwsze dwanaście miesięcy życia to prawdziwe bum rozwojowe, porównując zdjęcia z przed roku, sami będziecie zdziwieni jak wiele się przez ten czas zmieniło.',
    ],
    alt: '',
    relativeURL: 'birthday',
  },
];
