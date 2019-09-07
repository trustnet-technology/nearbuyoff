import { Component, OnInit } from "@angular/core";
import { VendorService } from "../services/vendor.service";
import { VendorModel } from "../models/vendor-model";

@Component({
  selector: "app-other-cards",
  templateUrl: "./other-cards.component.html",
  styleUrls: ["./other-cards.component.css"]
})
export class OtherCardsComponent implements OnInit {
  mainLazyImage = "https://picsum.photos/id/777/12/8";
  recentVendors: VendorModel[];
  constructor(private vendor: VendorService) {}

  ngOnInit() {
    this.getRecentVendors();
  }
  getRecentVendors() {
    this.vendor.recentVendors().subscribe(recentVendors => {
      this.recentVendors = recentVendors;
      console.log(this.recentVendors);
    });
  }
}
