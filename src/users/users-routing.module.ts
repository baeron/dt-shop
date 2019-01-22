import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// STORE
import { StoreModule } from "@ngrx/store";
import { reducers } from "./srore";

import * as fromContainers from "./containers";

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
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(USER_ROUTES),
    StoreModule.forFeature("users", reducers)
  ],
  declarations: [...fromContainers.containers],
  exports: [...fromContainers.containers, RouterModule]
})
export class UsersRoutingModule {}
