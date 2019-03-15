import { Component, OnInit } from '@angular/core';
import {DaneService} from "../dane.service";
import {Note} from "../model/note";

@Component({
  selector: 'app-indeks',
  templateUrl: './indeks.component.html',
  styleUrls: ['./indeks.component.less']
})
export class IndeksComponent implements OnInit {
  notes: Note[];

  constructor(public d : DaneService) { }

  ngOnInit() {
    this.notes = this.d.ocenyBySemesterByStudentByTermin(20171, 3083, 1);
  }

}
