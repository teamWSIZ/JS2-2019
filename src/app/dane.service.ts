import {Injectable, OnInit} from '@angular/core';
import {Semester} from "./model/semester";
import {Notetype} from "./model/notetype";
import {Teacher} from "./model/teacher";
import {Note} from "./model/note";
import {Lecture} from "./model/lecture";

@Injectable({
  providedIn: 'root'
})
export class DaneService implements OnInit {
  semDet: Map<number, Semester>;
  typDet: Map<number, Notetype>;
  public lecDet: Map<number, Lecture>;
  teaDet: Map<number, Teacher>;

  constructor() {
    this.semDet = new Map<number, Semester>();
    this.typDet = new Map<number, Notetype>();
    this.lecDet = new Map<number, Lecture>();
    this.teaDet = new Map<number, Teacher>();
    this.initializeMaps();
  }

  public ocenyBySemesterByStudentByTermin(semester: number, studentid: number, termin: number): Note[] {
    return this.rawNotes;
  }

  ngOnInit(): void {
  }



  private initializeMaps() {

    for(let x of this.rawNoteTypes) {
      this.typDet.set(x.ocenatypid, x);
    }
    for(let x of this.rawLectures) {
      this.lecDet.set(x.przedmiotid, x);
      console.log(`setting for ${x.przedmiotid} -> ${JSON.stringify(x)}`);
    }
    for(let x of this.rawTeachers) {
      this.teaDet.set(x.wykladowcaid, x);
    }

  }


  rawNoteTypes: Notetype[] = [
    {
      "ocenatypid": 6,
      "oznaczenie": "5",
      "slownie": "bdb",
      "liczba": 5.0
    }, {"ocenatypid": 5, "oznaczenie": "4.5", "slownie": "pdb", "liczba": 4.5}, {
      "ocenatypid": 4,
      "oznaczenie": "4",
      "slownie": "db",
      "liczba": 4.0
    }, {"ocenatypid": 3, "oznaczenie": "3.5", "slownie": "ddb", "liczba": 3.5}, {
      "ocenatypid": 2,
      "oznaczenie": "3",
      "slownie": "dst",
      "liczba": 3.0
    }, {"ocenatypid": 1, "oznaczenie": "2", "slownie": "ndst", "liczba": 2.0}, {
      "ocenatypid": 0,
      "oznaczenie": "0",
      "slownie": "--brak--",
      "liczba": 0.0
    }
  ];
  rawLectures: Lecture[] = [
    {"przedmiotid": 1, "nazwa": "Algebra - ćw.", "active": true}, {
      "przedmiotid": 6,
      "nazwa": "Analiza matematyczna - ćw.",
      "active": true
    }, {"przedmiotid": 199, "nazwa": "Systemy obsługi masowej - w.", "active": true}, {
      "przedmiotid": 198,
      "nazwa": "Systemy obsługi masowej - projekt",
      "active": true
    }, {
      "przedmiotid": 146,
      "nazwa": "Programowanie obiektowe - projekt",
      "active": true
    }, {
      "przedmiotid": 326,
      "nazwa": "Podstawy grafiki komputerowej - lab.",
      "active": true
    }, {
      "przedmiotid": 244,
      "nazwa": "Bezpieczeństwo informatyczne - projekt",
      "active": true
    }, {"przedmiotid": 312, "nazwa": "Metody numeryczne - ćw.", "active": true}, {
      "przedmiotid": 303,
      "nazwa": "Metody optymalizacji - ćw.",
      "active": true
    }, {"przedmiotid": 299, "nazwa": "Fizyka kwantowa - ćw.", "active": true}, {
      "przedmiotid": 333,
      "nazwa": "Wdrażanie systemów informatycznych - projekt",
      "active": true
    }, {"przedmiotid": 395, "nazwa": "Algebra - w.", "active": true}, {
      "przedmiotid": 423,
      "nazwa": "Analiza matematyczna - w.",
      "active": true
    }, {
      "przedmiotid": 427,
      "nazwa": "Bezpieczeństwo informatyczne - w.",
      "active": true
    }, {
      "przedmiotid": 391,
      "nazwa": "Dylematy społeczne i zawodowe informatyki - projekt",
      "active": true
    }, {
      "przedmiotid": 385,
      "nazwa": "Elementy architektury komputerów - ćw.",
      "active": true
    }, {
      "przedmiotid": 454,
      "nazwa": "Rachunek prawdopodobieństwa i statystyka - w.",
      "active": true
    }, {
      "przedmiotid": 359,
      "nazwa": "Rachunek prawdopodobieństwa i statystyka - ćw.",
      "active": true
    }, {
      "przedmiotid": 392,
      "nazwa": "Projektowanie systemów wbudowanych - ćw.",
      "active": true
    }, {"przedmiotid": 394, "nazwa": "Struktury danych - ćw.", "active": true}, {
      "przedmiotid": 381,
      "nazwa": "Fizyka klasyczna - ćw.",
      "active": true
    }, {
      "przedmiotid": 372,
      "nazwa": "Inteligentne systemy informatyczne - projekt",
      "active": true
    }, {
      "przedmiotid": 438,
      "nazwa": "Inteligentne systemy informatyczne - w.",
      "active": true
    }, {
      "przedmiotid": 419,
      "nazwa": "Inteligentne systemy informatyczne - ćw.",
      "active": true
    }, {
      "przedmiotid": 566,
      "nazwa": "Architektura systemów komputerowych - w.",
      "active": true
    }, {"przedmiotid": 580, "nazwa": "Podstawy multimediów - w.", "active": true}, {
      "przedmiotid": 565,
      "nazwa": "Elementy architektury komputerów - w.",
      "active": true
    }, {"przedmiotid": 581, "nazwa": "Podstawy multimediów - projekt", "active": true}, {
      "przedmiotid": 554,
      "nazwa": "Systemy kontroli wersji - w.",
      "active": true
    }, {"przedmiotid": 567, "nazwa": "Systemy kontroli wersji - lab.", "active": true}, {
      "przedmiotid": 564,
      "nazwa": "Systemy rozproszone - w.",
      "active": true
    }, {"przedmiotid": 563, "nazwa": "Systemy rozproszone - lab.", "active": true}, {
      "przedmiotid": 476,
      "nazwa": "Projektowanie systemów wbudowanych - w.",
      "active": true
    }, {"przedmiotid": 549, "nazwa": "Programowanie równoległe - w.", "active": true}, {
      "przedmiotid": 515,
      "nazwa": "Animacje (2D) - projekt",
      "active": true
    }, {"przedmiotid": 516, "nazwa": "Animacje (2D) - w.", "active": true}, {
      "przedmiotid": 521,
      "nazwa": "Algorytmy - w.",
      "active": true
    }, {"przedmiotid": 527, "nazwa": "Hurtownie danych - w.", "active": true}, {
      "przedmiotid": 500,
      "nazwa": "Projektowanie systemów informatycznych - ćw.",
      "active": true
    }, {
      "przedmiotid": 501,
      "nazwa": "Projektowanie systemów informatycznych - w.",
      "active": true
    }, {
      "przedmiotid": 496,
      "nazwa": "Metody sztucznej inteligencji - w.",
      "active": true
    }, {"przedmiotid": 538, "nazwa": "Animacje (3D) - projekt", "active": true}, {
      "przedmiotid": 537,
      "nazwa": "Animacje (3D) - w.",
      "active": true
    }, {"przedmiotid": 539, "nazwa": "Praktyka dyplomowa - ćw.", "active": true}, {
      "przedmiotid": 558,
      "nazwa": "Programowanie aplikacji mobilnych - w.",
      "active": true
    }, {
      "przedmiotid": 557,
      "nazwa": "Programowanie aplikacji mobilnych - ćw.",
      "active": true
    }, {
      "przedmiotid": 589,
      "nazwa": "Architektura systemów komputerowych - ćw.",
      "active": true
    }, {
      "przedmiotid": 632,
      "nazwa": "Komputerowe systemy operacyjne - w.",
      "active": true
    }, {
      "przedmiotid": 605,
      "nazwa": "Projektowanie architektury krajobrazu - w.",
      "active": true
    }, {"przedmiotid": 699, "nazwa": "Serwisy internetowe - w.", "active": true}, {
      "przedmiotid": 615,
      "nazwa": "Algorytmy - ćw.",
      "active": true
    }, {"przedmiotid": 701, "nazwa": "Wstęp do animacji 3D - w.", "active": true}, {
      "przedmiotid": 696,
      "nazwa": "Podstawy programowania 2 - w.",
      "active": true
    }, {
      "przedmiotid": 693,
      "nazwa": "Prawo autorskie i internetowe - w.",
      "active": true
    }, {
      "przedmiotid": 694,
      "nazwa": "Prawo autorskie i internetowe - ćw.",
      "active": true
    }, {
      "przedmiotid": 594,
      "nazwa": "Projektowanie architektury wnętrz - w.",
      "active": true
    }, {"przedmiotid": 683, "nazwa": "Witryny internetowe - w.", "active": true}, {
      "przedmiotid": 622,
      "nazwa": "Bezprzewodowe sieci komputerowe - w.",
      "active": true
    }, {
      "przedmiotid": 619,
      "nazwa": "Bezprzewodowe sieci komputerowe - ćw.",
      "active": true
    }, {"przedmiotid": 680, "nazwa": "Hurtownie danych - lab.", "active": true}, {
      "przedmiotid": 646,
      "nazwa": "Projektowanie aplikacji mobilnych - w.",
      "active": true
    }, {
      "przedmiotid": 647,
      "nazwa": "Projektowanie aplikacji mobilnych - ćw.",
      "active": true
    }, {"przedmiotid": 650, "nazwa": "Silniki graficzne - w.", "active": true}, {
      "przedmiotid": 651,
      "nazwa": "Silniki graficzne - ćw.",
      "active": true
    }, {
      "przedmiotid": 618,
      "nazwa": "Metody sztucznej inteligencji - ćw.",
      "active": true
    }, {"przedmiotid": 616, "nazwa": "Bazy danych - w.", "active": true}, {
      "przedmiotid": 617,
      "nazwa": "Bazy danych - ćw.",
      "active": true
    }, {"przedmiotid": 635, "nazwa": "Grafika 3D - ćw.", "active": true}, {
      "przedmiotid": 634,
      "nazwa": "Grafika 3D - w.",
      "active": true
    }, {"przedmiotid": 456, "nazwa": "Sieciowe systemy operacyjne - w.", "active": true}, {
      "przedmiotid": 473,
      "nazwa": "Podstawy grafiki komputerowej - w.",
      "active": true
    }, {"przedmiotid": 443, "nazwa": "Metody optymalizacji - w.", "active": true}, {
      "przedmiotid": 442,
      "nazwa": "Metody numeryczne - w.",
      "active": true
    }, {
      "przedmiotid": 371,
      "nazwa": "Dylematy społeczne i zawodowe informatyki - w.",
      "active": true
    }, {"przedmiotid": 685, "nazwa": "Wstęp do grafiki 3D - w.", "active": true}, {
      "przedmiotid": 737,
      "nazwa": "Wstęp do grafiki 3D - lab.",
      "active": true
    }, {"przedmiotid": 805, "nazwa": "Projektowanie Baz Danych 1 - ćw", "active": true}, {
      "przedmiotid": 35,
      "nazwa": "Fizyka klasyczna - w.",
      "active": true
    }, {
      "przedmiotid": 740,
      "nazwa": "Informatyczne systemy kryptologii- w",
      "active": true
    }, {
      "przedmiotid": 741,
      "nazwa": "Informatyczne systemy kryptologii- ćw",
      "active": true
    }, {
      "przedmiotid": 742,
      "nazwa": "Komputerowe systemy operacyjne- lab.",
      "active": true
    }, {
      "przedmiotid": 743,
      "nazwa": "Sieciowe systemy operacyjne- lab.",
      "active": true
    }, {
      "przedmiotid": 745,
      "nazwa": "Projektowanie architektury krajobrazu- lab.",
      "active": true
    }, {"przedmiotid": 746, "nazwa": "Serwisy internetowe- lab.", "active": true}, {
      "przedmiotid": 747,
      "nazwa": "Witryny internetowe- lab.",
      "active": true
    }, {"przedmiotid": 681, "nazwa": "Podstawy programowania 1 - w.", "active": true}, {
      "przedmiotid": 748,
      "nazwa": "Podstawy programowania 1- lab.",
      "active": true
    }, {"przedmiotid": 749, "nazwa": "Podstawy programowania 2 -lab.", "active": true}, {
      "przedmiotid": 762,
      "nazwa": "Prezentacja multimedialna- ćw.",
      "active": true
    }, {"przedmiotid": 785, "nazwa": "Projektowanie Baz Danych 1 - w.", "active": true}, {
      "przedmiotid": 750,
      "nazwa": "Wstęp do animacji 3D- lab.",
      "active": true
    }, {
      "przedmiotid": 706,
      "nazwa": "Język angielski 1 (poziom 0) - lektorat",
      "active": true
    }, {
      "przedmiotid": 707,
      "nazwa": "Język angielski 2 (poziom 0) - lektorat",
      "active": true
    }, {
      "przedmiotid": 709,
      "nazwa": "Język angielski 2 (poziom 2) - lektorat",
      "active": true
    }, {
      "przedmiotid": 708,
      "nazwa": "Język angielski 1 (poziom 2) - lektorat",
      "active": true
    }, {
      "przedmiotid": 751,
      "nazwa": "Podstawy programowania obiektowego- w.",
      "active": true
    }, {
      "przedmiotid": 752,
      "nazwa": "Podstawy programowania obiektowego- lab.",
      "active": true
    }, {"przedmiotid": 141, "nazwa": "Programowanie obiektowe - w.", "active": true}, {
      "przedmiotid": 753,
      "nazwa": "Grafika reklamowa i edytorska- w.",
      "active": true
    }, {
      "przedmiotid": 755,
      "nazwa": "Multimedia i grafika interaktywna- w.",
      "active": true
    }, {
      "przedmiotid": 756,
      "nazwa": "Multimedia i grafika interaktywna- lab.",
      "active": true
    }, {"przedmiotid": 757, "nazwa": "Programowanie równoległe- lab.", "active": true}, {
      "przedmiotid": 475,
      "nazwa": "Paradygmaty programowania - w.",
      "active": true
    }, {"przedmiotid": 758, "nazwa": "Paradygmaty programowania- lab.", "active": true}, {
      "przedmiotid": 759,
      "nazwa": "Realizacja/Oprogramowanie SI-w.",
      "active": true
    }, {
      "przedmiotid": 760,
      "nazwa": "Realizacja/Oprogramowanie SI- ćw.",
      "active": true
    }, {"przedmiotid": 761, "nazwa": "Prezentacja multimedialna- w.", "active": true}, {
      "przedmiotid": 767,
      "nazwa": "Komputerowe systemy bankowości- w.",
      "active": true
    }, {
      "przedmiotid": 768,
      "nazwa": "Komputerowe systemy bankowości- ćw.",
      "active": true
    }, {
      "przedmiotid": 769,
      "nazwa": "Internetowe systemy bankowości- w.",
      "active": true
    }, {
      "przedmiotid": 770,
      "nazwa": "Internetowe systemy bankowości- ćw.",
      "active": true
    }, {
      "przedmiotid": 771,
      "nazwa": "Programowanie systemów wbudowanych-w.",
      "active": true
    }, {
      "przedmiotid": 772,
      "nazwa": "Programowanie systemów wbudowanych- ćw.",
      "active": true
    }, {
      "przedmiotid": 773,
      "nazwa": "Podstawy programowania wizualnego- w.",
      "active": true
    }, {
      "przedmiotid": 774,
      "nazwa": "Podstawy programowania wizualnego- lab.",
      "active": true
    }, {"przedmiotid": 777, "nazwa": "Realizacja SI", "active": true}, {
      "przedmiotid": 783,
      "nazwa": "Grafika 2D - w",
      "active": true
    }, {"przedmiotid": 784, "nazwa": "Grafika 2D - lab", "active": true}, {
      "przedmiotid": 763,
      "nazwa": "Specyfikacja i modelowanie SI (ZPI) - w.",
      "active": true
    }, {
      "przedmiotid": 764,
      "nazwa": "Specyfikacja i modelowanie SI (ZPI) - ćw.",
      "active": true
    }, {"przedmiotid": 779, "nazwa": "Specyfikacja SI (SemDyp1) - w", "active": true}, {
      "przedmiotid": 765,
      "nazwa": "Prezentacja i wdrażanie SI (ZPI) - w.",
      "active": true
    }, {"przedmiotid": 781, "nazwa": "Projekt SI (SemDyp1) - w", "active": true}, {
      "przedmiotid": 780,
      "nazwa": "Specyfikacja SI (SemDyp1) - ćw",
      "active": true
    }, {
      "przedmiotid": 744,
      "nazwa": "Projektowanie architektury wnętrz - lab.",
      "active": true
    }, {
      "przedmiotid": 766,
      "nazwa": "Prezentacja i wdrażanie SI (ZPI) - ćw.",
      "active": true
    }, {"przedmiotid": 782, "nazwa": "Projekt SI (SemDyp1) - ćw", "active": true}, {
      "przedmiotid": 729,
      "nazwa": "Język angielski 2 (poziom B2)-lektorat",
      "active": true
    }, {
      "przedmiotid": 730,
      "nazwa": "Język angielski 1 (poziom B2)-lektorat",
      "active": true
    }, {"przedmiotid": 776, "nazwa": "Wdrażanie SI (SemDyp2)", "active": true}, {
      "przedmiotid": 775,
      "nazwa": "Testowanie SI (SemDyp2)",
      "active": true
    }, {
      "przedmiotid": 728,
      "nazwa": "Język angielski 2 (poziom 1) - lektorat",
      "active": true
    }, {
      "przedmiotid": 727,
      "nazwa": "Język angielski 1 (poziom 1) - lektorat",
      "active": true
    }, {"przedmiotid": 337, "nazwa": "Struktury danych - w.", "active": true}, {
      "przedmiotid": 786,
      "nazwa": "Podstawy techniki cyfrowej",
      "active": true
    }, {"przedmiotid": 787, "nazwa": "Komputerowe układy cyfrowe", "active": true}, {
      "przedmiotid": 789,
      "nazwa": "Analityka internetowa",
      "active": true
    }, {"przedmiotid": 790, "nazwa": "Aplikacje internetowe", "active": true}, {
      "przedmiotid": 791,
      "nazwa": "Podstawy marketingu internetowego - w",
      "active": true
    }, {
      "przedmiotid": 792,
      "nazwa": "Podstawy marketingu internetowego - ćw",
      "active": true
    }, {"przedmiotid": 793, "nazwa": "Podstawy techniki cyfrowej - w", "active": true}, {
      "przedmiotid": 794,
      "nazwa": "Podstawy techniki cyfrowej - ćw",
      "active": true
    }, {"przedmiotid": 795, "nazwa": "Komputerowe układy cyfrowe -ćw", "active": true}, {
      "przedmiotid": 796,
      "nazwa": "Komputerowe układy cyfrowe - w",
      "active": true
    }, {
      "przedmiotid": 155,
      "nazwa": "Wdrażanie systemów informatycznych - w.",
      "active": true
    }, {
      "przedmiotid": 733,
      "nazwa": "Aplikacje programowania wizualnego-wy",
      "active": true
    }, {"przedmiotid": 797, "nazwa": "Aplikacje internetowe - ćw", "active": true}, {
      "przedmiotid": 800,
      "nazwa": "Analityka internetowa - ćw",
      "active": true
    }, {
      "przedmiotid": 811,
      "nazwa": "Realizacja/Oprogramowanie SI- ćw. (dyplomowe 2)",
      "active": true
    }, {
      "przedmiotid": 814,
      "nazwa": "Prezentacja multimedialna (dyplomowe 2) - w",
      "active": true
    }, {
      "przedmiotid": 822,
      "nazwa": "Wdrażanie SI (sem.specjalizacyjne) - w",
      "active": true
    }, {
      "przedmiotid": 827,
      "nazwa": "Projekt SI (Sem.Specjalizacyjne) - ćw",
      "active": true
    }, {"przedmiotid": 798, "nazwa": "Aplikacje internetowe - w", "active": true}, {
      "przedmiotid": 799,
      "nazwa": "Analityka internetowa - w",
      "active": true
    }, {"przedmiotid": 801, "nazwa": "Programowanie baz danych - w", "active": true}, {
      "przedmiotid": 804,
      "nazwa": "Przewodowe sieci komputerowe - ćw",
      "active": true
    }, {"przedmiotid": 36, "nazwa": "Fizyka kwantowa - w.", "active": true}, {
      "przedmiotid": 808,
      "nazwa": "IS Ubezpieczeń majątkowych i osobowych - ćw",
      "active": true
    }, {"przedmiotid": 810, "nazwa": "IS Opcji - ćw", "active": true}, {
      "przedmiotid": 815,
      "nazwa": "Gry 3D - ćw",
      "active": true
    }, {"przedmiotid": 817, "nazwa": "Praktyka zawodowa - ćw", "active": true}, {
      "przedmiotid": 818,
      "nazwa": "Praktyka zawodowa - w",
      "active": true
    }, {
      "przedmiotid": 820,
      "nazwa": "Programowanie urządzeń mobilnych - ćw.",
      "active": true
    }, {"przedmiotid": 802, "nazwa": "Programowanie baz danych - ćw", "active": true}, {
      "przedmiotid": 813,
      "nazwa": "Prezentacja multimedialna (dyplomowe 2) - ćw",
      "active": true
    }, {"przedmiotid": 718, "nazwa": "Praktyka dyplomowa", "active": true}, {
      "przedmiotid": 819,
      "nazwa": "Programowanie urządzeń mobilnych - w.",
      "active": true
    }, {
      "przedmiotid": 826,
      "nazwa": "Specyfikacja SI (Sem.Specjalizacyjne) - w",
      "active": true
    }, {
      "przedmiotid": 828,
      "nazwa": "Projekt SI (Sem.Specjalizacyjne) - w",
      "active": true
    }, {"przedmiotid": 803, "nazwa": "Przewodowe sieci komputerowe - w", "active": true}, {
      "przedmiotid": 807,
      "nazwa": "IS Ubezpieczeń majątkowych i osobowych - w",
      "active": true
    }, {"przedmiotid": 816, "nazwa": "Gry 3D - w", "active": true}, {
      "przedmiotid": 821,
      "nazwa": "Wdrażanie SI (sem.specjalizacyjne) - ćw",
      "active": true
    }, {
      "przedmiotid": 824,
      "nazwa": "Testowanie SI (sem.specjalizacyjne) - ćw",
      "active": true
    }, {"przedmiotid": 809, "nazwa": "IS Opcji - w", "active": true}, {
      "przedmiotid": 812,
      "nazwa": "Realizacja/Oprogramowanie SI- w. (dyplomowe 2)",
      "active": true
    }, {
      "przedmiotid": 823,
      "nazwa": "Testowanie SI (sem.specjalizacyjne) - w",
      "active": true
    }, {
      "przedmiotid": 825,
      "nazwa": "Specyfikacja SI (Sem.Specjalizacyjne) - ćw",
      "active": true
    }, {"przedmiotid": 829, "nazwa": "Praktyka studencka_1_Ipol", "active": true}, {
      "przedmiotid": 830,
      "nazwa": "Praktyka studencka_1_IIpol",
      "active": true
    }, {"przedmiotid": 831, "nazwa": "Projektowanie graficzne", "active": true}, {
      "przedmiotid": 832,
      "nazwa": "Grafika internetowa",
      "active": true
    }, {"przedmiotid": 833, "nazwa": "Projektowanie graficzne-w", "active": true}, {
      "przedmiotid": 834,
      "nazwa": "Projektowanie graficzne-lab",
      "active": true
    }, {"przedmiotid": 835, "nazwa": "Grafika internetowa-w", "active": true}, {
      "przedmiotid": 836,
      "nazwa": "Grafika internetowa-projekt",
      "active": true
    }, {"przedmiotid": 837, "nazwa": "Wdrażanie SI", "active": true}, {
      "przedmiotid": 838,
      "nazwa": "Grafika reklamowa i edytorska-lab",
      "active": true
    }, {
      "przedmiotid": 839,
      "nazwa": "Wstęp do programowania wizualnego-w",
      "active": true
    }, {
      "przedmiotid": 840,
      "nazwa": "Wstęp do programowania wizualnego-lab",
      "active": true
    }, {
      "przedmiotid": 842,
      "nazwa": "Aplikacje programowania wizualnego-lab",
      "active": true
    }, {
      "przedmiotid": 843,
      "nazwa": "Projektowanie systemów mobilnych-w",
      "active": true
    }, {
      "przedmiotid": 844,
      "nazwa": "Projektowanie systemów mobilnych-lab",
      "active": true
    }, {
      "przedmiotid": 845,
      "nazwa": "Programowanie systemów mobilnych-w",
      "active": true
    }, {
      "przedmiotid": 846,
      "nazwa": "Programowanie systemów mobilnych-lab",
      "active": true
    }, {"przedmiotid": 847, "nazwa": "Podstawy internetu-w", "active": true}, {
      "przedmiotid": 848,
      "nazwa": "Podstawy internetu-lab",
      "active": true
    }
  ];
  rawTeachers: Teacher[] = [
    {
      "wykladowcaid": 16,
      "imie": "Ewa",
      "nazwisko": "Kalinowska",
      "prefix": "dr n.f.",
      "suffix": "prof. nadzw. WSIZ",
      "active": true,
      "sid": null
    }, {
      "wykladowcaid": 27,
      "imie": "Krystian",
      "nazwisko": "Kalinowski",
      "prefix": "dr hab. inż.",
      "suffix": "prof. nadzw. WSIZ",
      "active": true,
      "sid": null
    }, {
      "wykladowcaid": 18,
      "imie": "Józef",
      "nazwisko": "Kukuczka",
      "prefix": "dr n.t.",
      "suffix": "prof. nadzw. WSIZ",
      "active": true,
      "sid": null
    }, {
      "wykladowcaid": 37,
      "imie": "Aldona",
      "nazwisko": "Macura",
      "prefix": "mgr",
      "suffix": "",
      "active": true,
      "sid": null
    }, {
      "wykladowcaid": 34,
      "imie": "Janusz",
      "nazwisko": "Marecki",
      "prefix": "dr inż., dr n.mat.",
      "suffix": "prof. nadzw. WSIZ",
      "active": true,
      "sid": null
    }, {
      "wykladowcaid": 41,
      "imie": "Aleksander",
      "nazwisko": "Nieścierowicz",
      "prefix": "mgr inż.",
      "suffix": "",
      "active": true,
      "sid": null
    }, {
      "wykladowcaid": 33,
      "imie": "Aleksander",
      "nazwisko": "Simon",
      "prefix": "dr inż.",
      "suffix": "doc. WSIZ",
      "active": true,
      "sid": null
    }, {
      "wykladowcaid": 38,
      "imie": "WZ",
      "nazwisko": "Wykladowca",
      "prefix": "prof.",
      "suffix": "prof.",
      "active": true,
      "sid": null
    }, {
      "wykladowcaid": 19,
      "imie": "Dominik",
      "nazwisko": "Vymetal",
      "prefix": "dr hab inż.",
      "suffix": "prof. wiz. WSIZ",
      "active": true,
      "sid": null
    }, {
      "wykladowcaid": 60,
      "imie": " ",
      "nazwisko": "Dziekanat w.z.",
      "prefix": " ",
      "suffix": " ",
      "active": true,
      "sid": null
    }, {
      "wykladowcaid": 30,
      "imie": "Piotr",
      "nazwisko": "Marecki",
      "prefix": "dr inż., dr n.f.",
      "suffix": "prof. nadzw. WSIZ",
      "active": true,
      "sid": 3279
    }, {
      "wykladowcaid": 25,
      "imie": "Robert",
      "nazwisko": "Bucki",
      "prefix": "dr inż.",
      "suffix": "prof. nadzw. WSIZ",
      "active": true,
      "sid": 3282
    }, {
      "wykladowcaid": 17,
      "imie": "Robert",
      "nazwisko": "Kolud",
      "prefix": "dr inż.",
      "suffix": "prof. nadzw. WSIZ",
      "active": true,
      "sid": 3284
    }, {
      "wykladowcaid": 29,
      "imie": "Monika",
      "nazwisko": "Marecka",
      "prefix": "dr n.t.",
      "suffix": "prof. nadzw. WSIZ",
      "active": true,
      "sid": 3283
    }, {
      "wykladowcaid": 31,
      "imie": "Franciszek",
      "nazwisko": "Marecki",
      "prefix": "prof. dr hab. inż., dr n.e.",
      "suffix": "prof. zw. WSIZ",
      "active": true,
      "sid": 3286
    }, {
      "wykladowcaid": 28,
      "imie": "Elżbieta",
      "nazwisko": "Marecka",
      "prefix": "prof. dr hab. inż.",
      "suffix": "prof. zw. WSIZ",
      "active": true,
      "sid": 3287
    }, {
      "wykladowcaid": 100,
      "imie": "Przemysław",
      "nazwisko": "Stokłosa",
      "prefix": "dr",
      "suffix": "",
      "active": true,
      "sid": 3285
    }, {
      "wykladowcaid": 101,
      "imie": "Ryszard",
      "nazwisko": "Swakoń",
      "prefix": "mgr",
      "suffix": "",
      "active": true,
      "sid": 3288
    }, {
      "wykladowcaid": 26,
      "imie": "Zbigniew",
      "nazwisko": "Frąckiewicz",
      "prefix": "prof. dr inż.",
      "suffix": "prof. zw. WSIZ",
      "active": true,
      "sid": 3289
    }, {
      "wykladowcaid": 8,
      "imie": "Stanisław",
      "nazwisko": "Gajda",
      "prefix": "mgr",
      "suffix": "",
      "active": true,
      "sid": 3290
    }
  ];
  rawNotes: Note[] = [
    {"ocenaid":54585,"semestrid":20171,"studentid":3083,"przedmiotid":473,"wykladowcaid":60,"terminid":1,"ocenatypid":3,"datamodyfikacji":null},{"ocenaid":54582,"semestrid":20171,"studentid":3083,"przedmiotid":521,"wykladowcaid":60,"terminid":1,"ocenatypid":5,"datamodyfikacji":null},{"ocenaid":54584,"semestrid":20171,"studentid":3083,"przedmiotid":594,"wykladowcaid":60,"terminid":1,"ocenatypid":4,"datamodyfikacji":null},{"ocenaid":54589,"semestrid":20171,"studentid":3083,"przedmiotid":683,"wykladowcaid":60,"terminid":1,"ocenatypid":6,"datamodyfikacji":null},{"ocenaid":54586,"semestrid":20171,"studentid":3083,"przedmiotid":707,"wykladowcaid":60,"terminid":1,"ocenatypid":6,"datamodyfikacji":null},{"ocenaid":54588,"semestrid":20171,"studentid":3083,"przedmiotid":728,"wykladowcaid":60,"terminid":1,"ocenatypid":4,"datamodyfikacji":null},{"ocenaid":54581,"semestrid":20171,"studentid":3083,"przedmiotid":793,"wykladowcaid":60,"terminid":1,"ocenatypid":4,"datamodyfikacji":null},{"ocenaid":54587,"semestrid":20171,"studentid":3083,"przedmiotid":796,"wykladowcaid":60,"terminid":1,"ocenatypid":5,"datamodyfikacji":null},{"ocenaid":54583,"semestrid":20171,"studentid":3083,"przedmiotid":847,"wykladowcaid":60,"terminid":1,"ocenatypid":6,"datamodyfikacji":null}
  ]

}
