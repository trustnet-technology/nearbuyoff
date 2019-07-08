import { Component, OnInit } from "@angular/core";
import * as M from "materialize-css";
declare var $: any;
@Component({
  selector: "app-search-component",
  templateUrl: "./search-component.component.html",
  styleUrls: ["./search-component.component.css"]
})
export class SearchComponentComponent implements OnInit {
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
  }

  ngOnInit() {
    this.jquery_code();
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
}
