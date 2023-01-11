export interface QaModel {
  question: string;
  answer: string;
  expanded: boolean;
}

export const QA: QaModel[] = [
  {
    question: 'Jaki jest czas oczekiwania na zrealizowany materiał?',
    answer: 'Czas oczekiwania wynosi maksymalnie 90 dni.',
    expanded: false,
  },
  {
    question:
      'Czy jest szansa na wcześniejsze uzyskanie zrezlizowanego materiału?',
    answer:
      'Można uzyskać zrealizowany materiał wcześniej(do 2 tygodni), za dopłatą w wysokości 600zł.',
    expanded: false,
  },
  {
    question: 'Czy otrzymamy wszystkie zdjęcia wykonane przez ciebie?',
    answer:
      'Nie, cały materiał zdjęciowy zostaje przeze mnie poddany selekcji i tylko najlepsze zdjęcia (w ramach wybranego przez Was pakietu) trafiają w Wasze ręce. Istnieje też możliwość samodzielnego wyboru zdjęć które zostaną poddane obróbce (ilość zdjęć według wybranego pakietu).',
    expanded: false,
  },
  {
    question: 'W jakiej formie otrzymamy fotografie ślubne?',
    answer:
      'Obrobione zdjęcia zostaną przekazane w eleganckim opakowaniu, wydruki 21x15, w galerii internetowej oraz pendrive.',
    expanded: false,
  },
  {
    question: 'Czy istnieje możliwość wyboru zdjęć przez klienta?',
    answer:
      'Tak, istnieje możliwość samodzielnego wyboru zdjęć. Wybieracie wtedy określoną liczbę zdjęć (według wybranego pakietu) które zostaną poddane obróbce. Będzie możliwość dokupienia dodatkowych ujęć (5 zł/szt.). Możecie również zdać się na mnie, możecie wtedy liczyć na gratis w postaci dodatkowej ilości fotografii.',
    expanded: false,
  },
  {
    question: 'Czy będziemy mogli zamówić album zdjęciowy?',
    answer:
      'Jasne, możecie otrzymać takowy w ramach wybranego pakietu, a jeśli zdecydujecie się na taki, w którym nie zawiera się opcja otrzymania albumu, możecie go zamówić.',
    expanded: false,
  },
  {
    question: 'O której zaczynasz i kończysz pracę w dniu ślubu?',
    answer:
      'Reportaż zaczynam od przygotowań podczas ubierania się pary młodej, natomiast kończę zazwyczaj po torcie i oczepinach, czyli ok. 1:00. Staram się aby w materiale znalazły się wszystkie ważne momenty z wesela.',
    expanded: false,
  },
  {
    question:
      'Jeśli zajdzie taka potrzeba, to możemy liczyć, że zostaniesz dłużej na ślubie czy weselu?',
    answer:
      'Nie widzę żadnego problemu. Jeśli tylko poczujecie, że powinienem wraz z moim aparatem dłużej z Wami zostać, to z pewnością to uczynię. Kwota każdej rozpoczętej godziny wynosi 150 złotych.',
    expanded: false,
  },
  {
    question:
      'Nigdy wcześniej nie braliśmyy udziału w żadnej sesji zdjęciowej. Możemy liczyć na Twoją pomoc?',
    answer:
      'Oczywiście, to również należy do mojej pracy. Nie tylko wykonywanie zdjęć, ich opracowanie, ale też sprawienie, byście czuli się przed obiektywem dobrze i mieli pewność, że fotografie, na których się znajdziecie, to będzie to! Choć kadry pełne swoistej naturalności i spontaniczności są najlepsze, to czasem podpowiedź, jak się ustawić do zdjęcia, z pewnością nie zaszkodzi. Są też tacy Klienci, którzy takich porad potrzebują więcej, a ja z przyjemnością ich pokieruję. Zatem bez obaw! Damy radę!',
    expanded: false,
  },
  {
    question: 'Czy podczas realizowanego materiału zdjęciowego będziesz sama?',
    answer:
      'W czasie przygotowań, zaślubin i zabawy weselnej zawsze jestem sama.',
    expanded: false,
  },
  {
    question: 'Jak wygląda współpraca w dniu ślubu?',
    answer:
      'Fotograf ślubny pojawia się trochę wcześniej w dniu ślubu i towarzyszy już podczas samych przygotowań. Przez ten cały czas staram się być niewidoczna aby nie rzucać się w oczy i rejestrować kluczowe momenty dnia. Oglądając gotowe zdjęcia będziecie zaskoczeni tym, ile działo się przez cały ten czas.',
    expanded: false,
  },
  {
    question: 'Na jakim sprzęcie pracujesz?',
    answer:
      'Pracuję na pełno klatkowych profesjonalnych bezlusterkowcach marki Canon. Do tego jasne obiektywy, lampy błyskowe. Mój aparat ponadto pozwala mi na zapisywanie zdjęć bezpośrednio na dwóch kartach pamięci co jeszcze bardziej zabezpiecza wykonane zdjęcia przed np. uszkodzeniem karty pamięć. Wszystko po to, aby oddać Wam profesjonalny materiał.',
    expanded: false,
  },
  {
    question: 'Plener ślubny - w dniu wesela czy w inny dzień?',
    answer:
      'W swojej ofercie mam plener ślubny w innym dniu i jest to opcja którą preferuję i zalecam, ponieważ w dniu ślubu nie macie zbyt wiele czasu, który moglibyście mi poświęcić. Czasami ciężko o chociażby pół godziny wolnego, a na plener potrzebujemy około 2-4 godzin. W tym dniu nie chciałbym również zabierać Was gościom weselnym z sali, lub co gorsza, żeby goście czekali na Was pod salą. Para młoda musi również wyglądać idealnie, a podczas pleneru można się trochę pobrudzić. Tego dnia jesteśmy również ograniczeni co do miejsc - w krótkim czasie nie będziemy w stanie za daleko pojechać.',
    expanded: false,
  },
  {
    question: 'Czy plener może być w innej miejscowości?',
    answer:
      'Oczywiście, że tak. To Wy wybieracie miejsce i to będą Wasze zdjęcia. Jestem otwarty na wszystkie sugestie.',
    expanded: false,
  },
  {
    question: 'Co należy zrobić aby zarezerwować termin?',
    answer:
      'Należy skontaktować się ze mną telefonicznie lub przez FB. Jeżeli jesteście zdecydowani, podpiszemy umowę i po wpłaceniu zadatku będziemy już tylko czekać na ten “wielki dzień”.',
    expanded: false,
  },
  {
    question: 'Kiedy się rozliczamy?',
    answer: 'Zgodnie z umową, rozliczamy się w dniu ślubu.',
    expanded: false,
  },
  {
    question: 'Jak wygląda podpisanie umowy na zdjęcia ślubne i sesje?',
    answer:
      'Przede wszystkim zachęcam do spotkania się na żywo napijemy się razem kawy, poznamy się, poczujemy kim naprawdę jesteśmy. Jeśli nie jest to możliwe to po podjęciu decyzji poproszę Was o podanie danych potrzebnych do skonstruowania umowy, którą następnie wysyłam przez e-mail. Po podpisaniu odsyłacie mi skan na e-mail lub po prostu osobiście podczas spotkania.',
    expanded: false,
  },
  {
    question: 'Czy przed podpisaniem umowy musimy zdecydować się na albumy?',
    answer:
      'Wiem ile decyzji musicie podjąć przed ślubem i nie chcę by wybór rodzaju i ilości albumów był koniecznością jeśli nie macie akurat do tego głowy. Dlatego zostawiam Wam wolną rękę. Decyzję o albumie możecie podjąć zarówno przed, jak i po ślubie. Co do dodatkowych albumów dla rodziców - też zostawiam Wam wolną rękę.',
    expanded: false,
  },
  {
    question: 'Czy cena reportażu ślubnego zawiera koszt dojazdu?',
    answer:
      'Dojazd na Wasz ślub jest wliczony w cenę w promieniu 30-50 km od Grajewa (w zależności od pakietu). Powyżej tych wartości koszt liczę indywidualnie w kwocie 1 zł za 1 km (w obie strony) z punktu mojego zamieszkania do miejsca ślubu lub sesji, według map Google.',
    expanded: false,
  },
  {
    question:
      'Chcielibyśmy zachować prywatność naszych zdjęć - czy jest to możliwe?',
    answer:
      'Staram się pokazywać jak najwięcej reportaży ślubnych i sesji fotograficznych na swojej stronie internetowej jak i w mediach społecznościowych. Jest to swoista promocja i zapewne dzięki niej trafiliście tutaj. Jeśli jednak chcielibyście zachować anonimowość to wspomnijcie mi o tym przed podpisaniem umowy.',
    expanded: false,
  },
  {
    question: 'Jak długo przechowujesz nasze zdjęcia ślubne w archiwum?',
    answer:
      'Fotografie w wersji elektronicznej z waszego wesela lub sesji są przechowywane przez minimum rok po oddaniu albumu ślubnego. Jeśli chodzi o ich dostępność w galerii internetowej to dostępne są tam do pobrania przez okres również 1 roku od pojawienia się tam pierwszych zdjęć z reportażu. Pamiętajcie, że galerię możecie udostępnić wszystkim Waszym znajomym i rodzinie, wystarczy że prześlecie im link. Zachęcam Was do archiwizacji plików na zewnętrznych dyskach pamięci. Najlepiej będzie jeśli skopiujecie je na kilku takich nośnikach. Moim zdaniem najbardziej trwała jest archiwizacja w formie wydrukowanej - album ślubny lub odbitki. Cyfrowe kopie w kilku miejscach też powinny spełnić swoje zadanie.',
    expanded: false,
  },
  {
    question:
      'Przypadki losowe / jeśli nie będziesz mógł sfotografować naszego wesela?',
    answer:
      'Jeszcze nie zdarzył mi się taki przypadek, ale gdyby stało się coś co uniemożliwiłoby mi obecność na waszym weselu to możecie być spokojni. Na pewno zapewnię najlepsze możliwe zastępstwo i nie będzie to nikt z przypadku. Obiecuję, że ewentualnego wyboru fotografa na zastępstwo dokonamy wspólnie.',
    expanded: false,
  },
  {
    question: 'Czym różni się sesja w dniu ślubu od sesji w innym dniu?',
    answer:
      'Sesja w innym dniu jest dłuższa. W dniu ślubu na zdjęcia w plenerze poświęcamy nie więcej niż pół godziny (a czasem mniej), tyle wystarczy w zupełności aby uzyskać zamierzoną ilość ujęć.',
    expanded: false,
  },
  {
    question:
      'Co to takiego sesja narzeczeńska i dlaczego warto się na nią zdecydować?',
    answer:
      'Jeśli nie mieliście jeszcze żadnego doświadczenia przed obiektywem, czujecie się niepewnie lub po prostu nie macie pewności co do mojej osoby to sesja narzeczeńska jest idealnym momentem by się przełamać - wobec obiektywu oraz wobec mnie. Podczas sesji narzeczeńskiej spędzicie wspólnie nastrojowe i intymne chwile. Podczas takiej sesji staram się zbudować między Wami atmosferę jak na pierwszej randce. Zdjęcia z sesji narzeczeńskiej mogą być też świetnym podziękowaniem dla rodziców, który można im wręczyć podczas wesela. Kończąc, zdjęcia z sesji można również wykorzystać do zaproszeń ślubnych lub nawet do udekorowania sali weselnej. Poza tym wszystkim będzie to dla Was dobra zabawa i co najważniejsze - świetne zdjęcia!',
    expanded: false,
  },
  {
    question: 'W jakich miastach zazwyczaj pracujesz?',
    answer:
      'Pracuję na terenie Podlasia i mazur. Mogę dojechać do takich miast jak: Białystok, Łomża, Augustów, Suwałki, Kolno, Biała Piska, Pisz, Olecko, Gołdap, Mikołajki',
    expanded: false,
  },
];
