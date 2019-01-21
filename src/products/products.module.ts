import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, ProductsRoutingModule]
})
export class ProductsModule {}
