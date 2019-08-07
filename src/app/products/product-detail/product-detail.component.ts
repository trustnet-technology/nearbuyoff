import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { ProductModel } from "../../models/productModel";
import { OtpService } from "../../services/otp.service";
import { OtpModel } from "../../models/otp-model";
import * as M from "materialize-css";
import { isVisible } from "ng-lazyload-image/src/scroll-preset/preset";
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
  plat: any;
  plng: any;
  otpMessage: any;
  count: number;
  otpRecvMessage: any;
  otpDET: string;
  phoneDET: string;
  selectedItem1: boolean;
  selectedItem2: boolean;
  selectedItem3: boolean;
  selectedItem4: boolean;
  markers = [
    { lat: 12.9763946, lng: 77.5992796 },
    { lat: 12.9399071, lng: 77.6201755 },
    { lat: 12.9368682, lng: 77.6180538 },
    { lat: 12.912491, lng: 77.6422287 }
  ];
  public dir: {
    origin: { lat: any; lng: any };
    destination: { lat: any; lng: any };
    renderOptions: { polylineOptions: { strokeColor: "#f00" } };
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
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
    jQuery(document).ready(function() {
      jQuery("#social-dropdown").on("click", function(event) {
        jQuery("#soc-share").toggle();
      });
    });
    (function($) {
      $(function() {
        $("#social-dropdown").dropdown({
          inDuration: 300,
          outDuration: 225,
          constrainWidth: false,
          hover: true,
          coverTrigger: false
        });
      });
    })(jQuery);
    $(document).ready(function() {
      $("#cart-modal").modal();
    });
  }

  ngOnInit(): void {
    this.count = 0;
    this.selectedItem1 = false;
    this.selectedItem2 = false;
    this.selectedItem3 = false;
    this.selectedItem4 = false;
    this.dir = {
      origin: { lat: 12.9344758, lng: 77.6192442 },
      destination: { lat: 12.9763946, lng: 77.5992796 },
      renderOptions: { polylineOptions: { strokeColor: "#f00" } }
    };
    console.log(this.dir);
    this.plat = 12.972442;
    this.plng = 77.580643;
    console.log(this.plat, this.plng);
    this.jquery_code();
    this.getProduct();
    this.getProduct2();
    this.getProduct3();
    this.getProduct4();
  }
  selectDir() {
    this.selectedItem1 = true;
    this.selectedItem2 = false;
    this.selectedItem3 = false;
    this.selectedItem4 = false;
    this.count = 1;
    this.dir = {
      origin: { lat: 12.9344758, lng: 77.6192442 },
      destination: { lat: 12.9763946, lng: 77.5992796 },
      renderOptions: { polylineOptions: { strokeColor: "#f00" } }
    };
  }
  selectDir2() {
    this.selectedItem1 = false;
    this.selectedItem2 = true;
    this.selectedItem3 = false;
    this.selectedItem4 = false;
    this.count = 1;
    this.dir = {
      origin: { lat: 12.9344758, lng: 77.6192442 },
      destination: { lat: 12.9399071, lng: 77.6201755 },
      renderOptions: { polylineOptions: { strokeColor: "#f00" } }
    };
  }
  selectDir3() {
    this.selectedItem1 = false;
    this.selectedItem2 = false;
    this.selectedItem3 = true;
    this.selectedItem4 = false;
    this.count = 1;
    this.dir = {
      origin: { lat: 12.9344758, lng: 77.6192442 },
      destination: { lat: 12.9368682, lng: 77.6180538 },
      renderOptions: { polylineOptions: { strokeColor: "#f00" } }
    };
  }
  selectDir4() {
    this.selectedItem1 = false;
    this.selectedItem2 = false;
    this.selectedItem3 = false;
    this.selectedItem4 = true;
    this.count = 1;
    this.dir = {
      origin: { lat: 12.9344758, lng: 77.6192442 },
      destination: { lat: 12.912491, lng: 77.6422287 },
      renderOptions: { polylineOptions: { strokeColor: "#f00" } }
    };
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
      .subscribe(
        (otpMessage: OtpModel[]) => (this.otpMessage = { ...otpMessage })
      );
  }
  sendOTP(otpVal: string, getOTPDet: string): void {
    this.otpService
      .sendOTP(otpVal, getOTPDet)
      .subscribe(
        (otpRecvMessage: OtpModel[]) =>
          (this.otpRecvMessage = { ...otpRecvMessage })
      );
  }
  addProductToCart() {
    var toastHTML =
      '<span>Product Added to Cart</span><button class="btn-flat toast-action modal-trigger" data-target="cart-modal">View Cart</button>';
    M.toast({ html: toastHTML });
  }
}
