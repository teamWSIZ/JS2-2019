import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {DeUser} from "./model/de-user";
import {GlobalsService} from "./globals.service";
import {HttpClient} from "@angular/common/http";
import {DeSubject} from "./model/de-subject";
import {DeGroup} from "./model/de-group";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private g : GlobalsService, private http : HttpClient) {}

  //zbieramy przedmiotów z http://10.10.0.55:8082/subjects?token=123
  //zbieramy przedmiotów z http://10.10.0.55:8082/users?token=123
  // return this.http.post<Note>(url, note);


  getUsers() : Observable<DeUser[]> {
    const url = this.g.q(`/users?`);
    return this.http.get<DeUser[]>(url);
  }

  getSubjects() : Observable<DeSubject[]> {
    const url = this.g.q(`/subjects?`);
    return this.http.get<DeSubject[]>(url);
  }

  getGroups() : Observable<DeGroup[]> {
    const url = this.g.q(`/groups?`);
    return this.http.get<DeGroup[]>(url);
  }

  saveUser(u : DeUser) : Observable<DeUser> {
    const url = this.g.q(`/users?`);
    return this.http.post<DeUser>(url, u);
  }
}
