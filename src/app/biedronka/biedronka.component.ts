import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biedronka',
  templateUrl: './biedronka.component.html',
  styleUrls: ['./biedronka.component.less']
})
export class BiedronkaComponent implements OnInit {
  kolejki: string[][];
  liczbaKas = 4;

  constructor() {
    this.kolejki = [];
    for (let i = 0; i < this.liczbaKas; i++) {
      this.kolejki.push(['klient0']);
    }
  }

  ngOnInit() {
  }

  moveClientToCheckout($event: string) {
    const wybranaKolejka = Math.floor(Math.random() * this.liczbaKas);
    console.log(`Klient ${$event} kończy zakupy; przechodzi do kolejki ${wybranaKolejka}`);
    this.kolejki[wybranaKolejka].push($event);
  }
}
