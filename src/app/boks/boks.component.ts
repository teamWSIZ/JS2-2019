import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boks',
  templateUrl: './boks.component.html',
  styleUrls: ['./boks.component.less']
})
export class BoksComponent implements OnInit {
  checked0 = false;
  checked1 = false;
  checked2 = false;

  constructor() { }

  ngOnInit() {
  }

  sumaBitow() {
    let a = 0;
    if (this.checked0) a++;
    if (this.checked1) a++;
    if (this.checked2) a++;
    return a % 2;
  }

}
