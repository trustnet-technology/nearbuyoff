import { Component, OnInit } from "@angular/core";

declare var $: any;
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  jquery_code() {
    (function($) {
      $(function() {
        $("#menu-dropdown").dropdown({
          inDuration: 300,
          outDuration: 225,
          constrainWidth: false,
          hover: true,
          coverTrigger: false
        });
        $("#menuDropdownContent li").on({
          mouseenter: function() {
            var target = $(this)
              .find("a")
              .data("target");
            $("#vtc").html($("#" + target).html());
          }
        });
      });
    })(jQuery);
    (function($) {
      $(function() {
        $("#dropdown-btn-profile").dropdown({
          inDuration: 300,
          outDuration: 225,
          constrainWidth: false,
          hover: true, // Activate on hover // Displays dropdown below the button
          coverTrigger: false // Displays dropdown with edge aligned to the left of button
        });
      }); // End Document Ready
    })(jQuery);
    (function($) {
      $(function() {
        $("#notifications-dropdown").dropdown({
          inDuration: 300,
          outDuration: 225,
          constrainWidth: false,
          hover: true, // Activate on hover // Displays dropdown below the button
          coverTrigger: false // Displays dropdown with edge aligned to the left of button
        });
      }); // End Document Ready
    })(jQuery); // End of jQuery name space
  }

  ngOnInit() {
    this.jquery_code();
    // $(document).ready(function() {
    //   $(".modal-trigger").leanModal();
    // });
  }
}
