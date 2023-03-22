import { GalleryModel } from './gallery-model';

export interface SingleOfferPageModel {
  id?: number;
  pageImage?: string;
  photoOffset?: number;
  pageImgAlt?: string;
  title?: string;
  mainParagraph: string;
  offerParagraph?: string[];
  spaceBetweenIndex?: number;
  price?: string | null;
  additionalInfo?: string[];
  gallery?: GalleryModel;
  metaTitle: string;
  metaDescription: string;
}

export interface PutPageOfferModel {
  title: string | null;
  pageImg: File | null;
  pageImgAlt: string | null;
  photoOffset: number | null;
  offerParagraph: string[] | null;
  spaceBetweenIndex: number | null;
  price: number | null;
  additionalInfo: string[] | null;
  galleryId: number | null;
}

export const SINGLE_OFFER_PAGE: { [name: string]: SingleOfferPageModel } = {
  'offer/wedding-reportage': {
    mainParagraph:
      'Naturalne zdjęcia ślubne ukazują chwile, szczegóły i uczucia, które trudno dostrzec, spojrzenie, pewne gesty, wzruszenie. Ślub to tak wyjątkowy dzień w życiu, że każdy chce go uwiecznić w jak najlepszy sposób, ja to potrafię. <br /><br /> Uwiecznię Wasze przygotowania, ceremonię oraz przyjęcie do ok. 1 w nocy (do oczepin). Za pomocą aparatu chwytam te wszystkie chwile, które będziecie przeżywać. Będę Wam towarzyszyła w sposób dyskretny, nie pozwalając jednak na umknięcie niczego ważnego. <br /><br /> <b>Oferta Fotografia Ślubna zawiera: </b><br />•	Reportaż ślubny <br />•	Sesja narzeczeńska <br />•	Sesja plenerowa ślubna',
    metaTitle: 'Oferta Fotografii Ślubnej ❤️ | Magia Chwili Fotografia',
    metaDescription:
      'Profesjonalny fotograf ślubny na Twoim weselu. ✔️ Powiedz czego potrzebujesz i poznaj dopasowaną ofertę. Zdjęcia w wysokiej jakości i dobrej cenie. Grajewo, Podlasie, Mazury',
  },
  'offer/engagement-wedding-session': {
    mainParagraph:
      'Okres narzeczeństwa i ślubu to niezwykły czas miłości dzielonej między dwojgiem zakochanych ludzi. Warto uwiecznić te ciepłe spojrzenia, czułe uściski dłoni, tę radość przed planowanym powiedzeniem sobie „TAK”. <br /><br>Sesja narzeczeńska to okazja do świetnej zabawy w formie randki, gdzie towarzyszę Wam i dokumentuję Wasze uczucie.<br /><br />Takie sesje odbywają się zazwyczaj w otoczeniu natury - w plenerze. Jestem jednak otwarta na propozycje, wybiorę się z Wami tam gdzie czujecie się najlepiej. Jeżeli nie macie pomysłu na miejsce w którym mogłaby się odbyć sesja, nie martwcie się - pomogę Wam wybrać najlepsze miejsce.',
    metaTitle: 'Oferta Sesja Ślubna Narzeczeńska ❤️ | Magia Chwili Fotografia',
    metaDescription:
      'Uchwyć swoją historię miłosną w naturalnych fotografiach. Powiedz czego potrzebujesz i poznaj dopasowaną ofertę. Dobra cena. Grajewo, Podlasie, Mazury',
  },
  'offer/christening': {
    mainParagraph:
      'Chrzest Święty to wyjątkowe i niepowtarzalne wydarzenie w życiu każdej rodziny. Uroczystość jest pełna wzruszeń i silnych emocji, które towarzyszą młodym rodzicom  i rodzinie. Ten wyjątkowy dzień nie powtórzy się już nigdy i na pewno zasługuje na uwiecznienie na zdjęciach. <br /><br />Warto te momenty zatrzymać na wieczność w pięknych fotografiach, które przez lata będą wspaniałą pamiątką tego radosnego dnia. <br /><br />Sesja Chrztu Świętego to zdjęcia reportażowe wykonane podczas przygotowań do ceremonii oraz uroczystości w kościele a także portrety z rodzicami i gośćmi po uroczystości.',
    metaTitle: 'Oferta Chrzciny | Magia Chwili Fotografia',
    metaDescription:
      'Szukasz profesjonalnego fotografa na chrzciny swojego dziecka? Dobrze trafiłeś ✔️ Poznaj ofertę i dopasujmy ją do Twoich potrzeb. Grajewo, Podlasie, Mazury',
  },
  'offer/communion': {
    mainParagraph:
      'Komunia Święta to pierwsza tak ważna i świadoma uroczystość w życiu dziecka, w której towarzyszy mu cała jego rodzina. Przyjęcie komunii świętej to wielkie wydarzenie,  dziecko świadomie dołącza do wspólnoty i po raz pierwszy w pełni może uczestniczyć w Eucharystii przyjmując ciało i krew Chrystusa.<br /><br />Jeśli szukasz fotografa na uroczystość Pierwszej Komunii Świętej w Grajewie bądź okolicach to dobrze trafiłeś! Pamiątka Komunii Świętej to jedna z najważniejszych w życiu naszych małych pociech. <br /><br /><b>Pakiet reportażowy</b> zaczyna się przeważnie podczas ubierania Waszego dziecka do uroczystości, następnie przez sakrament po zdjęcia z najbliższymi, aż do składania życzeń na sali oraz sesji z rodzicami, chrzestnymi oraz resztą rodziny.<br /><br /><b>Sesja Komunijna</b> jest to zazwyczaj sesja plenerowa wykonana w dniu komunii lub białym tygodniu.',
    metaTitle: 'Oferta Komunia | Magia Chwili Fotografia',
    metaDescription:
      'Szukasz profesjonalnego fotografa na komunię swojego dziecka? Dobrze trafiłeś ✔️ Poznaj ofertę i dopasujmy ją do Twoich potrzeb. Grajewo, Podlasie, Mazury',
  },
  'offer/family': {
    mainParagraph:
      'Sami często robimy sobie zdjęcia nawzajem, ale skutkiem tego na naszych fotografiach zawsze kogoś brakuje. Gdy robisz zdjęcie swojej rodzinie - to Ciebie będzie brakować na zdjęciu. Fotografia rodzinna pozwala Wam skupić się na sobie. W kadrze chcę zatrzymać dla Was autentyczne i szczere i niezapozowane emocje, które po latach będą wywoływać takie same wzruszenie.<br /><br />Sesja rodzinna ma zazwyczaj charakter reportażu, fotografuję to co się dzieje. Staram się uchwycić rodzinę podczas wspólnej zabawy.<br /><br />Fotografie w plenerze odbywają się zazwyczaj latem, a w zaciszu studio w okresie zimowym. Istnieje możliwość wykonania sesji u Was w domu - jeżeli tam czujecie się najlepiej.',
    metaTitle: 'Oferta Sesje Rodzinne | Magia Chwili Fotografia',
    metaDescription:
      'Naturalna fotografia rodzina, sesje rodzinne wykonane przez profesjonalnego fotografa. Poznaj ofertę i dopasujmy ją do Twoich potrzeb. Grajewo, Podlasie, Mazury',
  },
  'offer/pregnancy': {
    mainParagraph:
      'Ciąża to ten moment, gdy już wiesz, że za chwilę otworzysz drzwi do lepszego świata.<br /><br />Dla każdej przyszłej mamy ciąża to przepełniony emocjami czas oczekiwania.<b> Najlepszy czas na wykonanie takich zdjęć to 6-7 miesiąc ciąży.</b> Wtedy przyszłe mamy wyglądają pięknie, brzuszek mają ładnie zaokrąglony i emanują pozytywną energią.<br /><br />Sesje z przyszłą mamą zawsze realizowane są według jej oczekiwań. Mogą one odbywać się zarówno w plenerze jak i w studiu lub domu.<br /><br />Zdjęcia mogą odbyć się z partnerem i starczym dzieckiem/dziećmi.<br /><br />Jeśli marzysz również o sesji z dzieckiem po narodzinach przygotowałam dla Ciebie specjalny pakiet "brzuszek + maluszek" w atrakcyjnej cenie.',
    metaTitle: 'Oferta Sesja Brzuszkowa | Magia Chwili Fotografia',
    metaDescription:
      'Naturalna fotografia ciążowa, sesja ciążowa wykonana przez profesjonalnego fotografa. Poznaj ofertę i dopasujmy ją do Twoich potrzeb. Grajewo, Podlasie, Mazury',
  },
  'offer/newborn': {
    mainParagraph:
      'Sesja dziecka po urodzeniu to najlepsza pamiątka, jaką możemy sprawić sobie i naszym najbliższym. Na zdjęciach możemy zatrzymać ten wspaniały czas, maleńkość i cud nowego życia.<br /><br />Gdy maluszek pojawia się w Waszym życiu, towarzyszą Wam przeróżne emocje. Bezgraniczna miłość, oszołomienie, często trochę bezradności, ale też poczucie, że od teraz już zawsze będziecie razem.<br /><br />Najlepszy czas na wykonanie sesji to <b>dwa pierwsze tygodnie życia</b> naszego Maluszka. W tym czasie dziecko wciąż jeszcze porusza i układa się tak, jak w brzuchu mamy. Będzie tak tylko przez krótki czas po pojawieniu się na świecie, więc warto zatrzymać te momenty na dłużej.<br /><br />Sesję możemy wykonać w studio (zdjęcia stylizowane oraz live style) lub w Waszym domu (sypialni , salonie) zdjęcia Live Style (niepozowane na rękach u rodzicach w naturalnych pozach).',
    metaTitle: 'Oferta Sesje Noworodkowe | Magia Chwili Fotografia',
    metaDescription:
      'Naturalna fotografia noworodkowa, sesja dla maluszka wykonana przez profesjonalnego fotografa. Poznaj ofertę i dopasujmy ją do Twoich potrzeb. Grajewo, Podlasie, Mazury',
  },
  'offer/baby': {
    mainParagraph:
      'Okres kiedy dziecko stawia pierwsze kroki i zaczyna płatać pierwsze figle to czas wielu wrażeń i nowych emocji. Maluszek uczy się świata i przeżywa wielkie emocje, a jego opiekunowie podwójnie tyle ile ich mała pociecha.<br /><br />Warto zachować ten beztroski czas w kadrze i wracać do tych pięknych chwil, odkrywając te emocje na nowo. Dzieci są bardzo wdzięcznym, ale też trudnym tematem fotografii. Rodzicom zależy żeby ich pociechy były na zdjęciach takie jak widzą je na co dzień - radosne, zafascynowane światem, ufne i niewinne. Do tego potrzebny jest profesjonalny fotograf, który zapewni komfort i bezpieczną atmosferę.<br /><br />Sesje niemowlęce odbywają się w plenerze lub w zaciszu studio lub Twojego domu - tam gdzie maluch czuje się najlepiej. ',
    metaTitle: 'Oferta Sesje Niemowlęce | Magia Chwili Fotografia',
    metaDescription:
      'Naturalna fotografia niemowlęca, sesja dla maluszka wykonana przez profesjonalnego fotografa. Poznaj ofertę i dopasujmy ją do Twoich potrzeb. Grajewo, Podlasie, Mazury',
  },
  'offer/birthday': {
    mainParagraph:
      'Pierwsze urodziny to świetna okazja na sesję zdjęciową. Wasze maleństwo czasmi stawia już pierwsze kroki. Jest wesołe, uśmiechnięte i chętnie poznaje otoczenie.<br /><br />Pierwsze dwanaście miesięcy życia to prawdziwe bum rozwojowe, porównując zdjęcia z przed roku, sami będziecie zdziwieni jak wiele się przez ten czas zmieniło.<br /><br />Mimo że sesja roczkowa ma swojego głównego bohatera, serdecznie zapraszam do udziału całą rodzinę. Najbardziej lubię fotografować więzi i relacje. To dla mnie ogromna przyjemność i zaszczyt, że mogę uwiecznić na zdjęciach radość całej rodziny z pierwszych urodzin najmłodszego członka.<br /><br />Sesja w plenerze to chyba mój ulubiony sposób na sesję roczkową. Otoczenie przyrody daje nam bardzo dużą różnorodność kadrów.',
    metaTitle: 'Oferta Sesje Urodzinowe | Magia Chwili Fotografia',
    metaDescription:
      'Naturalna fotografia, sesje wykonane przez profesjonalnego fotografa. Poznaj ofertę i dopasujmy ją do Twoich potrzeb. Grajewo, Podlasie, Mazury',
  },
};
