import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  url = 'http://10.10.0.55:8082';
  token = '123';

  constructor() { }

  q(path):string {
    return this.url + path + '&token=' + this.token;
  }
}
