import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as M from "materialize-css";
import { ProductModel } from "../models/productModel";
import { ProductService } from "../services/product.service";
import { delay, filter } from "rxjs/operators";
import { SubCategoryModel } from "../models/sub-category.model";

declare var $: any;
@Component({
  selector: "app-card-slider",
  templateUrl: "./card-slider.component.html",
  styleUrls: ["./card-slider.component.css"]
})
export class CardSliderComponent implements OnInit, AfterViewInit {
  options = {
    dist: 0,
    shift: 0,
    padding: 15,
    indicators: false,
    numVisible: -14,
    noWrap: false
  };
  mainLazyImage = "https://picsum.photos/id/777/12/8";
  subCategories: SubCategoryModel[] = [];
  electronics: any[] = [];
  electronics2: any[] = [];
  apparels: any[] = [];
  apparels2: any[] = [];
  decors: any[] = [];
  decors2: any[] = [];
  grocery: any[] = [];
  grocery2: any[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getSubCategories();
    $("#movNxtCarou").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $("#mz1").carousel("next");
    });

    // move prev carousel
    $("#movPrevCarou").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $("#mz1").carousel("prev");
    });
  }
  ngAfterViewInit() {
    var elems4 = document.querySelectorAll("#carousel-flat");
    var instances4 = M.Carousel.init(elems4, this.options);
  }
  getSubCategories() {
    this.productService.getProductsSubcategories().subscribe(subCategories => {
      this.subCategories = subCategories;
      console.log(this.subCategories);
      for (let i = 0; i < this.subCategories.length; i++) {
        if (this.subCategories[i].categoryName === "Home Appliances") {
          this.electronics.push(this.subCategories[i]);
        } else if (this.subCategories[i].categoryName === "Apparel") {
          this.apparels.push(this.subCategories[i]);
        } else if (this.subCategories[i].categoryName === "Decor") {
          this.decors.push(this.subCategories[i]);
        } else if (this.subCategories[i].categoryName === "Grocery") {
          this.grocery.push(this.subCategories[i]);
        }
      }
      this.grocery2 = this.grocery.slice(0, 4);
      this.electronics2 = this.electronics.slice(0, 4);
      this.decors2 = this.decors.slice(0, 4);
      this.apparels2 = this.apparels.slice(0, 4);
      console.log(this.electronics);
    });
  }
}
