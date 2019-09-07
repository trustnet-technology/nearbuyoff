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
  config = {
    displayKey: "description", //if objects array passed which key to be displayed defaults to description
    search: false, //true/false for the search functionlity defaults to false,
    height: "auto", //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: "Select", // text to be displayed when no item is selected defaults to Select,
    customComparator: () => {}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: 5, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: "more", // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: "No results found!", // text to be displayed when no items are found while searching
    searchPlaceholder: "Search", // label thats displayed in search input,
    searchOnKey: "name" // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
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
  numSellers: number[] = [];

  userId: string = "U1212";
  contactNum: string;
  userName: string;
  prodAttrId: string = "PA1043";
  prodSellId: string = "PS1043";
  quant: string = "12";
  isActive: string = "true";

  color: any;
  colors: any;
  colorz: string[] = [];
  size: any;
  weight: any;

  productAttr0: any;

  plat: any;
  plng: any;
  slat: any;
  slng: any;
  location: any;

  otpMessage: any;
  count: number;
  otpRecvMessage: any;
  otpDET: string;
  phoneDET: string;
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
      $("#selectedTest")
        .not(".disabled")
        .formSelect();
    });
    $(document).ready(function() {
      $("#pymt-select").formSelect();
    });
  }

  ngOnInit() {
    this.jquery_code();
    this.count = 0;
    this.loggedIn = 0;
    this.userLog = JSON.parse(localStorage.getItem("authUser"));
    this.location = JSON.parse(localStorage.getItem("currentCity"));
    try {
      this.userId = this.userLog.user.userId;
      this.contactNum = this.userLog.user.phoneNum;
      this.userName = this.userLog.user.firstName;
      this.slat = this.location.lat;
      this.slng = this.location.lng;
      if (this.userLog.tokenType == "Bearer") {
        this.loggedIn = 1;
      }
    } catch (error) {
      this.userId = "";
      this.loggedIn = 0;
      this.slat = "10";
      this.slng = "20";
    }
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
    this.getProductAttributes(this.slat, this.slng);
    this.getRecomProducts();
  }

  selectSeller(event, sellerInfo) {
    this.location = JSON.parse(localStorage.getItem("currentCity"));
    this.selectedSeller = sellerInfo.productSellerId;
    this.slat = this.location.lat;
    this.slng = this.location.lng;
    this.count = 1;
    this.dir = {
      origin: { lat: Number(this.slat), lng: Number(this.slng) },
      destination: { lat: Number(sellerInfo.lat), lng: Number(sellerInfo.lon) },
      renderOptions: { polylineOptions: { strokeColor: "#f00" } }
    };
  }
  // destination: { lat: 12.9763946, lng: 77.5992796 }
  // destination: { lat: 12.9399071, lng: 77.6201755 }
  // destination: { lat: 12.9368682, lng: 77.6180538 }
  // destination: { lat: 12.912491, lng: 77.6422287 }

  getProductDetail() {
    const productID = this.route.snapshot.paramMap.get("productId");
    this.productId = productID;
    const subCategoryID = this.route.snapshot.paramMap.get("subategoryId");
    this.productService.getProductsOfSubCategory(subCategoryID).subscribe(
      products => {
        this.productMain = products;
        console.log(products);
        for (let i = 0; i < products.length; i++) {
          if (this.productMain[i].productId === productID) {
            this.productM = this.productMain[i];
          }
        }
      },
      error => console.log(error)
    );
  }
  getProductAttributes(lat: string, lng: string) {
    const productID = this.route.snapshot.paramMap.get("productId");
    this.color = new Set();
    this.weight = new Set();
    this.size = new Set();
    this.productService
      .getProductDetails(productID, lat, lng)
      .subscribe(attributes => {
        this.productAttr = attributes;
        console.log(attributes);
        for (let i = 0; i < attributes.length; i++) {
          if (i === 0) {
            this.productAttr0 = attributes[i];
          }
          this.color.add(attributes[i].productAttribute.color);
          this.size.add(attributes[i].productAttribute.color);
          this.weight.add(attributes[i].productAttribute.color);
        }
        this.colorz = Array.from(this.color);
        for (var item of attributes) {
          this.numSellers.push(item.productSellers.length);
        }
      });
  }
  getRecomProducts() {
    const subCategoryID = this.route.snapshot.paramMap.get("subategoryId");
    this.productService.getProductsOfSubCategory(subCategoryID).subscribe(
      success => {
        this.recommProds = success.slice(0, 5);
      },
      error => console.log(error)
    );
  }
  orderNow(quantity: string) {
    if (this.loggedIn == 0) {
      var toastHTML = "Please Login first";
      M.toast({ html: toastHTML });
    } else if (this.loggedIn == 1) {
      if (this.numSellers[0] > 0) {
        const productID = this.route.snapshot.paramMap.get("productId");
        var toastHTML = "Order Placed Successfully";
        let action: OrderNowModel = {
          userId: this.userId,
          productAttributeId: this.productAttr0.productAttribute
            .productAttributeId,
          productSellerId: this.productAttr0.productSellers[0].sellerId,
          quantity: quantity,
          statue: "Order Placed",
          orderPaymentMode: "COD (Cash on Delivery)",
          createdDate: String(Date.now()),
          contactNumber: this.contactNum,
          productName: this.productM.productName,
          productId: productID,
          productSellerName: this.productAttr0.productSellers[0].sellerName,
          price: this.productAttr0.productAttribute.mrp
        };
        this.userControls.order(action).subscribe(success => {
          success;
          M.toast({ html: toastHTML });
        });
      } else {
        var toastHTML = "No Sellers Available. Please Try Later";
        M.toast({ html: toastHTML });
      }
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
      if (this.numSellers[0] > 0) {
        var toastHTML = "<span>Product Added to Cart</span>";
        let cartBody: AddToCartModel = {
          userId: this.userId,
          productAttributeId: this.productAttr0.productAttribute
            .productAttributeId,
          productSellerId: this.productAttr0.productSellers[0].productSellerId,
          quantity: "2",
          isActive: "Yes"
        };
        this.userControls.addToCart(cartBody).subscribe(
          success => {
            console.log(success.isActive);
            M.toast({ html: toastHTML });
          },
          error => console.log(error)
        );
      } else {
        var toastHTML = "No Sellers Available. Please Try Later";
        M.toast({ html: toastHTML });
      }
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
  postLeads(sellerInfo, quantity: string) {
    const productID = this.route.snapshot.paramMap.get("productId");
    if (this.loggedIn === 0) {
      var toastHTML = "Please Login first";
      M.toast({ html: toastHTML });
    } else if (this.loggedIn === 1) {
      let itemz: PostLeadModel = {
        product_id: productID,
        product_variant_id: sellerInfo.productAttributeId,
        user_id: this.userId,
        quantity: Number(quantity),
        contact_no: Number(this.contactNum),
        customer_name: this.userName,
        vendor_id: sellerInfo.sellerId
      };
      this.userControls.postLead(itemz).subscribe(
        success => {
          M.toast({ html: "Notfication sent to seller." });
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
