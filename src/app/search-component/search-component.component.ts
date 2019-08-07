import { Component, OnInit } from "@angular/core";
import * as M from "materialize-css";
declare var $: any;
@Component({
  selector: "app-search-component",
  templateUrl: "./search-component.component.html",
  styleUrls: ["./search-component.component.css"]
})
export class SearchComponentComponent implements OnInit {
  category: string;
  subcategory: string[];
  constructor() {}

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
    this.category = "Apparel";
    this.subcategory = ["Jeans", "T-Shirts", "Sweatshirts", "Sneakers"];
    // var slider = document.getElementById("test-slider");
    // noUiSlider.create(slider, {
    //   start: [20, 80],
    //   connect: true,
    //   step: 1,
    //   orientation: "horizontal", // 'horizontal' or 'vertical'
    //   range: {
    //     min: 0,
    //     max: 100
    //   },
    //   format: wNumb({
    //     decimals: 0
    //   })
    // });
  }
  onItemChange() {
    console.log(" Value is : ", this.category);
    if (this.category == "Apparel") {
      this.subcategory = ["Jeans", "T-Shirts", "Sweatshirts", "Sneakers"];
    } else if (this.category == "Home Appliances") {
      this.subcategory = [
        "Gaming Consoles",
        "TV & HTs",
        "Washing Machine",
        "Speakers"
      ];
    } else if (this.category == "Decor") {
      this.subcategory = ["Curtains", "Pillows", "Wallpapers", "Showpieces"];
    } else if (this.category == "Grocery") {
      this.subcategory = [
        "Dressings & Sauces",
        "Dairy Products",
        "Fruits",
        "Frozen Food"
      ];
    }
  }
}
