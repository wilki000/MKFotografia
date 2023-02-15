export interface FullOfferModel {
  id?: number;
  pageImage?: string;
  title?: string;
  teaser: string[];
  pageImgAlt?: string;
  relativeURL: string;
}

export const FULL_OFFER: FullOfferModel[] = [
  {
    teaser: [
      'Staram się swoją obecnością z aparatem nie stresować pary młodej ani zaproszonych gości. Dzięki łatwości w nawiązywaniu kontaktów oraz przyjemnej atmosferze jaką staram się wytworzyć podczas robienia zdjęć, staram się sprawić, aby wszyscy czuli się swobodnie i nie bali się obiektywu aparatu.',
    ],
    relativeURL: 'wedding-reportage',
  },
  {
    teaser: [
      'Jeśli marzy wam się historia pełna miłości i szaleństwa sesja, dobrze trafiliście! Niech ta sesja stanie się dla Was ekscytującą przygodą. Potraktujcie ten czas jako randkę, tyle że w towarzystwie uśmiechniętej pani fotograf.',
    ],
    relativeURL: 'engagement-wedding-session',
  },
  {
    teaser: [
      'Chrzest Święty to wyjątkowe i niepowtarzalne wydarzenie w życiu każdej rodziny. Uroczystość jest pełna wzruszeń i silnych emocji, które towarzyszą młodym rodzicom  i rodzinie. Dla dziecka to także emocje, choć ono zazwyczaj tego nie pamięta.',
    ],
    relativeURL: 'christening',
  },
  {
    teaser: [
      'Dzieci przygotowują się do Komunii Świętej przez wiele miesięcy, jest to w końcu jeden z pierwszych sakramentów, który dziecko przyjmie w pełni świadomie. Tak piękny i wzniosły dzień wart jest do zapamiętania na całe życie.',
      'Fotografia Komunii Świętej jest pamiątką, która zostanie z Tobą na długie lata i pozwoli na odświeżenie pięknych wspomnień.',
    ],
    relativeURL: 'communion',
  },
  {
    teaser: [
      'Dzieci rosną zdecydowanie za szybko. Dlatego sesja rodzinna może być sposobem na miłe spędzenie wspólnego czasu i cudowną pamiątkę dla Was i Waszych dzieci.',
      'Fotografia rodzinna wykonana przez doświadczonego fotografa to coś zupełnie innego niż zdjęcia robione telefonem. W czasie sesji możecie skupić się na sobie i po prostu cieszyć się chwilą - ja to uwiecznię.',
    ],
    relativeURL: 'family',
  },
  {
    teaser: [
      'Ciąża to ten moment, gdy już wiesz, że za chwilę otworzysz drzwi do lepszego świata. Dla każdej przyszłej mamy ciąża to przepełniony emocjami czas oczekiwania.',
      'Najlepszy czas na wykonanie takich zdjęć to 6-7 miesiąc ciąży. Wtedy przyszłe mamy wyglądają pięknie, brzuszek mają ładnie zaokrąglony i emanują pozytywną energią.',
    ],
    relativeURL: 'pregnancy',
  },
  {
    teaser: [
      'Najlepszy czas na wykonanie sesji to dwa pierwsze tygodnie życia naszego Maluszka.',
      'W tym czasie dziecko wciąż jeszcze porusza i układa się tak, jak w brzuchu mamy. Będzie tak tylko przez krótki czas po pojawieniu się na świecie, więc warto zatrzymać te momenty na dłużej.',
    ],
    relativeURL: 'newborn',
  },
  {
    teaser: [
      'Okres kiedy dziecko stawia pierwsze kroki i zaczyna płatać pierwsze figle to czas wielu wrażeń i nowych emocji. Maluszek uczy się świata i przeżywa wielkie emocje, a jego opiekunowie podwójnie tyle ile ich mała pociecha.',
      'Warto zachować ten beztroski czas w kadrze i wracać do tych pięknych chwil, odkrywając te emocje na nowo.',
    ],
    relativeURL: 'baby',
  },
  {
    teaser: [
      'Pierwsze urodziny to świetna okazja na sesję zdjęciową. Wasze maleństwo czasami stawia już pierwsze kroki. Jest wesołe, uśmiechnięte i chętnie poznaje otoczenie.',
      'Pierwsze dwanaście miesięcy życia to prawdziwe bum rozwojowe, porównując zdjęcia z przed roku, sami będziecie zdziwieni jak wiele się przez ten czas zmieniło.',
    ],
    relativeURL: 'birthday',
  },
];
