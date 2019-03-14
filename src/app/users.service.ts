import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public userzy = ['Wu Xiaoli', 'Nash Gordon', 'Aleksii Burov'];

  constructor() { }
}
