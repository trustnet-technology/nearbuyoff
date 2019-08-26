import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { ProductModel } from "../../models/productModel";
import { OtpService } from "../../services/otp.service";
import { OtpModel } from "../../models/otp-model";
import * as M from "materialize-css";
import { isVisible } from "ng-lazyload-image/src/scroll-preset/preset";
import { UserControlsService } from "src/app/services/user-controls.service";
import { AddToCartModel } from "src/app/models/user.model";
declare var $: any;
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  options = {
    dropdownOptions: {
      onCloseStart: () => {
        console.log("Close Start from dropdownOptions");
      }
    }
  };

  mainLazyImage = "https://picsum.photos/id/777/12/8";
  product: ProductModel;
  product2: ProductModel;
  product3: ProductModel;
  product4: ProductModel;
  productMain: any;
  productM: any;
  productId: any;
  productAttr: any;

  recommProds: any;

  userId: string = "U1212";
  prodAttrId: string = "PA1043";
  prodSellId: string = "PS1043";
  quant: string = "12";
  isActive: string = "true";

  color: any;
  size: any;
  weight: any;

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
  selectedSeller: string;
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
    private otpService: OtpService,
    private userControls: UserControlsService
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
    // (function($) {
    //   $(function() {
    //     $("#color-btn").dropdown({
    //       inDuration: 300,
    //       outDuration: 225,
    //       constrainWidth: false,
    //       hover: false,
    //       coverTrigger: false
    //     });
    //   });
    // })(jQuery);
    // (function($) {
    //   $(function() {
    //     $("#size-btn").dropdown({
    //       inDuration: 300,
    //       outDuration: 225,
    //       constrainWidth: false,
    //       hover: false,
    //       coverTrigger: false
    //     });
    //   });
    // })(jQuery);
    // (function($) {
    //   $(function() {
    //     $("#qty-btn").dropdown({
    //       inDuration: 300,
    //       outDuration: 225,
    //       constrainWidth: false,
    //       hover: false,
    //       coverTrigger: false
    //     });
    //   });
    // })(jQuery);
    // (function($) {
    //   $(function() {
    //     $("#size-grocery-btn").dropdown({
    //       inDuration: 300,
    //       outDuration: 225,
    //       constrainWidth: false,
    //       hover: false,
    //       coverTrigger: false
    //     });
    //   });
    // })(jQuery);
    // $(document).ready(function() {
    //   $("#selectedTest").formSelect();
    // });
  }

  ngOnInit() {
    // var elem = document.querySelector("select");
    // var instance = M.FormSelect.init(elem, this.options);
    this.jquery_code();
    this.count = 0;
    this.selectedItem1 = false;
    this.selectedItem2 = false;
    this.selectedItem3 = false;
    this.selectedItem4 = false;
    this.selectedSeller = "PS1043";
    this.dir = {
      origin: { lat: 12.9344758, lng: 77.6192442 },
      destination: { lat: 12.9763946, lng: 77.5992796 },
      renderOptions: { polylineOptions: { strokeColor: "#f00" } }
    };
    console.log(this.dir);
    this.plat = 12.972442;
    this.plng = 77.580643;
    console.log(this.plat, this.plng);

    // this.getProduct();
    this.getProductDetail();
    this.getProductAttributes();
    this.getProduct2();
    this.getProduct3();
    this.getProduct4();
  }

  log() {
    console.log("logging");
  }
  selectDir() {
    this.selectedItem1 = true;
    this.selectedItem2 = false;
    this.selectedItem3 = false;
    this.selectedItem4 = false;
    this.selectedSeller = "PS1043";
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
    this.selectedSeller = "PS1043";
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
    this.selectedSeller = "PS1043";
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
    this.selectedSeller = "PS1043";
    this.count = 1;
    this.dir = {
      origin: { lat: 12.9344758, lng: 77.6192442 },
      destination: { lat: 12.912491, lng: 77.6422287 },
      renderOptions: { polylineOptions: { strokeColor: "#f00" } }
    };
  }
  getProductDetail() {
    const productID = this.route.snapshot.paramMap.get("productId");
    this.productId = productID;
    const subCategoryID = this.route.snapshot.paramMap.get("subategoryId");
    console.log(subCategoryID, productID);
    this.productService.getProductsOfSubCategory(subCategoryID).subscribe(
      products => {
        this.productMain = products;
        for (let i = 0; i < products.length; i++) {
          if (this.productMain[i].productId === productID) {
            this.productM = this.productMain[i];
          }
        }
        console.log(this.productM);
      },
      error => console.log(error)
    );
  }
  getProductAttributes() {
    const productID = this.route.snapshot.paramMap.get("productId");
    this.color = new Set();
    this.weight = new Set();
    this.size = new Set();
    this.productService
      .getProductDetails(productID, "1", "2")
      .subscribe(attributes => {
        this.productAttr = attributes;
        console.log(attributes.length);
        for (let i = 0; i < attributes.length; i++) {
          this.color.add(attributes[i].productAttribute.color);
          this.size.add(attributes[i].productAttribute.color);
          this.weight.add(attributes[i].productAttribute.color);
          console.log(attributes[i].productAttribute.color);
        }
        console.log(this.color);
      });
  }
  getRecomProducts() {
    const subCategoryID = this.route.snapshot.paramMap.get("subategoryId");
    this.productService.getProductsOfSubCategory(subCategoryID).subscribe(
      success => {
        this.recommProds = success;
      },
      error => console.log(error)
    );
  }

  // getProduct(): void {
  //   const productID = +this.route.snapshot.paramMap.get("productID");
  //   this.productService
  //     .getProduct(productID)
  //     .subscribe(product => {this.product = product;product.find( product=>)});
  // }
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
      '<span>Product Added to Cart</span><button class="btn-flat toast-action modal-trigger" data-target="cart-item-modal">View Cart</button>';
    let cartBody: AddToCartModel = {
      userId: this.userId,
      productAttributeId: this.prodAttrId,
      productSellerId: this.prodSellId,
      quantity: this.quant,
      isActive: this.isActive
    };
    this.userControls.addToCart(cartBody).subscribe(
      success => {
        console.log(success.isActive);
        M.toast({ html: toastHTML });
      },
      error => console.log(error)
    );
  }
}
