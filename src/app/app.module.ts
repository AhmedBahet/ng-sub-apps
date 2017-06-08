import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FunnelComponent } from './funnel/funnel.component';
import { UserComponent } from './user/user.component';
import {AppRoutingModule} from "./app-routing.module";
import {UserModule} from "./user/user.module";
import {FunnelModule} from "./funnel/funnel.module";

@NgModule({
  declarations: [
    AppComponent,
    FunnelComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FunnelModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent, FunnelComponent, UserComponent]
})
export class AppModule { }
