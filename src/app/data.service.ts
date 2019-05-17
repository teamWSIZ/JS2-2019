import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {DeUser} from "./model/de-user";
import {GlobalsService} from "./globals.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private g : GlobalsService, private http : HttpClient) {}

   getUsers() : Observable<DeUser[]> {
    const url = this.g.q(`/users?`);
    console.log(`url: ${url}`)
    return this.http.get<DeUser[]>(url);
    // return this.http.post<Note>(url, note);
  }

}
