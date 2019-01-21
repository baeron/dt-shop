import { Category } from "./../../models/catregory.model";
// import { CategoryService } from "./../../services/category.service";
import { Component, OnInit } from "@angular/core";

// производим замену нашего сервиса на STORE и Observable
import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';
// выгребаем весь объект STORE ранее созданный нами
import * as fromStore from '../../store';
import { Observable } from 'rxjs';


@Component({
  selector: "app-categorys",
  templateUrl: "./categorys.component.html",
  styleUrls: ["./categorys.component.scss"]
})
export class CategorysComponent implements OnInit {
  categories$: Observable<Category[]>;

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    /*
    this.store.select<any>('products').subscribe(state => {
      console.log(state);
    });
    */

    this.categories$ = this.store.select<any>(fromStore.getAllCategories);
  }
}
