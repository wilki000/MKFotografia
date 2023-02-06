import { GalleryModel } from "./gallery-model";

export interface SingleOfferPageModel {
  id?: number;
  pageImage?: string;
  photoOffset?: number;
  imgAlt?: string;
  title?: string;
  mainParagraph: string;
  offerParagraph?: string[];
  spaceBetweenIndex?: number;
  price?: string | null;
  additionalInfo?: string[];
  gallery?: GalleryModel;
}

export const SINGLE_OFFER_PAGE: {[name: string]: SingleOfferPageModel} = {
  "offer/wedding-reportage": {
    mainParagraph:
      'Naturalne zdjęcia ślubne ukazują chwile, szczegóły i uczucia, które trudno dostrzec, spojrzenie, pewne gesty, wzruszenie. Ślub to tak wyjątkowy dzień w życiu, że każdy chce go uwiecznić w jak najlepszy sposób, ja to potrafię. <br /><br /> Uwiecznię Wasze przygotowania, ceremonię oraz przyjęcie do ok. 1 w nocy (do oczepin). Za pomocą aparatu chwytam te wszystkie chwile, które będziecie przeżywać. Będę Wam towarzyszyła w sposób dyskretny, nie pozwalając jednak na umknięcie niczego ważnego. <br /><br /> <b>Oferta Fotografia Ślubna zawiera: </b><br />•	Reportaż ślubny <br />•	Sesja narzeczeńska <br />•	Sesja plenerowa ślubna',
  },
  "offer/engagement-wedding-session": {
    mainParagraph:
      'Okres narzeczeństwa i ślubu to niezwykły czas miłości dzielonej między dwojgiem zakochanych ludzi. Warto uwiecznić te ciepłe spojrzenia, czułe uściski dłoni, tę radość przed planowanym powiedzeniem sobie „TAK”. <br /><br>Sesja narzeczeńska to okazja do świetnej zabawy w formie randki, gdzie towarzyszę Wam i dokumentuję Wasze uczucie.<br /><br />Takie sesje odbywają się zazwyczaj w otoczeniu natury - w plenerze. Jestem jednak otwarta na propozycje, wybiorę się z Wami tam gdzie czujecie się najlepiej. Jeżeli nie macie pomysłu na miejsce w którym mogłaby się odbyć sesja, nie martwcie się - pomogę Wam wybrać najlepsze miejsce.',
  },
  "offer/christening": {
    mainParagraph:
      'Chrzest Święty to wyjątkowe i niepowtarzalne wydarzenie w życiu każdej rodziny. Uroczystość jest pełna wzruszeń i silnych emocji, które towarzyszą młodym rodzicom  i rodzinie. Ten wyjątkowy dzień nie powtórzy się już nigdy i na pewno zasługuje na uwiecznienie na zdjęciach. <br /><br />Warto te momenty zatrzymać na wieczność w pięknych fotografiach, które przez lata będą wspaniałą pamiątką tego radosnego dnia. <br /><br />Sesja Chrztu Świętego to zdjęcia reportażowe wykonane podczas przygotowań do ceremonii oraz uroczystości w kościele a także portrety z rodzicami i gośćmi po uroczystości.',
  },
  "offer/communion": {
    mainParagraph:
      'Komunia Święta to pierwsza tak ważna i świadoma uroczystość w życiu dziecka, w której towarzyszy mu cała jego rodzina. Przyjęcie komunii świętej to wielkie wydarzenie,  dziecko świadomie dołącza do wspólnoty i po raz pierwszy w pełni może uczestniczyć w Eucharystii przyjmując ciało i krew Chrystusa.<br /><br />Jeśli szukasz fotografa na uroczystość Pierwszej Komunii Świętej w Grajewie bądź okolicach to dobrze trafiłeś! Pamiątka Komunii Świętej to jedna z najważniejszych w życiu naszych małych pociech. <br /><br /><b>Pakiet reportażowy</b> zaczyna się przeważnie podczas ubierania Waszego dziecka do uroczystości, następnie przez sakrament po zdjęcia z najbliższymi, aż do składania życzeń na sali oraz sesji z rodzicami, chrzestnymi oraz resztą rodziny.<br /><br /><b>Sesja Komunijna</b> jest to zazwyczaj sesja plenerowa wykonana w dniu komunii lub białym tygodniu.',
  },
  "offer/family": {
    mainParagraph:
      'Sami często robimy sobie zdjęcia nawzajem, ale skutkiem tego na naszych fotografiach zawsze kogoś brakuje. Gdy robisz zdjęcie swojej rodzinie - to Ciebie będzie brakować na zdjęciu. Fotografia rodzinna pozwala Wam skupić się na sobie. W kadrze chcę zatrzymać dla Was autentyczne i szczere i niezapozowane emocje, które po latach będą wywoływać takie same wzruszenie.<br /><br />Sesja rodzinna ma zazwyczaj charakter reportażu, fotografuję to co się dzieje. Staram się uchwycić rodzinę podczas wspólnej zabawy.<br /><br />Fotografie w plenerze odbywają się zazwyczaj latem, a w zaciszu studio w okresie zimowym. Istnieje możliwość wykonania sesji u Was w domu - jeżeli tam czujecie się najlepiej.',
  },
  "offer/pregnancy": {
    mainParagraph:
      'Ciąża to ten moment, gdy już wiesz, że za chwilę otworzysz drzwi do lepszego świata.<br /><br />Dla każdej przyszłej mamy ciąża to przepełniony emocjami czas oczekiwania.<b> Najlepszy czas na wykonanie takich zdjęć to 6-7 miesiąc ciąży.</b> Wtedy przyszłe mamy wyglądają pięknie, brzuszek mają ładnie zaokrąglony i emanują pozytywną energią.<br /><br />Sesje z przyszłą mamą zawsze realizowane są według jej oczekiwań. Mogą one odbywać się zarówno w plenerze jak i w studiu lub domu.<br /><br />Zdjęcia mogą odbyć się z partnerem i starczym dzieckiem/dziećmi.<br /><br />Jeśli marzysz również o sesji z dzieckiem po narodzinach przygotowałam dla Ciebie specjalny pakiet "brzuszek + maluszek" w atrakcyjnej cenie.',
    
  },
  "offer/newborn": {
    mainParagraph:
      'Sesja dziecka po urodzeniu to najlepsza pamiątka, jaką możemy sprawić sobie i naszym najbliższym. Na zdjęciach możemy zatrzymać ten wspaniały czas, maleńkość i cud nowego życia.<br /><br />Gdy maluszek pojawia się w Waszym życiu, towarzyszą Wam przeróżne emocje. Bezgraniczna miłość, oszołomienie, często trochę bezradności, ale też poczucie, że od teraz już zawsze będziecie razem.<br /><br />Najlepszy czas na wykonanie sesji to <b>dwa pierwsze tygodnie życia</b> naszego Maluszka. W tym czasie dziecko wciąż jeszcze porusza i układa się tak, jak w brzuchu mamy. Będzie tak tylko przez krótki czas po pojawieniu się na świecie, więc warto zatrzymać te momenty na dłużej.<br /><br />Sesję możemy wykonać w studio (zdjęcia stylizowane oraz live style) lub w Waszym domu (sypialni , salonie) zdjęcia Live Style (niepozowane na rękach u rodzicach w naturalnych pozach).',
    
  },
  "offer/baby": {
    mainParagraph:
      'Okres kiedy dziecko stawia pierwsze kroki i zaczyna płatać pierwsze figle to czas wielu wrażeń i nowych emocji. Maluszek uczy się świata i przeżywa wielkie emocje, a jego opiekunowie podwójnie tyle ile ich mała pociecha.<br /><br />Warto zachować ten beztroski czas w kadrze i wracać do tych pięknych chwil, odkrywając te emocje na nowo. Dzieci są bardzo wdzięcznym, ale też trudnym tematem fotografii. Rodzicom zależy żeby ich pociechy były na zdjęciach takie jak widzą je na co dzień - radosne, zafascynowane światem, ufne i niewinne. Do tego potrzebny jest profesjonalny fotograf, który zapewni komfort i bezpieczną atmosferę.<br /><br />Sesje niemowlęce odbywają się w plenerze lub w zaciszu studio lub Twojego domu - tam gdzie maluch czuje się najlepiej. ',
  },
  "offer/birthday": {
    mainParagraph:
      'Pierwsze urodziny to świetna okazja na sesję zdjęciową. Wasze maleństwo czasmi stawia już pierwsze kroki. Jest wesołe, uśmiechnięte i chętnie poznaje otoczenie.<br /><br />Pierwsze dwanaście miesięcy życia to prawdziwe bum rozwojowe, porównując zdjęcia z przed roku, sami będziecie zdziwieni jak wiele się przez ten czas zmieniło.<br /><br />Mimo że sesja roczkowa ma swojego głównego bohatera, serdecznie zapraszam do udziału całą rodzinę. Najbardziej lubię fotografować więzi i relacje. To dla mnie ogromna przyjemność i zaszczyt, że mogę uwiecznić na zdjęciach radość całej rodziny z pierwszych urodzin najmłodszego członka.<br /><br />Sesja w plenerze to chyba mój ulubiony sposób na sesję roczkową. Otoczenie przyrody daje nam bardzo dużą różnorodność kadrów.',
    
  },
};



// export const SINGLE_OFFER_PAGE: SingleOfferPageModel[] = [
//   {
    
//     image: 'assets/img/full-offer-1.jpg',
//     photoOffset: 55,
//     title: 'Reportaż ślubny',
//     mainParagraph:
//       'Naturalne zdjęcia ślubne ukazują chwile, szczegóły i uczucia, które trudno dostrzec, spojrzenie, pewne gesty, wzruszenie. Ślub to tak wyjątkowy dzień w życiu, że każdy chce go uwiecznić w jak najlepszy sposób, ja to potrafię. <br /><br /> Uwiecznię Wasze przygotowania, ceremonię oraz przyjęcie do ok. 1 w nocy (do oczepin). Za pomocą aparatu chwytam te wszystkie chwile, które będziecie przeżywać. Będę Wam towarzyszyła w sposób dyskretny, nie pozwalając jednak na umknięcie niczego ważnego. <br /><br /> <b>Oferta Fotografia Ślubna zawiera: </b><br />•	Reportaż ślubny <br />•	Sesja narzeczeńska <br />•	Sesja plenerowa ślubna',
//     offerParagraph: [
//       'Wiedza i doświadczenie fotografa',
//       'Indywidualna koncepcja sesji plenerowej',
//       'Profesjonalna obróbka graficzna zdjęć i fotoalbumu',
//       'Praca na najwyższej jakości sprzęcie fotograficznym',
//       'Foto album - 28 str. 20x20 cm',
//       'Wydruki w formacie 21x15 na jedwabnym papierze wysokiej jakości',
//       'Ozdobne opakowanie do przechowywania zdjęć',
//       'Pendrive ze wszystkimi zdjęciami',
//       'Zdjęcia w formie elektronicznej (w chmurze)',
//     ],
//     spaceBetweenIndex: 4,
//     price: null,
//     additionalInfo: [
//       'Nie przekazuję zdjęć nieobrobionych',
//       'Obraz na płótnie od  90zł do 200zł',
//       'Dodatkowa fotoksiążka od 100zł',
//       'Dodatkowe odbitki(21x15cm) - 2,50zł/szt',
//       'Reportaż trwa do 1 w nocy',
//       'Każda dodatkowo rozpoczęta godzina 150zł',
//       'Dojazd do klienta do 15km gratis, powyżej  + 1zł / km',
//     ],
//     gallery: GALLERY_MODEL,
//   },
//   {
//     image: 'assets/img/full-offer-2.jpg',
//     photoOffset: 50,
//     alt: '',
//     title: 'Sesja Ślubna/Narzeczeńska',
//     mainParagraph:
//       'Okres narzeczeństwa i ślubu to niezwykły czas miłości dzielonej między dwojgiem zakochanych ludzi. Warto uwiecznić te ciepłe spojrzenia, czułe uściski dłoni, tę radość przed planowanym powiedzeniem sobie „TAK”. <br /><br>Sesja narzeczeńska to okazja do świetnej zabawy w formie randki, gdzie towarzyszę Wam i dokumentuję Wasze uczucie.<br /><br />Takie sesje odbywają się zazwyczaj w otoczeniu natury - w plenerze. Jestem jednak otwarta na propozycje, wybiorę się z Wami tam gdzie czujecie się najlepiej. Jeżeli nie macie pomysłu na miejsce w którym mogłaby się odbyć sesja, nie martwcie się - pomogę Wam wybrać najlepsze miejsce.',
//     offerParagraph: [
//       'Wiedza i doświadczenie fotografa',
//       'Indywidualna koncepcja sesji',
//       'Profesjonalna obróbka graficzna',
//       'Praca na najwyższej jakości sprzęcie fotograficznym',
//       'Wydruki w formacie 21x15 na jedwabnym papierze wysokiej jakości',
//       'Zdjęcia w formie elektronicznej (w chmurze)',
//     ],
//     spaceBetweenIndex: 4,
//     price: 'od 300 zł',
//     additionalInfo: [
//       'Nie przekazuję zdjęć nieobrobionych',
//       'Obraz na płótnie od  90zł do 200zł',
//       'Dodatkowa fotoksiążka od 100zł/szt',
//       'Dodatkowe odbitki(10x15cm) - 1,50zł/szt',
//       'Dodatkowe odbitki(21x15cm) - 2,50zł/szt',
//       'Dojazd do klienta do 15km gratis, powyżej  + 1zł / km',
//     ],
//     gallery: GALLERY_MODEL,
//   },
//   {
//     image: 'assets/img/full-offer-3.jpg',
//     photoOffset: 45,
//     alt: '',
//     title: 'Chrzest',
//     mainParagraph:
//       'Chrzest Święty to wyjątkowe i niepowtarzalne wydarzenie w życiu każdej rodziny. Uroczystość jest pełna wzruszeń i silnych emocji, które towarzyszą młodym rodzicom  i rodzinie. Ten wyjątkowy dzień nie powtórzy się już nigdy i na pewno zasługuje na uwiecznienie na zdjęciach. <br /><br />Warto te momenty zatrzymać na wieczność w pięknych fotografiach, które przez lata będą wspaniałą pamiątką tego radosnego dnia. <br /><br />Sesja Chrztu Świętego to zdjęcia reportażowe wykonane podczas przygotowań do ceremonii oraz uroczystości w kościele a także portrety z rodzicami i gośćmi po uroczystości.',
//     offerParagraph: [
//       'Wiedza i doświadczenie fotografa',
//       'Profesjonalna obróbka graficzna',
//       'Praca na najwyższej jakości sprzęcie fotograficznym',
//       'Mini album - składany triplet na 3 zdjęcia',
//       'Wydruki 21x15cm na jedwabnym papierze wysokiej jakości',
//       'Pendrive ze wszystkimi zdjęciami',
//       'Zdjęcia w formie elektronicznej (w chmurze)',
//       'Opakowanie do przechowywania wydruków',
//     ],
//     spaceBetweenIndex: 3,
//     price: 'od 650 zł',
//     additionalInfo: [
//       'Istnieje możliwość wyboru zdjęć z kilku dodatkowo obrobionych ujęć',
//       'Dodatkowe ujęcie - 5 zł/szt',
//       'Dodatkowe odbitki(10x15cm) - 1,50zł/szt',
//       'Dodatkowe odbitki(21x15cm) - 2,50zł/szt',
//       'Nie przekazuję zdjęć nieobrobionych',
//       'Ekspresowa obróbka całej sesji do 3 dni roboczych +50 % ceny sesji',
//       'Za dodatkowe ujęcia płaci się przelewem lub gotówka podczas odbioru wydruków',
//       'Rozliczenie za sesję następuje w dniu sesji',
//       'Dojazd do klienta do 15km gratis, powyżej  + 1zł / km',
//     ],
//     gallery: GALLERY_MODEL,
//   },
//   {
//     image: 'assets/img/full-offer-4.jpg',
//     photoOffset: 25,
//     alt: '',
//     title: 'Komunia Święta',
//     mainParagraph:
//       'Komunia Święta to pierwsza tak ważna i świadoma uroczystość w życiu dziecka, w której towarzyszy mu cała jego rodzina. Przyjęcie komunii świętej to wielkie wydarzenie,  dziecko świadomie dołącza do wspólnoty i po raz pierwszy w pełni może uczestniczyć w Eucharystii przyjmując ciało i krew Chrystusa.<br /><br />Jeśli szukasz fotografa na uroczystość Pierwszej Komunii Świętej w Grajewie bądź okolicach to dobrze trafiłeś! Pamiątka Komunii Świętej to jedna z najważniejszych w życiu naszych małych pociech. <br /><br /><b>Pakiet reportażowy</b> zaczyna się przeważnie podczas ubierania Waszego dziecka do uroczystości, następnie przez sakrament po zdjęcia z najbliższymi, aż do składania życzeń na sali oraz sesji z rodzicami, chrzestnymi oraz resztą rodziny.<br /><br /><b>Sesja Komunijna</b> jest to zazwyczaj sesja plenerowa wykonana w dniu komunii lub białym tygodniu.',
//     offerParagraph: [
//       'Wiedza i doświadczenie fotografa',
//       'Praca na najwyższej jakości sprzęcie fotograficznym',
//       'Indywidualna koncepcja sesji',
//       'Profesjonalna obróbka graficzna',
//       'Wydruki 21x15cm na jedwabnym papierze wysokiej jakości',
//       'Ozdobne opakowanie do przechowywania wydruków',
//       'Zdjęcia w formie elektronicznej (w chmurze)',
//       'Pendrive ze wszystkimi zdjęciami (Pakiet Reportażowy)',
//     ],
//     spaceBetweenIndex: 4,
//     price: 'Sesja Komunijna od 250zł / Pakiet Reportażowy od 600zł',
//     additionalInfo: [
//       'Dodatkowe odbitki(10x15cm) - 1,50zł/szt',
//       'Dodatkowe odbitki(21x15cm) - 2,50zł/szt',
//       'Fotoksiążka od 100 zł',
//       'Nie przekazuję zdjęć nieobrobionych',
//       'Ekspresowa obróbka całej sesji do 3 dni roboczych +50 % ceny sesji',
//       'Za dodatkowe ujęcia płaci się przelewem lub gotówka podczas odbioru wydruków',
//       'Rozliczenie za sesję następuje w dniu sesji',
//       'Dojazd do klienta do 15km gratis, powyżej  + 1zł / km',
//     ],
//     gallery: GALLERY_MODEL,
//   },
//   {
//     image: 'assets/img/full-offer-5.jpg',
//     photoOffset: 35,
//     alt: '',
//     title: 'Sesje rodzinne',
//     mainParagraph:
//       'Sami często robimy sobie zdjęcia nawzajem, ale skutkiem tego na naszych fotografiach zawsze kogoś brakuje. Gdy robisz zdjęcie swojej rodzinie - to Ciebie będzie brakować na zdjęciu. Fotografia rodzinna pozwala Wam skupić się na sobie. W kadrze chcę zatrzymać dla Was autentyczne i szczere i niezapozowane emocje, które po latach będą wywoływać takie same wzruszenie.<br /><br />Sesja rodzinna ma zazwyczaj charakter reportażu, fotografuję to co się dzieje. Staram się uchwycić rodzinę podczas wspólnej zabawy.<br /><br />Fotografie w plenerze odbywają się zazwyczaj latem, a w zaciszu studio w okresie zimowym. Istnieje możliwość wykonania sesji u Was w domu - jeżeli tam czujecie się najlepiej.',
//     offerParagraph: [
//       'Wiedza i doświadczenie fotografa',
//       'Praca na najwyższej jakości sprzęcie fotograficznym',
//       'Indywidualna koncepcja sesji',
//       'Profesjonalna obróbka graficzna',
//       'Przygotowanie stylizacji do sesji',
//       'W zależności od wybranego pakietu od 3-5 stylizacji (udostępniam garderobę)',
//       'Wydruki 21x15cm na jedwabnym papierze wysokiej jakości',
//       'Zdjęcia w formie elektronicznej (w chmurze)',
//     ],
//     spaceBetweenIndex: 6,
//     price: 'od 250zł',
//     additionalInfo: [
//       'Istnieje możliwość samodzielnego wyboru zdjęć',
//       'Dodatkowe ujęcia wraz z obróbką graficzną - 20-25zł',
//       'Dodatkowe odbitki(10x15cm) - 1,50zł/szt',
//       'Dodatkowe odbitki(21x15cm) - 2,50zł/szt',
//       'Nie przekazuję zdjęć nieobrobionych',
//       'Ekspresowa obróbka całej sesji do 3 dni roboczych +50 % ceny sesji',
//       'Za dodatkowe ujęcia płaci się przelewem lub gotówka podczas odbioru wydruków',
//       'Czas oczekiwania na gotowy materiał to max 6 tyg.',
//       'Rozliczenie za sesję następuje w dniu sesji',
//       'Dojazd do klienta do 15km gratis, powyżej  + 1zł / km',
//     ],
//     gallery: GALLERY_MODEL,
//   },
//   {
//     image: 'assets/img/full-offer-6.jpg',
//     photoOffset: 70,
//     alt: '',
//     title: 'Sesje brzuszkowe',
//     mainParagraph:
//       'Ciąża to ten moment, gdy już wiesz, że za chwilę otworzysz drzwi do lepszego świata.<br /><br />Dla każdej przyszłej mamy ciąża to przepełniony emocjami czas oczekiwania.<b> Najlepszy czas na wykonanie takich zdjęć to 6-7 miesiąc ciąży.</b> Wtedy przyszłe mamy wyglądają pięknie, brzuszek mają ładnie zaokrąglony i emanują pozytywną energią.<br /><br />Sesje z przyszłą mamą zawsze realizowane są według jej oczekiwań. Mogą one odbywać się zarówno w plenerze jak i w studiu lub domu.<br /><br />Zdjęcia mogą odbyć się z partnerem i starczym dzieckiem/dziećmi.<br /><br />Jeśli marzysz również o sesji z dzieckiem po narodzinach przygotowałam dla Ciebie specjalny pakiet "brzuszek + maluszek" w atrakcyjnej cenie.',
//     offerParagraph: [
//       'Wiedza i doświadczenie fotografa',
//       'Praca na najwyższej jakości sprzęcie fotograficznym',
//       'Indywidualna koncepcja sesji',
//       'Profesjonalna obróbka graficzna',
//       'W zależności od wybranego pakietu od 3-5 stylizacji (udostępniam garderobę)',
//       'Wydruki 21x15cm na jedwabnym papierze wysokiej jakości',
//       'Ozdobne opakowanie do przechowywania zdjęć',
//       'Zdjęcia w formie elektronicznej (w chmurze)',
//     ],
//     spaceBetweenIndex: 5,
//     price: 'od 250zł',
//     additionalInfo: [
//       'Czas trwania sesji to 0.5 - 1.5 h',
//       'Istnieje możliwość wyboru zdjęć z kilku dodatkowo obrobionych ujęć',
//       'Dodatkowe ujęcia wraz z obróbką graficzną - 20-25zł',
//       'Dodatkowe odbitki(10x15cm) - 1,50zł/szt',
//       'Dodatkowe odbitki(21x15cm) - 2,50zł/szt',
//       'Fotoksiążka od 100 zł',
//       'Nie przekazuję zdjęć nieobrobionych',
//       'Ekspresowa obróbka całej sesji do 3 dni roboczych +50 % ceny sesji',
//       'Za dodatkowe ujęcia płaci się przelewem lub gotówka podczas odbioru wydruków',
//       'Czas oczekiwania na gotowy materiał to max 6 tyg.',
//       'Rozliczenie za sesję następuje w dniu sesji',
//       'Dojazd do klienta do 15km gratis, powyżej  + 1zł / km',
//     ],
//     gallery: GALLERY_MODEL,
//   },
//   {
//     image: 'assets/img/full-offer-7.jpg',
//     photoOffset: 45,
//     alt: '',
//     title: 'Sesje noworodkowe',
//     mainParagraph:
//       'Sesja dziecka po urodzeniu to najlepsza pamiątka, jaką możemy sprawić sobie i naszym najbliższym. Na zdjęciach możemy zatrzymać ten wspaniały czas, maleńkość i cud nowego życia.<br /><br />Gdy maluszek pojawia się w Waszym życiu, towarzyszą Wam przeróżne emocje. Bezgraniczna miłość, oszołomienie, często trochę bezradności, ale też poczucie, że od teraz już zawsze będziecie razem.<br /><br />Najlepszy czas na wykonanie sesji to <b>dwa pierwsze tygodnie życia</b> naszego Maluszka. W tym czasie dziecko wciąż jeszcze porusza i układa się tak, jak w brzuchu mamy. Będzie tak tylko przez krótki czas po pojawieniu się na świecie, więc warto zatrzymać te momenty na dłużej.<br /><br />Sesję możemy wykonać w studio (zdjęcia stylizowane oraz live style) lub w Waszym domu (sypialni , salonie) zdjęcia Live Style (niepozowane na rękach u rodzicach w naturalnych pozach).',
//     offerParagraph: [
//       'Wiedza i doświadczenie fotografa',
//       'Indywidualna koncepcja sesji',
//       'Przygotowanie stylizacji do sesji',
//       'Profesjonalna obróbka graficzna',
//       'Szeroki wybór stylizacji do sesji (udostępniam garderobę)',
//       'Praca na najwyższej jakości sprzęcie fotograficznym',
//       'Wydruki 21x15cm na jedwabnym papierze wysokiej jakości',
//       'Zdjęcia w formie elektronicznej (w chmurze)',
//     ],
//     spaceBetweenIndex: 6,
//     price: 'od 350zł',
//     additionalInfo: [
//       'Czas ubierania i usypiania dziecka 0.5 - 1.5 h',
//       'Czas trwania sesji to od 1-3 h',
//       'Istnieje możliwość wyboru zdjęć z kilku dodatkowo obrobionych ujęć',
//       'Dodatkowe ujęcia - 20-25zł/szt',
//       'Dodatkowe odbitki(10x15cm) - 1,50zł/szt',
//       'Dodatkowe odbitki(21x15cm) - 2,50zł/szt',
//       'Nie przekazuję zdjęć nieobrobionych',
//       'Ekspresowa obróbka całej sesji do 3 dni roboczych +50 % ceny sesji',
//       'Za dodatkowe ujęcia płaci się przelewem lub gotówka podczas odbioru wydruków',
//       'Czas oczekiwania na gotowy materiał to max 6 tyg.',
//       'Rozliczenie za sesję następuje w dniu sesji',
//       'Dojazd do klienta do 15km gratis, powyżej  + 1zł / km',
//     ],
//     gallery: GALLERY_MODEL,
//   },
//   {
//     image: 'assets/img/full-offer-8.jpg',
//     photoOffset: 45,
//     alt: '',
//     title: 'Sesje niemowlęce',
//     mainParagraph:
//       'Okres kiedy dziecko stawia pierwsze kroki i zaczyna płatać pierwsze figle to czas wielu wrażeń i nowych emocji. Maluszek uczy się świata i przeżywa wielkie emocje, a jego opiekunowie podwójnie tyle ile ich mała pociecha.<br /><br />Warto zachować ten beztroski czas w kadrze i wracać do tych pięknych chwil, odkrywając te emocje na nowo. Dzieci są bardzo wdzięcznym, ale też trudnym tematem fotografii. Rodzicom zależy żeby ich pociechy były na zdjęciach takie jak widzą je na co dzień - radosne, zafascynowane światem, ufne i niewinne. Do tego potrzebny jest profesjonalny fotograf, który zapewni komfort i bezpieczną atmosferę.<br /><br />Sesje niemowlęce odbywają się w plenerze lub w zaciszu studio lub Twojego domu - tam gdzie maluch czuje się najlepiej. ',
//     offerParagraph: [
//       'Wiedza i doświadczenie fotografa',
//       'Praca na najwyższej jakości sprzęcie fotograficznym',
//       'Indywidualna koncepcja sesji',
//       'Przygotowanie stylizacji do sesji',
//       'W zależności od wybranego pakietu od 3-5 stylizacji (udostępniam garderobę)',
//       'Profesjonalna obróbka graficzna',
//       'Wydruki 21x15cm na jedwabnym papierze wysokiej jakości',
//       'Ozdobne opakowanie zdjęć',
//       'Zdjęcia w formie elektronicznej (w chmurze)',
//     ],
//     spaceBetweenIndex: 6,
//     price: 'od 250zł',
//     additionalInfo: [
//       'Czas trwania sesji to od 0.5 do 1.5 h',
//       'Istnieje możliwość wyboru zdjęć z kilku dodatkowo obrobionych ujęć',
//       'Dodatkowe ujęcia - 20-25zł/szt',
//       'Dodatkowe odbitki(10x15cm) - 1,50zł/szt',
//       'Dodatkowe odbitki(21x15cm) - 2,50zł/szt',
//       'Nie przekazuję zdjęć nieobrobionych',
//       'Ekspresowa obróbka całej sesji do 3 dni roboczych +50 % ceny sesji',
//       'Za dodatkowe ujęcia płaci się przelewem lub gotówka podczas odbioru wydruków',
//       'Czas oczekiwania na gotowy materiał to max 6 tyg.',
//       'Rozliczenie za sesję następuje w dniu sesji',
//       'Dojazd do klienta do 15km gratis, powyżej  + 1zł / km',
//     ],
//     gallery: GALLERY_MODEL,
//   },
//   {
//     image: 'assets/img/full-offer-9.jpg',
//     photoOffset: 40,
//     alt: '',
//     title: 'Sesje urodzinowe',
//     mainParagraph:
//       'Pierwsze urodziny to świetna okazja na sesję zdjęciową. Wasze maleństwo czasmi stawia już pierwsze kroki. Jest wesołe, uśmiechnięte i chętnie poznaje otoczenie.<br /><br />Pierwsze dwanaście miesięcy życia to prawdziwe bum rozwojowe, porównując zdjęcia z przed roku, sami będziecie zdziwieni jak wiele się przez ten czas zmieniło.<br /><br />Mimo że sesja roczkowa ma swojego głównego bohatera, serdecznie zapraszam do udziału całą rodzinę. Najbardziej lubię fotografować więzi i relacje. To dla mnie ogromna przyjemność i zaszczyt, że mogę uwiecznić na zdjęciach radość całej rodziny z pierwszych urodzin najmłodszego członka.<br /><br />Sesja w plenerze to chyba mój ulubiony sposób na sesję roczkową. Otoczenie przyrody daje nam bardzo dużą różnorodność kadrów.',
//     offerParagraph: [
//       'Wiedza i doświadczenie fotografa',
//       'Praca na najwyższej jakości sprzęcie fotograficznym',
//       'Indywidualna koncepcja sesji',
//       'Przygotowanie stylizacji do sesji',
//       'W zależności od wybranego pakietu od 3-5 stylizacji (udostępniam garderobę)',
//       'Profesjonalna obróbka graficzna',
//       'Wydruki 21x15cm na jedwabnym papierze wysokiej jakości',
//       'Ozdobne opakowanie zdjęć',
//       'Zdjęcia w formie elektronicznej (w chmurze)',
//     ],
//     spaceBetweenIndex: 6,
//     price: 'od 250zł',
//     additionalInfo: [
//       'Czas trwania sesji to od 0.5 do 1.5 h',
//       'Istnieje możliwość wyboru zdjęć z kilku dodatkowo obrobionych ujęć',
//       'Dodatkowe ujęcia - 20-25zł/szt',
//       'Dodatkowe odbitki(10x15cm) - 1,50zł/szt',
//       'Dodatkowe odbitki(21x15cm) - 2,50zł/szt',
//       'Nie przekazuję zdjęć nieobrobionych',
//       'Ekspresowa obróbka całej sesji do 3 dni roboczych +50 % ceny sesji',
//       'Za dodatkowe ujęcia płaci się przelewem lub gotówka podczas odbioru wydruków',
//       'Czas oczekiwania na gotowy materiał to max 6 tyg.',
//       'Rozliczenie za sesję następuje w dniu sesji',
//       'Dojazd do klienta do 15km gratis, powyżej + 1zł / km',
//     ],
//     gallery: GALLERY_MODEL,
//   },
// ];
