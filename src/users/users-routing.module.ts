import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// STORE
import { StoreModule } from "@ngrx/store";

import * as fromContainers from "./containers";

// services
import * as fromServices from "./services";

const USER_ROUTES: Routes = [
  {
    path: "",
    component: fromContainers.SignInComponent
  },
  {
    path: "my-account",
    component: fromContainers.MyAccountComponent
  },
  {
    path: "sign-out",
    component: fromContainers.SignOutComponent
  },
  {
    path: "sign-up",
    component: fromContainers.SignUpComponent
  },
  {
    path: "sign-up",
    component: fromContainers.SignUpComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(USER_ROUTES),
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers],
  exports: [...fromContainers.containers, RouterModule]
})
export class UsersRoutingModule {}
