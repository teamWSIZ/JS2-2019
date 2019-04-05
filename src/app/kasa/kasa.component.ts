import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-kasa',
  templateUrl: './kasa.component.html',
  styleUrls: ['./kasa.component.less']
})
export class KasaComponent implements OnInit {
  @Input() nr: string;  //nazwa kasy
  clients: string[];
  @Input() stanKasy: number = 0;   //ustalamy, że to będzie liczba, i na początku ma być zero

  constructor() { }

  ngOnInit() {
    this.clients = ['klient1',''];
  }

  removeClient() {
    this.clients = this.clients.slice(0,-1);
    this.stanKasy += 10;
  }


}
