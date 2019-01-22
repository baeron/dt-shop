import { Category } from "./../../models/catregory.model";
import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import * as fromStore from "../../store";

@Component({
  selector: "app-category-item",
  templateUrl: "./category-item.component.html",
  styleUrls: ["./category-item.component.scss"]
})
export class CategoryItemComponent implements OnInit {
  category$: Observable<Category>;

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit() {
    this.category$ = this.store.select(fromStore.getSelectedCategory);
  }
}
