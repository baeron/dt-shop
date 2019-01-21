import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
/*
import { CategoryItemComponent } from './containers/category-item/category-item.component';
import { CategorysComponent } from './containers/categorys/categorys.component';
*/
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule
  ],
})
export class ProductsModule { }
