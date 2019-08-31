import { MenuModel } from "../models/menuModel";

export const ITEMSMENU: MenuModel[] = [
  {
    name: "APPARELS",
    children: ["T-Shirts", "Jeans", "Sweatshirts", "Sneakers"],
    categoryID: "CAT01"
  },
  {
    name: "GROCERY",
    categoryID: "CAT03",
    children: ["Dressings & Sauces", "Dairy Products", "Fruits", "Frozen Food"]
  },
  {
    name: "HOME APPLIANCES",
    categoryID: "CAT02",
    children: [
      "Video Games & Consoles",
      "Speakers",
      "Washing Machines",
      "TV & Home Theaters"
    ]
  },
  {
    name: "DECOR",
    categoryID: "CAT04",
    children: ["Curtains", "Pillows & Cushions", "Bed-Sheets", "Wallpapers"]
  }
];
