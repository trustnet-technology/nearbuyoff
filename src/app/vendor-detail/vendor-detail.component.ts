import { Component, OnInit, AfterViewInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
declare var $: any;
import { ProductModel } from "../models/productModel";
import { ProductService } from "../services/product.service";
import * as M from "materialize-css";

@Component({
  selector: "app-vendor-detail",
  templateUrl: "./vendor-detail.component.html",
  styleUrls: ["./vendor-detail.component.css"]
})
export class VendorDetailComponent implements OnInit, AfterViewInit {
  options = {
    dist: 0,
    shift: 0,
    padding: 20,
    indicators: false,
    numVisible: -14
  };
  mainLandImage = "https://i.imgur.com/vzYVGZP.jpg";
  mainLazyImage = "https://picsum.photos/id/777/12/8";
  name = "Angular 7";
  lat: any;
  lng: any;
  recommProd: ProductModel[] = [
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
    ),
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
    )
  ];
  mobJeans: ProductModel[] = [];
  mobSs: ProductModel[] = [];
  mobTs: ProductModel[] = [];
  jeans: ProductModel[] = [
    new ProductModel(
      1,
      "Jeans1",
      "Hello",
      "https://hips.hearstapps.com/esq.h-cdn.co/assets/16/51/1280x1280/square-1482518752-501-skinny.jpg?resize=480:*",
      578,
      345,
      5
    ),
    new ProductModel(
      2,
      "Jeans2",
      "Hello",
      "https://assets.macysassets.com/dyn_img/creativepages/seo-msg-jb-01.jpg",
      578,
      345,
      5
    ),
    new ProductModel(
      3,
      "Jeans3",
      "Hello",
      "https://hips.hearstapps.com/esq.h-cdn.co/assets/16/51/1280x1280/square-1482518752-501-skinny.jpg?resize=480:*",
      578,
      345,
      5
    ),
    new ProductModel(
      4,
      "Jeans4",
      "Hello",
      "https://assets.macysassets.com/dyn_img/creativepages/seo-msg-jb-01.jpg",
      578,
      345,
      5
    ),
    new ProductModel(
      5,
      "Jeans5",
      "Hello",
      "https://hips.hearstapps.com/esq.h-cdn.co/assets/16/51/1280x1280/square-1482518752-501-skinny.jpg?resize=480:*",
      578,
      345,
      5
    ),
    new ProductModel(
      6,
      "Jeans6",
      "Hello",
      "https://assets.macysassets.com/dyn_img/creativepages/seo-msg-jb-01.jpg",
      578,
      345,
      5
    ),
    new ProductModel(
      7,
      "Jeans7",
      "Hello",
      "https://bangladeshbusinessdir.com/wp-content/uploads/2017/09/Square-Denims-Limited.jpg",
      578,
      345,
      5
    )
  ];
  tshirts: ProductModel[] = [
    new ProductModel(
      1,
      "T-Shirt1",
      "Hello",
      "https://cdn.shopify.com/s/files/1/0079/5030/3299/products/6_1024x1024@2x.jpg?v=1541438273",
      578,
      345,
      5
    ),
    new ProductModel(
      2,
      "T-Shirt2",
      "Hello",
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/415797/item/goods_45_415797.jpg?width=380",
      578,
      345,
      5
    ),
    new ProductModel(
      3,
      "T-Shirt3",
      "Hello",
      "https://cdn.shopify.com/s/files/1/0079/5030/3299/products/6_1024x1024@2x.jpg?v=1541438273",
      578,
      345,
      5
    ),
    new ProductModel(
      4,
      "T-Shirt4",
      "Hello",
      "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/415797/item/goods_45_415797.jpg?width=380",
      578,
      345,
      5
    ),
    new ProductModel(
      5,
      "T-Shirt5",
      "Hello",
      "https://images.squarespace-cdn.com/content/v1/59a739a97131a56e32c74f1f/1556671763961-RCXVIFBYB2LX7B2OI1PA/ke17ZwdGBToddI8pDm48kGDpvalPb1SqHoCn1hwN0Y57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyLLXgctAyUJRqJUUGWVDK_ZzIgvsybGcZEPqUYiXY8im/IDONTMIND-Vintage-Square-Tee-Black.jpg?format=500w",
      578,
      345,
      5
    ),
    new ProductModel(
      6,
      "T-Shirt6",
      "Hello",
      "https://cdn.shopify.com/s/files/1/0079/5030/3299/products/6_1024x1024@2x.jpg?v=1541438273",
      578,
      345,
      5
    ),
    new ProductModel(
      7,
      "T-Shirt7",
      "Hello",
      "https://images.squarespace-cdn.com/content/v1/59a739a97131a56e32c74f1f/1556671763961-RCXVIFBYB2LX7B2OI1PA/ke17ZwdGBToddI8pDm48kGDpvalPb1SqHoCn1hwN0Y57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyLLXgctAyUJRqJUUGWVDK_ZzIgvsybGcZEPqUYiXY8im/IDONTMIND-Vintage-Square-Tee-Black.jpg?format=500w",
      578,
      345,
      5
    )
  ];
  sweatshirts: ProductModel[] = [
    new ProductModel(
      1,
      "Jeans",
      "Hello",
      "https://static.super-shop.com/949356-480-dc-hoodie-square-star-hd-sodalite-blue.jpg",
      578,
      345,
      5
    ),
    new ProductModel(
      2,
      "Jeans",
      "Hello",
      "https://www.mygildan.com/img/products/185C00/185C00-JA040-Alternate1_lrg.jpg",
      578,
      345,
      5
    ),
    new ProductModel(
      3,
      "Jeans",
      "Hello",
      "https://static.super-shop.com/949356-480-dc-hoodie-square-star-hd-sodalite-blue.jpg",
      578,
      345,
      5
    ),
    new ProductModel(
      4,
      "Jeans",
      "Hello",
      "https://www.mygildan.com/img/products/185C00/185C00-JA040-Alternate1_lrg.jpg",
      578,
      345,
      5
    ),
    new ProductModel(
      5,
      "Jeans",
      "Hello",
      "https://www.burton.com/static/product/S20/16223107001_4.png",
      578,
      345,
      5
    ),
    new ProductModel(
      6,
      "Jeans",
      "Hello",
      "https://www.mygildan.com/img/products/185C00/185C00-JA040-Alternate1_lrg.jpg",
      578,
      345,
      5
    ),
    new ProductModel(
      7,
      "Jeans",
      "Hello",
      "https://www.burton.com/static/product/S20/16223107001_4.png",
      578,
      345,
      5
    )
  ];

  constructor(private productService: ProductService) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lat = +pos.coords.latitude;
        this.lng = +pos.coords.longitude;
      });
    }
  }
  ngOnInit() {
    // this.getApparels();
    this.jquery_code();
    this.mobJeans = this.jeans.slice(0, 6);
    this.mobSs = this.sweatshirts.slice(0, 6);
    this.mobTs = this.tshirts.slice(0, 6);
  }
  ngAfterViewInit() {
    var elems9 = document.querySelectorAll("#vendorProductSlider");
    var instances9 = M.Carousel.init(elems9, this.options);
    var elems4 = document.querySelectorAll("#mz2");
    var instances3 = M.Carousel.init(elems4, this.options);
  }
  // getApparels(): void {
  //   this.productService.getProducts().subscribe(apparels => {
  //     this.apparels = apparels;
  //   });
  // }

  jquery_code() {
    $(document).ready(function() {
      $(".modal").modal();
    });
    $(document).ready(function() {
      $(".materialboxed").materialbox();
    });

    $(document).ready(function() {
      $(".slider").slider();
    });
  }
}
