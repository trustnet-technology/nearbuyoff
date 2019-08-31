import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  OnChanges
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { ProductModel } from "../../models/productModel";
import { OtpService } from "../../services/otp.service";
import { OtpModel } from "../../models/otp-model";
import * as M from "materialize-css";
import { isVisible } from "ng-lazyload-image/src/scroll-preset/preset";
import { UserControlsService } from "src/app/services/user-controls.service";
import { AddToCartModel, OrderNowModel } from "src/app/models/user.model";
import { delay, filter } from "rxjs/operators";
import { PostLeadModel } from "src/app/models/post-lead.model";
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
  options2 = {
    dist: 0,
    shift: 0,
    padding: 20,
    indicators: false,
    numVisible: -14,
    noWrap: false
  };

  mainLazyImage = "https://picsum.photos/id/777/12/8";
  product: ProductModel;
  productMain: any;
  productM: any;
  productId: any;
  productAttr: any;

  userLog: any;
  loggedIn: number;

  recommProds: any;
  numSellers: number;

  userId: string = "U1212";
  prodAttrId: string = "PA1043";
  prodSellId: string = "PS1043";
  quant: string = "12";
  isActive: string = "true";

  color: any;
  colors: any;
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
    private userControls: UserControlsService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  jquery_code() {
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
    $(document).ready(function() {
      $("#cart-modal").modal();
    });
    $(document).ready(function() {
      $("#selectedTest").formSelect();
    });
    $(document).ready(function() {
      $("#selected2Test").formSelect();
    });
  }

  ngOnInit() {
    this.jquery_code();
    this.count = 0;
    this.loggedIn = 0;
    this.userLog = JSON.parse(localStorage.getItem("authUser"));
    try {
      this.userId = this.userLog.user.userId;
      if (this.userLog.tokenType == "Bearer") {
        this.loggedIn = 1;
      }
    } catch (error) {
      this.userId = "";
      this.loggedIn = 0;
    }
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

    this.getProductDetail();
    this.getProductAttributes();
    this.getRecomProducts();
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
        this.colors = Array.from(this.color.values());
        for (var item of attributes) {
          this.numSellers = item.productSellers.length;
          console.log(item);
        }
      });
  }
  getRecomProducts() {
    const subCategoryID = this.route.snapshot.paramMap.get("subategoryId");
    this.productService.getProductsOfSubCategory(subCategoryID).subscribe(
      success => {
        this.recommProds = success.slice(0, 5);
        console.log(this.recommProds);
      },
      error => console.log(error)
    );
  }
  orderNow(quantity: string) {
    if (this.loggedIn == 0) {
      var toastHTML = "Please Login first";
      M.toast({ html: toastHTML });
    } else if (this.loggedIn == 1) {
      var toastHTML = "Order Placed Successfully";
      let action: OrderNowModel = {
        userId: this.userId,
        productAttributeId: "PA1043",
        productSellerId: "PS1043",
        quantity: quantity,
        statue: "Clear",
        orderPaymentMode: "Credit Card"
      };
      this.userControls.order(action).subscribe(success => {
        success;
        M.toast({ html: toastHTML });
      });
    }
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
    if (this.loggedIn === 0) {
      var toastHTML = "Please Login first";
      M.toast({ html: toastHTML });
    } else if (this.loggedIn === 1) {
      var toastHTML = "<span>Product Added to Cart</span>";
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
  viewAllCart() {
    if (this.loggedIn === 0) {
      var toastHTML = "Please Login first";
      M.toast({ html: toastHTML });
    } else if (this.loggedIn === 1) {
      this.router.navigate(["cart/view"]);
    }
  }
  postLeads() {
    let itemz: PostLeadModel = {
      product_id: "",
      product_variant_id: "",
      user_id: this.userId,
      quantity: 0,
      contact_no: 0,
      customer_name: "",
      vendor_id: ""
    };
    this.userControls
      .postLead(itemz)
      .subscribe(success => console.log(success), error => console.log(error));
  }
}
