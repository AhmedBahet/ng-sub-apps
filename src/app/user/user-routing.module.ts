//Core imports
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components imports
import {AccountComponent} from "./account/account.component";



const userRoutes: Routes = [
  {path: 'account', component: AccountComponent},
];


@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
