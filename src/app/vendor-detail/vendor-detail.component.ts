import { Component, OnInit, AfterViewInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
declare var $: any;
import { ProductModel } from "../models/productModel";
import { ProductService } from "../services/product.service";
import * as M from "materialize-css";
import { VendorService } from "../services/vendor.service";
import { ActivatedRoute, Router } from "@angular/router";

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
  lat: any;
  lng: any;
  vendorDetails: any;
  constructor(
    private vendorDetail: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lat = +pos.coords.latitude;
        this.lng = +pos.coords.longitude;
      });
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnInit() {
    this.jquery_code();
    this.getVendorDetails();
  }
  getVendorDetails() {
    const sellerID = this.route.snapshot.paramMap.get("sellerId");
    this.vendorDetail.getVendorDetail(sellerID).subscribe(vendorDetails => {
      this.vendorDetails = vendorDetails;
      console.log(this.vendorDetails);
    });
  }
  getProductVendorDetails() {
    const sellerID = this.route.snapshot.paramMap.get("sellerId");
    this.vendorDetail.getProductSellerDetails(sellerID).subscribe(details => {
      this.getSubCatVendor(details.subCategoryId);
    });
  }
  getSubCatVendor(subcatID: string) {}
  ngAfterViewInit() {
    var elems9 = document.querySelectorAll("#vendorProductSlider");
    var instances9 = M.Carousel.init(elems9, this.options);
    var elems4 = document.querySelectorAll("#mz2");
    var instances3 = M.Carousel.init(elems4, this.options);
  }

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
