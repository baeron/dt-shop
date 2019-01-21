import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-category-item",
  templateUrl: "./category-item.component.html",
  styleUrls: ["./category-item.component.scss"]
})
export class CategoryItemComponent implements OnInit {
  @Input() category: any;

  constructor() {}

  ngOnInit() {}
}
