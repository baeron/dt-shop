import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from "@ngrx/router-store";
import { StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

// not used in production
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { storeFreeze } from "ngrx-store-freeze";

import { reducers, CustomSerializer } from "./store";

// this would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

// routes
export const ROUTES: Routes = [
  { path: "", pathMatch: "full", redirectTo: "products" },
  {
    path: "products",
    loadChildren: "../products/products.module#ProductsModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    environment.development ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  exports: [RouterModule]
})
export class AppRoutingModule {}
