import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  systemusers: string[];
  constructor() {
    this.systemusers = ['Aak Sin', 'Xiah No', 'Mo Makesh'];
  }
}
