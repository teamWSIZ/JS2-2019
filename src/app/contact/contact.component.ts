import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {Kontakt} from "../model/kontakt";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  adres = "Avenida de la Victoria 1, Lima, Peru";
  houseNumber = 2;
  x = 0;
  edytowanyKontakt: Kontakt;

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    console.log('Klasa kontaktowa została zbudowana')
    this.edytowanyKontakt = new Kontakt();
  }

  mojaAkcja() {
    this.x = this.x + 1;
    console.log('Akcja wykonana! Button został naciśnięty ' + this.x + ' razy');
  }

}
