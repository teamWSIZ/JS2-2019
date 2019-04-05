import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hala',
  templateUrl: './hala.component.html',
  styleUrls: ['./hala.component.less']
})
export class HalaComponent implements OnInit {
  clients: string[];
  cnt = 0;
  @Output() clientCheckout = new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.clients = ['aa'];
  }

  nowyKlient() {
    this.clients.push('klient');
  }

  klientKonczy() {
    this.cnt++;
    const nazwaKlienta = 'klient' + this.cnt;
    this.clientCheckout.emit(nazwaKlienta);
  }

}
