import { Component, OnInit } from "@angular/core";
import * as M from "materialize-css";
declare var $: any;
@Component({
  selector: "app-sel-city-modal",
  templateUrl: "./sel-city-modal.component.html",
  styleUrls: ["./sel-city-modal.component.css"]
})
export class SelCityModalComponent implements OnInit {
  selectedDay: string = "";
  options: {};
  category: string;
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
      $("#modal1").modal();
      $("#modal1").modal("open");
    });

    // $(window).load(function() {
    //   $("#modal1").modal("show");
    // });
  }
  selectChangeHandler(event: any) {
    //update the ui
    this.category = event.target.value;
    localStorage.setItem("currentCity", this.category);
  }
}
