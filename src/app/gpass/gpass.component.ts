import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpass',
  templateUrl: './gpass.component.html',
  styleUrls: ['./gpass.component.less']
})
export class GpassComponent implements OnInit {

  m = new Map<string,string>(); //deklaracja mapy

  constructor() { }

  ngOnInit() {
    //wrzucenie przykladowych haseł do mapy
    this.m.set('user1', 'very_secret_1');
    this.m.set('user2', 'very_secret_2');
  }

  aaa() {
    this.m.set('abra', 'kadabra');  // "kadabra" to haslo dla klucza "abra"
    console.log(this.m.get('abra'));
    this.m.set('abra', '!!!!!!'); //nadpisuje
    console.log(this.m.get('abra'));    //teraz '!!!!!!'
    console.log(this.m.get('nnnn'));    //undefined
  }

}
