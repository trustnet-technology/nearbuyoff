import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() cardContent: {
    mainURL: string;
    title: string;
    photoURL: string;
    desc: string;
    mrp: number;
    price: number;
    discount: number;
  };
  mainLazyImage = "https://picsum.photos/id/777/12/8";

  constructor() {}

  ngOnInit() {}
}
