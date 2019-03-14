import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Kontakt} from "../model/kontakt";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less']
})
export class ProgressComponent implements OnInit {
  @Input() name: string;
  @Input() fullContact: Kontakt;
  @Output() nameChanged = new EventEmitter();  //will emit values; can customize what the parent will do in such case

  constructor() { }

  ngOnInit() {
  }

  addS() {
    this.name += 's';
    this.nameChanged.emit(this.name);
  }

  addKontaktX() {
    this.fullContact.imie += 'x';
  }

}
