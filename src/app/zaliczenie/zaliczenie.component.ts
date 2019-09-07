import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zaliczenie',
  templateUrl: './zaliczenie.component.html',
  styleUrls: ['./zaliczenie.component.less']
})
export class ZaliczenieComponent implements OnInit {

  passwords: Map<string, string>;
  user_in_edit : string;
  pass_in_edit : string;
  newpass_in_edit: string;

  ggg = {'u': ''};

  constructor() { }

  ngOnInit() {
    this.passwords = new Map<string, string>();
    this.user_in_edit = 'aa';
  }

  checkPassword() {
    alert('User: ' + this.pass_in_edit);
  }



}
