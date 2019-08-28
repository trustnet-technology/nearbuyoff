import { MenuModel } from "../models/menuModel";

export const ITEMSMENU: MenuModel[] = [
  {
    name: "APPARELS",
    children: ["T-Shirts", "Jeans", "Sweatshirts", "Sneakers"],
    categoryID: "1"
  },
  {
    name: "GROCERY",
    categoryID: "4",
    children: ["Dressings & Sauces", "Dairy Products", "Fruits", "Frozen Food"]
  },
  {
    name: "HOME APPLIANCES",
    categoryID: "C123",
    children: [
      "Video Games & Consoles",
      "Speakers",
      "Washing Machines",
      "TV & Home Theaters"
    ]
  },
  {
    name: "DECOR",
    categoryID: "2",
    children: ["Curtains", "Pillows & Cushions", "Bed-Sheets", "Wallpapers"]
  }
];
