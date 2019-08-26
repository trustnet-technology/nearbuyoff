import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sub-category-card",
  templateUrl: "./sub-category-card.component.html",
  styleUrls: ["./sub-category-card.component.css"]
})
export class SubCategoryCardComponent implements OnInit {
  @Input() subCatContent: {
    mainURL: string;
    subategoryId: string;
    imageURL: string;
    desc: string;
    categoryName: string;
    mrp: number;
    minPrice: number;
    discount: number;
  };
  constructor() {}
  mainImg =
    "https://s3.amazonaws.com/com.nearbyoff.landingpage/assets/veshalka.jpg";
  mainLazyImage = "https://picsum.photos/id/777/12/8";
  ngOnInit() {}
}
