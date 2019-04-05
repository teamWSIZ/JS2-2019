import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-kasa',
  templateUrl: './kasa.component.html',
  styleUrls: ['./kasa.component.less']
})
export class KasaComponent implements OnInit {
  @Input() nr: string;  //nazwa kasy
  @Input() kolejka: string[];
  @Input() stanKasy: number = 0;   //ustalamy, że to będzie liczba, i na początku ma być zero

  constructor() { }

  ngOnInit() {
  }

  removeClient() {
    this.kolejka = this.kolejka.slice(0,-1);
    this.stanKasy += 10;
  }

  addClient(aa: string) {
    this.kolejka.push(aa);
  }
}


/**
 * - dodać zmienną clients do hali, ustawić początkowo na = ['aa']
 * - wyświetlić ikonkli klientów pod obrazkiem półki warzywnej
 * - dodać przycisk dodawania klientów
 * - dodać przycisk "klient kończy zakupy"
 *
 *
 */
