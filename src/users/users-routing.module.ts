import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthenticationGuardService } from "./services/authentication-guard.service";

// STORE
import { StoreModule } from "@ngrx/store";

import * as fromContainers from "./containers";

// services
import * as fromServices from "./services";
import { EffectsModule } from "@ngrx/effects";
import { AuthenticationEffects } from "./srore/effects/authentication.effects";
import { reducers } from "src/app/store";

const USER_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "my-account",
    pathMatch: "full"
  },
  {
    path: "sign-in",
    component: fromContainers.SignInComponent
  },
  {
    path: "my-account",
    component: fromContainers.MyAccountComponent,
    canActivate: [AuthenticationGuardService]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([AuthenticationEffects]),
    RouterModule.forChild(USER_ROUTES),
    StoreModule.forFeature("users", reducers)
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers],
  exports: [...fromContainers.containers, RouterModule]
})
export class UsersRoutingModule {}
