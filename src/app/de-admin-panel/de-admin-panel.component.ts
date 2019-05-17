import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {DeUser} from "../model/de-user";
import {HttpClient} from "@angular/common/http";
import {Post} from "../model/post";
import {LogerService} from "../loger.service";
import {DeSubject} from "../model/de-subject";

@Component({
  selector: 'app-de-admin-panel',
  templateUrl: './de-admin-panel.component.html',
  styleUrls: ['./de-admin-panel.component.less']
})
export class DeAdminPanelComponent implements OnInit {
  users : DeUser[] = [];
  subjects: DeSubject[] = [];

  constructor(private d : DataService,
              private http: HttpClient,
              public loger: LogerService) { }

  ngOnInit() {
    this.loadSubjects();
  }

  loadUsers() {
    console.log('Loading users...');
    this.d.getUsers()
      .subscribe(userz => {
        this.users = userz;
        console.log(`Loaded ${userz.length} users: ${JSON.stringify(userz)}`);
      })
  }

  loadSubjects() {
    this.d.getSubjects()
      .subscribe(ss => {
        this.subjects = ss;
      })
  }


  loadPosts() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    this.http.get<Post[]>(url).subscribe(res=>{
      console.log(`posts: ${JSON.stringify(res)}`)
    })
  }

  wywolajLogowanieTekstu() {
    this.loger.zaloguj('testowa wiadomość');
  }

}
