import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {BiedronkaComponent} from "./biedronka/biedronka.component";
import {DeAdminPanelComponent} from "./de-admin-panel/de-admin-panel.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'biedronka', component: BiedronkaComponent },
  { path: 'de-admin', component: DeAdminPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
