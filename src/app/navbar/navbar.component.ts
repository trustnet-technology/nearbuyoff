import {
  Component,
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterViewInit
} from "@angular/core";
declare var $: any;
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  category: string;
  geolocationPosition: any;
  city: any;
  lat: any;
  lng: any;
  citySelected = localStorage.getItem("currentCity");
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
        $("#bt-sel-city").dropdown({
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
    $(document).ready(function() {
      $("#sel-city-modal").modal();
    });
    $(document).ready(function() {
      $("#cart-modal").modal();
    });
  }

  ngOnInit() {
    // console.log(this.citySelected);
    this.citySelected = JSON.parse(localStorage.getItem("currentCity"));
    // console.log(this.citySelected);
    this.jquery_code();
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position;
          console.log(position);
          this.city = "";
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.city, this.lat);
          localStorage.setItem(
            "currentCity",
            JSON.stringify({ city: this.city, lat: this.lat, lng: this.lng })
          );
        },
        error => {
          switch (error.code) {
            case 1:
              if (this.citySelected == null) {
                $(document).ready(function() {
                  $("#sel-city-modal").modal();
                  $("#sel-city-modal").modal("open");
                });
              }
              break;
            case 2:
              console.log("Position Unavailable");
              break;
            case 3:
              console.log("Timeout");
              break;
          }
        }
      );
    }
  }

  selectChangeHandler(event: any) {
    //update the ui
    this.category = event.target.value;
    if (this.category == "Delhi") {
      this.city = this.category;
      this.lat = 28.6139;
      this.lng = 77.209;
    } else if (this.category == "Dehradun") {
      this.city = this.category;
      this.lat = 30.3165;
      this.lng = 78.0322;
    } else if (this.category == "Bangalore") {
      this.city = this.category;
      this.lat = 12.9716;
      this.lng = 77.5946;
    } else if (this.category == "Gurgaon") {
      this.city = this.category;
      this.lat = 28.4595;
      this.lng = 77.0266;
    } else if (this.category == "Muzaffarnagar") {
      this.city = this.category;
      this.lat = 29.4727;
      this.lng = 77.7085;
    } else if (this.category == "") {
      this.city = "Bangalore";
      this.lat = 12.9716;
      this.lng = 77.5946;
    }
    localStorage.setItem(
      "currentCity",
      JSON.stringify({ city: this.city, lat: this.lat, lng: this.lng })
    );
  }
  noCitySelected() {
    console.log(this.citySelected);
    if (this.citySelected == null) {
      this.city = "Bangalore";
      this.lat = 12.9716;
      this.lng = 77.5946;
      localStorage.setItem(
        "currentCity",
        JSON.stringify({ city: this.city, lat: this.lat, lng: this.lng })
      );
    }
    this.citySelected = JSON.parse(localStorage.getItem("currentCity"));
  }
  whenCitySelected() {
    this.citySelected = JSON.parse(localStorage.getItem("currentCity"));
  }
}
