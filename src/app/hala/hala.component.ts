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
    this.cnt++;
    this.clients.push('klient' + this.cnt);
  }

  klientKonczy() {
    const last = this.clients[this.clients.length-1];
    this.clientCheckout.emit(last);
    this.clients.pop();
  }

}
