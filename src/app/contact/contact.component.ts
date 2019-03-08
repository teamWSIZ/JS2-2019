import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  name: string;
  private actions_count = 0;

  constructor(public users : UsersService) {
    console.log('creating component..');
    this.name = "Wu Xiaolong";
  }

  ngOnInit() {
    console.log(`initializing component; we see ${this.users.systemusers.length} users`);
  }

  someAction() {
    console.log(`Some action; already ${this.actions_count}`);
    this.actions_count++;
  }

}
