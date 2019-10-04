import { Component, OnInit } from "@angular/core";
import * as M from "materialize-css";
declare var $: any;
import { Options } from "ng5-slider";
import { SearchService } from "../services/search.service";
import { ActivatedRoute, Router } from "@angular/router";
import { StarRatingComponent } from "ng-starrating";
import { OrderPipe } from "ngx-order-pipe";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  category: string;
  value: number = 10000;
  searchRes: any;
  order: string = "productName";
  prize: string = "minPrice";
  orderByy: string;
  byPrice: string;
  options: Options = {
    floor: 0,
    ceil: 10000
  };
  subcategory: string[];
  constructor(
    private search: SearchService,
    private route: ActivatedRoute,
    private router: Router,
    private orderPipe: OrderPipe
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  jquery_code() {
    (function($) {
      $(function() {
        $("#dropdown-btn-category").dropdown({
          inDuration: 300,
          outDuration: 225,
          constrainWidth: false,
          hover: false, // Activate on hover // Displays dropdown below the button
          coverTrigger: false // Displays dropdown with edge aligned to the left of button
        });
      }); // End Document Ready
    })(jQuery);
    (function($) {
      $(function() {
        $("#dropdown-btn-price").dropdown({
          inDuration: 300,
          outDuration: 225,
          constrainWidth: false,
          hover: false, // Activate on hover // Displays dropdown below the button
          coverTrigger: false // Displays dropdown with edge aligned to the left of button
        });
      }); // End Document Ready
    })(jQuery);
    (function($) {
      $(function() {
        $("#dropdown-btn-location").dropdown({
          inDuration: 300,
          outDuration: 225,
          constrainWidth: false,
          hover: false, // Activate on hover // Displays dropdown below the button
          coverTrigger: false // Displays dropdown with edge aligned to the left of button
        });
      }); // End Document Ready
    })(jQuery);
    $(document).ready(function() {
      $(".collapsible").collapsible();
    });
    $(document).ready(function() {
      $(".materialboxed").materialbox();
    });
  }

  ngOnInit() {
    this.jquery_code();
    this.category = "";
    this.subcategory = ["Jeans", "T-Shirts", "Sweatshirts", "Sneakers"];
    const productName = this.route.snapshot.paramMap.get("productName");
    this.getSearchReslts(productName);
  }
  onRate($event: {
    oldValue: number;
    newValue: number;
    starRating: StarRatingComponent;
  }) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
  onItemChange() {
    console.log(" Value is : ", this.category);
    if (this.category == "Name") {
      this.searchRes = this.orderPipe.transform(
        this.searchRes,
        this.order,
        false
      );
    } else if (this.category == "Name (Reverse)") {
      this.searchRes = this.orderPipe.transform(
        this.searchRes,
        this.order,
        true
      );
    } else if (this.category == "Price (Asc.)") {
      this.searchRes = this.orderPipe.transform(
        this.searchRes,
        this.prize,
        false
      );
    } else if (this.category == "Price (Desc.)") {
      this.searchRes = this.orderPipe.transform(
        this.searchRes,
        this.prize,
        true
      );
    }
  }
  getSearchReslts(productName: string) {
    this.search.getResultsOfSearch("", productName, "").subscribe(
      success => {
        this.searchRes = success;
      },
      error => console.log(error)
    );
  }
}
