import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {DeUser} from "./model/de-user";
import {GlobalsService} from "./globals.service";
import {HttpClient} from "@angular/common/http";
import {DeSubject} from "./model/de-subject";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private g : GlobalsService, private http : HttpClient) {}

   getUsers() : Observable<DeUser[]> {
    //zbieramy przedmiotów z http://10.10.0.55:8082/subjects?token=123
    //zbieramy przedmiotów z http://10.10.0.55:8082/users?token=123
    const url = this.g.q(`/users?`);
    console.log(`url: ${url}`);
    return this.http.get<DeUser[]>(url);
    // return this.http.post<Note>(url, note);
  }

  getSubjects() : Observable<DeSubject[]> {
    const url = this.g.q(`/subjects?`);
    console.log(`url: ${url}`);
    return this.http.get<DeSubject[]>(url);
  }


}
