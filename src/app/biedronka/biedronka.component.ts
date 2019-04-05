import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biedronka',
  templateUrl: './biedronka.component.html',
  styleUrls: ['./biedronka.component.less']
})
export class BiedronkaComponent implements OnInit {
  kolejki: string[][];
  n = 3;

  constructor() {
    this.kolejki = [];
    for (let i = 0; i < this.n; i++) {
      this.kolejki.push(['klient0']);
    }
  }

  ngOnInit() {
  }

  moveClientToCheckout($event: string) {
    console.log('Klient kończy zakupy: ' + $event);
    this.kolejki[1].push($event);

  }
}
