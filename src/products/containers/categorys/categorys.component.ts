import { Category } from "./../../models/catregory.model";
import { CategoryService } from "./../../services/category.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categorys",
  templateUrl: "./categorys.component.html",
  styleUrls: ["./categorys.component.scss"]
})
export class CategorysComponent implements OnInit {
  categoryList: Category[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories => {
      this.categoryList = categories;
    });
  }
}
