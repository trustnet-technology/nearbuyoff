import { Injectable } from "@angular/core";
import { MenuModel } from "../models/menuModel";
import { ITEMSMENU } from "../data/menuItems";

@Injectable({
  providedIn: "root"
})
export class MenuItemsService {
  constructor() {}

  getMenuItems(): MenuModel[] {
    return ITEMSMENU;
  }
}
