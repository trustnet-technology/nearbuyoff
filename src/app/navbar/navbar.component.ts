import {
  Component,
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterViewInit,
  NgZone
} from "@angular/core";
import { CartItemsService } from "../services/cart-items.service";
import { CartItemModel } from "../models/cart-item.model";
import { MapsAPILoader } from "@agm/core";
import { UserControlsService } from "../services/user-controls.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ExchangeService } from "../services/exchange.service";
// import { google } from "google-maps";
// import { google } from "@agm/core/services/google-maps-types";
declare var $: any;
declare const google: any;
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  category: string;
  cartItems: CartItemModel[];
  cartITems: any;
  geolocationPosition: any;
  userId: string = "U1212";
  city: string;
  lat: any;
  bounds: any;
  lng: any;

  isLoggedIn: boolean;
  loggedIn: number;
  userLog: any;
  address: any;
  citySelected = localStorage.getItem("currentCity");
  constructor(
    private cartItemService: CartItemsService,
    private ngZone: NgZone,
    private mapsAPILoader: MapsAPILoader,
    private userControls: UserControlsService,
    private router: Router,
    private route: ActivatedRoute,
    private isLog: ExchangeService
  ) {
    this.isLog.isUserLoggedIn.subscribe(value => {
      this.isLoggedIn = value;
      this.jquery_code();
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mapsAPILoader.load().then(() => {
      this.bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(51.130739, -0.868052), // SW
        new google.maps.LatLng(51.891257, 0.559417) // NE
      );
      console.log(this.bounds);
    });
  }
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
          hover: true,
          coverTrigger: false
        });
      });
    })(jQuery);
    (function($) {
      $(function() {
        $("#dropdown-btn-profile-mobile").dropdown({
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
        $("#bt-sel-city-mobile").dropdown({
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
      $("#cart-items-modal").modal();
    });
  }

  ngOnInit() {
    this.jquery_code();
    this.userLog = JSON.parse(localStorage.getItem("authUser"));
    try {
      if (this.userLog.tokenType == "Bearer") {
        this.isLoggedIn = true;
      }
    } catch (error) {
      this.isLoggedIn = false;
    }
    this.citySelected = JSON.parse(localStorage.getItem("currentCity"));
    this.getCartItems();
  }
  ngAfterViewInit() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position;
          console.log(position);
          console.log("2" + "2");
          this.city = "";
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.city, this.lat);
          // localStorage.setItem(
          //   "currentCity",
          //   JSON.stringify({ city: this.city, lat: this.lat, lng: this.lng })
          // );
          let geocoder = new google.maps.Geocoder();
          let latlng = new google.maps.LatLng(this.lat, this.lng);
          let request = {
            latLng: latlng
          };
          console.log(geocoder);
          geocoder.geocode(request, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              this.ngZone.run(() => {
                this.city = results[0].formatted_address;
                console.log(results[0]);
                console.log(this.city);
                localStorage.setItem(
                  "currentCity",
                  JSON.stringify({
                    city: this.city.slice(0, 9),
                    lat: this.lat,
                    lng: this.lng
                  })
                );
              });
            }
          });
          console.log(this.city);
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
  getCartItems() {
    this.userControls.viewCart(this.userId).subscribe(cartITems => {
      this.cartITems = cartITems;
      console.log(cartITems);
    });
    this.cartItemService
      .getCartItems()
      .subscribe(cartItems => (this.cartItems = cartItems));
  }
  search(event) {
    this.router.navigate(["search/" + event.target.value]);
    //  event.target.value;
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
      JSON.stringify({
        city: this.city,
        lat: this.lat,
        lng: this.lng
      })
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
  logout() {
    localStorage.removeItem("authUser");
    M.toast({ html: "Logged Out" });
    this.router.navigate(["home"]);
    this.isLog.isUserLoggedIn.next(false);
    this.loggedIn = 0;
    this.ngOnInit();
  }
}
