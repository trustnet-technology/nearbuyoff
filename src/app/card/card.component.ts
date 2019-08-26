import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() cardContent: {
    productId: string;
    productName: string;
    imageUrl: string;
    productDesc: string;
    subCategoryId: string;
    createdDate: "2019-03-15T00:00:00.000+0000";
    modifiedDate: "2019-03-15T00:00:00.000+0000";
    prductTitle: string;
    description: string;
    cityId: string;
    isTopProduct: string;
    minPrice: string;
  };
  mainLazyImage = "https://picsum.photos/id/777/12/8";

  constructor() {}

  ngOnInit() {}
}
