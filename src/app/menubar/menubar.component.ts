import { Component, OnInit } from "@angular/core";
import { MenuModel } from "../models/menuModel";
import * as M from "materialize-css";
import { MenuItemsService } from "../services/menu-items.service";

@Component({
  selector: "app-menubar",
  templateUrl: "./menubar.component.html",
  styleUrls: ["./menubar.component.css"]
})
export class MenubarComponent implements OnInit {
  mItems: MenuModel[];
  options = {};

  constructor(private menuItemsService: MenuItemsService) {}

  ngOnInit() {
    this.getMenuItems();
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, this.options);
    var elems2 = document.querySelectorAll(".collapsible");
    var instances2 = M.Collapsible.init(elems2, this.options);
  }
  getMenuItems(): void {
    this.mItems = this.menuItemsService.getMenuItems();
  }
}
