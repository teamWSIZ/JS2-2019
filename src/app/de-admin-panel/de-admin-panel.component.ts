import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {DeUser} from "../model/de-user";
import {HttpClient} from "@angular/common/http";
import {Post} from "../model/post";
import {LogerService} from "../loger.service";
import {DeSubject} from "../model/de-subject";
import {DeGroup} from "../model/de-group";
import {Score} from "../model/score";

@Component({
  selector: 'app-de-admin-panel',
  templateUrl: './de-admin-panel.component.html',
  styleUrls: ['./de-admin-panel.component.less']
})
export class DeAdminPanelComponent implements OnInit {
  users: DeUser[] = [];
  subjects: DeSubject[] = [];
  groups: DeGroup[] = [];
  username: string;
  nuser: DeUser;
  groupOfEditedUser: DeGroup;
  dziwnyNapis = 'dziwna treść';

  dane = [];

  constructor(private d: DataService,
              private http: HttpClient,
              public loger: LogerService) {
  }

  ngOnInit() {
    this.reload();
    this.nuser = new DeUser();
  }

  loadUsers() {
    this.d.getUsers()
      .subscribe(resp => this.users = resp);
  }

  loadSubjects() {
    this.d.getSubjects()
      .subscribe(resp => this.subjects = resp);
  }

  loadGroups() {
    this.d.getGroups()
      .subscribe(resp => this.groups = resp);
  }


  loadPosts() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    this.http.get<Post[]>(url).subscribe(res => {
      console.log(`posts: ${JSON.stringify(res)}`)
    })
  }

  wywolajLogowanieTekstu() {
    this.loger.zaloguj('testowa wiadomość');
  }

  reload() {
    this.loadUsers();
    this.loadGroups();
    this.loadSubjects();
  }

  //Funkcja zapisuje w systemie (na backendzie) usera który jest w zmiennej `this.nuser`
  saveNewUser() {
    console.log('Zapisuję nowego user');
    this.nuser.active = true;
    this.d.saveUser(this.nuser)
      .subscribe(u => {
        console.log(`Zapisano usera: ${JSON.stringify(u)}`);
        this.loadUsers();
      })
  }

  showUser() {
    return JSON.stringify(this.nuser)
  }

  countOfActiveUsers(): number {
    let count = 0;
    for (let u of this.users) {
      if (u.active === true) {
        count++;
      }
    }
    return count;
  }


  sortUnique() {
    this.http.get<Score[]>('http://10.10.0.55:3003/scores').subscribe(scores => {
      let m = new Map<string, Score>();
      for (let s of scores) {
        let best = m.get(s.alias);
        if (best === undefined) best = s;
        if (s.score > best.score) best = s;
        m.set(best.alias, best);
      }
      this.dane = [];
      m.forEach((v, k, s) => {
        this.dane.push(v);
      });
    });
  }

  nice() {
    return JSON.stringify(this.dane);
  }


}
