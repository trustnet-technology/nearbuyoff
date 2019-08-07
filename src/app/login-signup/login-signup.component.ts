import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-signup",
  templateUrl: "./login-signup.component.html",
  styleUrls: ["./login-signup.component.css"]
})
export class LoginSignupComponent implements OnInit {
  constructor() {}
  jquery_code() {
    $(document).ready(function() {
      $(".tabs").tabs();
    });
  }
  ngOnInit() {
    this.jquery_code();
  }
}
