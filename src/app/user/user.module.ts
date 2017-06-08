import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import {UserRoutingModule} from "./user-routing.module";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [AccountComponent]
})
export class UserModule { }
