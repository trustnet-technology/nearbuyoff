import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as M from "materialize-css";
import { ProductModel } from "../models/productModel";
import { ProductService } from "../services/product.service";
import { delay, filter } from "rxjs/operators";

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
  subCategories: any;
  electronics: any[] = [];
  apparels: any[] = [];
  decors: any[] = [];
  grocery: any[] = [];
  grocery2: any[] = [];
  products: ProductModel[];
  products2: ProductModel[];
  mobProducts: ProductModel[] = [];
  mobProducts2: ProductModel[] = [];
  mobProducts3: ProductModel[] = [];
  mobProducts4: ProductModel[] = [];
  products3: ProductModel[];
  products4: ProductModel[];
  products5: ProductModel[] = [
    new ProductModel(
      65,
      "Blazers",
      "something",
      "../../assets/beanSuit.jpg",
      9871,
      7891,
      10
    ),
    new ProductModel(
      65,
      "Suits",
      "something",
      "../../assets/suits.jpg",
      9871,
      7891,
      10
    ),
    new ProductModel(
      65,
      "Offers on Tea",
      "something",
      "../../assets/teaThing.jpg",
      9871,
      7891,
      10
    ),
    new ProductModel(
      65,
      "Interior Designs",
      "something",
      "../../assets/howHome.jpg",
      9871,
      7891,
      10
    ),
    new ProductModel(
      65,
      "Women Accessories",
      "something",
      "../../assets/ladyAccs.jpg",
      9871,
      7891,
      10
    ),
    new ProductModel(
      65,
      "Adidas Yeezy",
      "something",
      "../../assets/yeezy.jpg",
      9871,
      7891,
      10
    ),
    new ProductModel(
      65,
      "Chinos",
      "something",
      "../../assets/chinosVans.jpg",
      9871,
      7891,
      10
    )
  ];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getSubCategories();
    this.getMobProducts();
    this.getMobProducts2();
    this.getMobProducts3();
    this.getMobProducts4();
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
  initCarousel() {
    setTimeout(() => {
      let elems = document.querySelectorAll(".carousel");
      let instances = M.Carousel.init(elems, this.options);
    }, 100);
  }
  getSubCategories() {
    this.productService.getProductsSubcategories().subscribe(subCategories => {
      this.subCategories = subCategories;
      for (let i = 0; i < subCategories.length; i++) {
        if (subCategories[i].categoryName === "Home Appliances") {
          this.electronics.push(subCategories[i]);
        } else if (subCategories[i].categoryName === "Apparels") {
          this.apparels.push(subCategories[i]);
        } else if (subCategories[i].categoryName === "Decor") {
          this.decors.push(subCategories[i]);
        } else if (subCategories[i].categoryName === "Grocery") {
          this.grocery.push(subCategories[i]);
        }
      }
      this.grocery2 = this.grocery.slice(0, 4);
      console.log(this.electronics);
    });
  }
  getMobProducts(): void {
    this.productService
      .getProducts()
      .subscribe(mobProducts => (this.mobProducts = mobProducts.slice(0, 6)));
  }
  getMobProducts2(): void {
    this.productService
      .getProducts2()
      .subscribe(
        mobProducts2 => (this.mobProducts2 = mobProducts2.slice(0, 6))
      );
  }
  getMobProducts3(): void {
    this.productService
      .getProducts3()
      .subscribe(
        mobProducts3 => (this.mobProducts3 = mobProducts3.slice(0, 6))
      );
  }
  getMobProducts4(): void {
    this.productService
      .getProducts4()
      .subscribe(
        mobProducts4 => (this.mobProducts4 = mobProducts4.slice(0, 6))
      );
  }
}
