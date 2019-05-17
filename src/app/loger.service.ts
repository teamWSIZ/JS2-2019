import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogerService {

  constructor() { }

  zaloguj(tekst: string) {
    console.log(`Loguję: ${tekst}`);
  }

}
