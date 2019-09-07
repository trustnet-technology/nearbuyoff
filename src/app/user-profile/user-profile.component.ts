import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  userLog: any;
  constructor() {}

  ngOnInit() {
    this.userLog = JSON.parse(localStorage.getItem("authUser"));
  }
}
