import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//
import { CategoryItemComponent } from './containers/category-item/category-item.component';
import { CategorysComponent } from './containers/categorys/categorys.component';

// containers
import * as fromContainers from './containers';

// services
import * as fromServices from './services';

export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.CategorysComponent,
  },
  {
    path: ':id',
    component: fromContainers.CategoryItemComponent,
  },
/*
  {
    path: 'new',
    component: fromContainers.CategoryItemComponent,
  },
*/
];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  providers: [...fromServices.services],
  declarations: [
    CategoryItemComponent,
    CategorysComponent,
    ...fromContainers.containers],
  exports: [...fromContainers.containers, RouterModule]
})
export class ProductsRoutingModule { }
