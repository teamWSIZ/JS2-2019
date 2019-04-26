import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Klient} from "../model/klient";
import {interval, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-hala',
  templateUrl: './hala.component.html',
  styleUrls: ['./hala.component.less']
})
export class HalaComponent implements OnInit {
  clients: Klient[];
  cnt = 0;
  @Output() clientCheckout = new EventEmitter();
  newClientEmitter: Observable<number>;
  reactToClients: Subscription;


  constructor() { }

  ngOnInit() {
    this.clients = [];
    this.newClientEmitter = interval(1000);
    this.reactToClients = this.newClientEmitter.subscribe(n => {
      console.log(n);
      this.nowyKlient();
    })
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

  closeShop() {
    this.reactToClients.unsubscribe();
  }

  onKey($event: KeyboardEvent) {
    console.log($event.key);
  }
}
