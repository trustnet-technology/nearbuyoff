import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ProductService } from "../../services/product.service";
import { ProductModel } from "../../models/productModel";
import { OtpService } from "src/app/services/otp.service";
import { OtpModel } from "src/app/models/otp-model";
declare var $: any;
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  mainLazyImage = "https://picsum.photos/id/777/12/8";
  product: ProductModel;
  product2: ProductModel;
  product3: ProductModel;
  product4: ProductModel;
  lat: 34.052235;
  lng: -118.243683;
  otpMessage: OtpModel;
  otpRecvMessage: OtpModel;
  otpDET: string;
  phoneDET: string;
  positions = [
    {
      post_country: "Los Angeles",
      post_latitude: 34.052235,
      post_longitude: -118.243683
    },
    {
      post_country: "Santa Monica",
      post_latitude: 34.024212,
      post_longitude: -118.496475
    },
    {
      post_country: "Redondo Beach",
      post_latitude: 33.849182,
      post_longitude: -118.388405
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private otpService: OtpService
  ) {}

  jquery_code() {
    $(document).ready(function() {
      $("#productPageCarousel").carousel({
        dist: 0,
        shift: 0,
        padding: 60,
        indicators: false,
        numVisible: -14
      });
    });
    $(document).ready(function() {
      $("#modal-buyers").modal();
    });
    $(document).ready(function() {
      $("#modal-otp").modal();
    });
    $(document).ready(function() {
      $("#modal-verify").modal();
    });
    $(document).ready(function() {
      $("#verified-modal").modal();
    });
    $(document).ready(function() {
      $(".materialboxed").materialbox();
    });
    (function($) {
      $(function() {
        $("#social-dropdown").dropdown({
          inDuration: 300,
          outDuration: 225,
          constrainWidth: false,
          hover: true, // Activate on hover // Displays dropdown below the button
          coverTrigger: false // Displays dropdown with edge aligned to the left of button
        });
      }); // End Document Ready
    })(jQuery);
  }

  ngOnInit(): void {
    this.jquery_code();
    this.getProduct();
    this.getProduct2();
    this.getProduct3();
    this.getProduct4();
  }

  getProduct(): void {
    const productID = +this.route.snapshot.paramMap.get("productID");
    this.productService
      .getProduct(productID)
      .subscribe(product => (this.product = product));
  }
  getProduct2(): void {
    const productID = +this.route.snapshot.paramMap.get("productID");
    this.productService
      .getProduct2(productID)
      .subscribe(product2 => (this.product2 = product2));
  }
  getProduct3(): void {
    const productID = +this.route.snapshot.paramMap.get("productID");
    this.productService
      .getProduct3(productID)
      .subscribe(product3 => (this.product3 = product3));
  }
  getProduct4(): void {
    const productID = +this.route.snapshot.paramMap.get("productID");
    this.productService
      .getProduct4(productID)
      .subscribe(product4 => (this.product4 = product4));
  }

  getOTP(phoneNo: string): void {
    this.otpService
      .getOTP(phoneNo)
      .subscribe(otpMessage => (this.otpMessage = otpMessage));
    // this.otpDET = this.otpMessage.Details;
  }
  sendOTP(otpVal: string): void {
    this.otpService
      .sendOTP(otpVal, this.otpMessage.Details)
      .subscribe(otpRecvMessage => (this.otpRecvMessage = otpRecvMessage));
    // this.phoneDET = this.otpRecvMessage.Details;
    console.log(this.otpMessage.Details);
  }
}
