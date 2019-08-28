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
  mainImg = "https://i.redd.it/zyebk2uhb1j31.jpg";
  mainLazyImage = "https://picsum.photos/id/777/12/8";
  ngOnInit() {}
}
