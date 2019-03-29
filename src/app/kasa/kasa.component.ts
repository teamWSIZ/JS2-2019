import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kasa',
  templateUrl: './kasa.component.html',
  styleUrls: ['./kasa.component.less']
})
export class KasaComponent implements OnInit {
  nr: string;

  constructor() { }

  ngOnInit() {
    this.nr = '2'
  }

}
