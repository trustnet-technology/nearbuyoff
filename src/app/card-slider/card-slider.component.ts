import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as M from "materialize-css";
import { ProductModel } from "../models/productModel";
import { ProductService } from "../services/product.service";
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
    this.getProducts();
    this.getProducts2();
    this.getProducts3();
    this.getProducts4();
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
    var elems3 = document.querySelectorAll("#mz1");
    var elems4 = document.querySelectorAll("#carousel-flat");
    var instances3 = M.Carousel.init(elems3, this.options);
    var instances4 = M.Carousel.init(elems4, this.options);
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe(products => (this.products = products));
  }
  getProducts2(): void {
    this.productService
      .getProducts2()
      .subscribe(products2 => (this.products2 = products2));
  }
  getProducts3(): void {
    this.productService
      .getProducts3()
      .subscribe(products3 => (this.products3 = products3));
  }
  getProducts4(): void {
    this.productService
      .getProducts4()
      .subscribe(products4 => (this.products4 = products4));
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
