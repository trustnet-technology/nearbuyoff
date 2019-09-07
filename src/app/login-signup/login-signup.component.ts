import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { SignInModel } from "../models/sign-in.model";
import * as M from "materialize-css";
import { Router } from "@angular/router";
import { SignUpModel } from "../models/sign-up.model";
import { ExchangeService } from "../services/exchange.service";

@Component({
  selector: "app-login-signup",
  templateUrl: "./login-signup.component.html",
  styleUrls: ["./login-signup.component.css"]
})
export class LoginSignupComponent implements OnInit {
  email: string;
  password: string;
  isLoggedIn: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private isLog: ExchangeService
  ) {
    this.isLog.isUserLoggedIn.subscribe(value => {
      this.isLoggedIn = value;
    });
  }
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
        console.log(success);
        localStorage.setItem("authUser", JSON.stringify(success));
        this.isLog.isUserLoggedIn.next(true);
        this.router.navigate(["home"]);
      },
      error => {
        M.toast({
          html: "<span>Oops! An unknown error occured</span>",
          classes: "red"
        });
        console.log(error);
      }
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
        this.router.navigate(["home"]);
      },
      error => {
        M.toast({
          html: "<span>Oops!! An unknown error occured</span>",
          classes: "red"
        });
        console.log(error);
      }
    );
  }
}
