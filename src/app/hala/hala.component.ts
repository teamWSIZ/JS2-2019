import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Klient} from "../model/klient";

@Component({
  selector: 'app-hala',
  templateUrl: './hala.component.html',
  styleUrls: ['./hala.component.less']
})
export class HalaComponent implements OnInit {
  clients: Klient[];
  cnt = 0;
  @Output() clientCheckout = new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.clients = [];
  }

  nowyKlient() {
    this.cnt++;
    let nowy = new Klient('klient' + this.cnt, (this.cnt % 5));
    this.clients.push(nowy);
    console.log('W tablicy clients:' + JSON.stringify(this.clients));
  }

  klientKonczy() {
    const last = this.clients[this.clients.length-1];
    this.clientCheckout.emit(last);
    this.clients.pop();
  }

}
