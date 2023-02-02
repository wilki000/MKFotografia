export interface OfferHomePageModel {
  image: string;
  alt: string;
  title: string;
  paragraphMobile: string;
  paragraphDesktop: string[];
  buttonURL: string;
  buttonText: string;
  visible?: boolean;
}

export const OFFER_HOME_PAGE: OfferHomePageModel[] = [
  {
    image: 'assets/img/slide-1.webp',
    alt: 'Młoda para całująca się w otoczeniu drzew.',
    title: 'Reportaż ślubny',
    paragraphMobile:
      'Staram się swoją obecnością z aparatem nie stresować pary młodej ani zaproszonych gości. Dzięki łatwości w nawiązywaniu kontaktów staram się sprawić aby wszyscy czuli się swobodnie i nie bali się obiektywu aparatu.',
    paragraphDesktop: [
      'Staram się swoją obecnością z aparatem nie stresować pary młodej ani zaproszonych gości. Dzięki łatwości w nawiązywaniu kontaktów oraz przyjemnej atmosferze jaką staram się wytworzyć podczas robienia zdjęć, staram się sprawić, aby wszyscy czuli się swobodnie i nie bali się obiektywu aparatu.',
      'Zrobię wszystko, aby uchwycić najbardziej wyjątkowe chwile. Nie tworzę scenariuszy i unikam nadmiernej ingerencji w to, co się dzieje, aby uchwycić piękno i spontaniczność wspaniałego wydarzenia, jakim jest ślub.',
      'Stworzę dla Was wyjątkową pamiątkę do której będziecie wracać z uśmiechem przez długie lata',
    ],
    buttonURL: '/offer/wedding-reportage',
    buttonText: 'REPORTAŻ ŚLUBNY',
  },
  {
    image: 'assets/img/slide-3.webp',
    alt: 'Pan młody trzymający pannę młodą w wodzie.',
    title: 'Sesja ślubna/narzeczeńska',
    paragraphMobile:
      'Jeśli marzy wam się historia pełna miłości i szaleństwa sesja, dobrze trafiliście! Potraktujcie ten czas jako randkę, tyle że w towarzystwie uśmiechniętej pani fotograf.',
    paragraphDesktop: [
      'Jeśli marzy wam się historia pełna miłości i szaleństwa sesja, dobrze trafiliście! Niech ta sesja stanie się dla Was ekscytującą przygodą. Potraktujcie ten czas jako randkę, tyle że w towarzystwie uśmiechniętej pani fotograf.',
      'Moje zdjęcia są naturalne i pełne emocji, co sprawia, że otrzymacie wyjątkową, ponadczasową pamiątkę, która będzie Was zachwycać przez długie lata. Nie tworzę sztucznych, niekomfortowych sytuacji i nie reżyseruję śmiesznych scen. Za to jestem otwarta na wasze pomysły, zależy mi na tym żeby jak najlepiej uchwycić dynamikę Waszej realcji.',
    ],
    buttonURL: '/offer/engagement-wedding-session',
    buttonText: 'SESJA ŚLUBNA/NARZECZEŃSKA',
  },
  {
    image: 'assets/img/offer-hp-4.jpg',
    alt: 'Ksiądz polewający główkę dziecka poświęconą wodą.',
    title: 'Chrzest',
    paragraphMobile:
      'Chrzest Święty to wydarzenie pełne wzruszeń i silnych emocji. Dla dziecka to także emocje, choć ono zazwyczaj tego nie pamięta. Właśnie dlatego tak ważne jest zachowanie dla niego tych wspomnień na zdjęciach.',
    paragraphDesktop: [
      'Chrzest Święty to wyjątkowe i niepowtarzalne wydarzenie w życiu każdej rodziny. Uroczystość jest pełna wzruszeń i silnych emocji, które towarzyszą młodym rodzicom  i rodzinie. Dla dziecka to także emocje, choć ono zazwyczaj tego nie pamięta.',
      'Właśnie dlatego tak ważne jest zachowanie dla niego tych wspomnień na zdjęciach. Dla Was, dla bliskich, a przede wszystkim dla Twojego maluszka.',
      'Fotografie z Chrztu Świętego to piękna pamiątka w postaci profesjonalnie wykonanych zdjęć. Dzięki temu te cudowne chwile zostaną z Wami na dłużej.',
    ],
    buttonURL: '/offer/christening',
    buttonText: 'CHRZEST',
  },
  {
    image: 'assets/img/offer-hp-3.jpg',
    alt: 'Dziewczynka w albie komunijniej na trawie.',
    title: 'Komunia',
    paragraphMobile:
      'Komunia Święta jest jednym z pierwszysch sakramentów, który dziecko przyjmuje w pełni świadomie. Tak piękny i wzniosły dzień wart jest do zapamiętania na całe życie.',
    paragraphDesktop: [
      'Dzieci przygotowują się do Komunii Świętej przez wiele miesięcy, jest to w końcu jeden z pierwszych sakramentów, który dziecko przyjmie w pełni świadomie. Tak piękny i wzniosły dzień wart jest do zapamiętania na całe życie.',
      'Fotografia Komunii Świętej jest pamiątką, która zostanie z Tobą na długie lata i pozwoli na odświeżenie pięknych wspomnień.',
      'Podczas wydarzenia takim jakim jest komunia zbiera się prawie cała rodzina, która chętnie pozuje do zdjęcia grupowego, co po latach pozwoli na wiele wspomnień i ułatwi rozpoznanie bliższej i dalszej rodziny.',
    ],
    buttonURL: '/offer/communion',
    buttonText: 'KOMUNIA',
  },
];
