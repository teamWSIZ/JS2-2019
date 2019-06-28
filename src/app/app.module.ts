import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { ProgressComponent } from './progress/progress.component';
import { ZegarComponent } from './zegar/zegar.component';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { BiedronkaComponent } from './biedronka/biedronka.component';
import { KasaComponent } from './kasa/kasa.component';
import { HalaComponent } from './hala/hala.component';
import {FormsModule} from "@angular/forms";
import { BoksComponent } from './boks/boks.component';
import { DeAdminPanelComponent } from './de-admin-panel/de-admin-panel.component';
import {HttpClientModule} from "@angular/common/http";
import { DeLoginComponent } from './de-login/de-login.component';
import { GpassComponent } from './gpass/gpass.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    ProgressComponent,
    ZegarComponent,
    TypewriterComponent,
    BiedronkaComponent,
    KasaComponent,
    HalaComponent,
    BoksComponent,
    DeAdminPanelComponent,
    DeLoginComponent,
    GpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
