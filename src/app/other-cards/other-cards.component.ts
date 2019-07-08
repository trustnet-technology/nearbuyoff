import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-other-cards",
  templateUrl: "./other-cards.component.html",
  styleUrls: ["./other-cards.component.css"]
})
export class OtherCardsComponent implements OnInit {
  mainLazyImage = "https://picsum.photos/id/777/12/8";
  constructor() {}

  ngOnInit() {}
}
