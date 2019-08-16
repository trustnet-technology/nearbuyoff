import { MenuModel } from "../models/menuModel";

export const ITEMSMENU: MenuModel[] = [
  {
    name: "APPARELS",
    children: ["T-Shirts", "Jeans", "Sweatshirts", "Sneakers"]
  },
  {
    name: "GROCERY",
    children: ["Dressings & Sauces", "Dairy Products", "Fruits", "Frozen Food"]
  },
  {
    name: "HOME APPLIANCES",
    children: [
      "Video Games & Consoles",
      "Speakers",
      "Washing Machines",
      "TV & Home Theaters"
    ]
  },
  {
    name: "DECOR",
    children: ["Curtains", "Pillows & Cushions", "Bed-Sheets", "Wallpapers"]
  }
];
