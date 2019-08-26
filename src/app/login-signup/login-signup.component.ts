import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { SignInModel } from "../models/sign-in.model";
import * as M from "materialize-css";
import { Router } from "@angular/router";
import { SignUpModel } from "../models/sign-up.model";

@Component({
  selector: "app-login-signup",
  templateUrl: "./login-signup.component.html",
  styleUrls: ["./login-signup.component.css"]
})
export class LoginSignupComponent implements OnInit {
  email: string;
  password: string;
  constructor(private authService: AuthService, private router: Router) {}
  jquery_code() {
    $(document).ready(function() {
      $(".tabs").tabs();
    });
  }
  ngOnInit() {
    this.jquery_code();
  }
  logIn(email: string, passwd: string) {
    console.log(email, passwd);
    let value: SignInModel = {
      usernameOrEmail: email,
      password: passwd
    };
    this.authService.signIn(value).subscribe(
      success => {
        localStorage.setItem("authUser", JSON.stringify(success));
        this.router.navigate(["home"]);
      },
      error =>
        M.toast({ html: "<span>" + error.message + "</span>", classes: "red" })
    );
  }
  signUp(
    name: string,
    username: string,
    email: string,
    passwd: string,
    phoneNum: string
  ) {
    console.log(email, passwd);
    let value: SignUpModel = {
      name: name,
      username: username,
      email: email,
      password: passwd,
      phoneNum: phoneNum
    };
    this.authService.signUp(value).subscribe(
      success => {
        M.toast({ html: "Signed Up Successfully", classes: "green darken-1" });
        this.ngOnInit();
      },
      error =>
        M.toast({ html: "<span>" + error.message + "</span>", classes: "red" })
    );
  }
}
