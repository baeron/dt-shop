import { ProductItemComponentComponent } from "./product-containers/product-item-component/product-item-component.component";
import { ProductComponentComponent } from "./product-containers/product-component/product-component.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

// components
import * as fromComponents from "./components";

// containers
import * as fromContainers from "./containers";

// services
import * as fromServices from "./services";

export const ROUTES: Routes = [
  {
    path: "",
    component: fromContainers.CategorysComponent
  },
  {
    path: ":categoryId",
    component: fromContainers.CategoryItemComponent
  }
  /*
  {
    path: ":categoryId/products",
    component: fromProductContainers.ProductComponentComponent
  },
  {
    path: ":/categoryId/products/:id",
    component: fromProductContainers.ProductItemComponentComponent
  }
  */
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  providers: [...fromServices.services],
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components,
    ProductComponentComponent,
    ProductItemComponentComponent
  ],
  exports: [
    ...fromContainers.containers,
    ...fromComponents.components,
    RouterModule
  ]
})
export class ProductsRoutingModule {}
