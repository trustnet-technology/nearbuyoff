import { MenuModel } from "../models/menuModel";

export const ITEMSMENU: MenuModel[] = [
  {
    name: "APPARELS",
    children: [
      { name: "T-Shirts", url: "T-S" },
      { name: "Jeans", url: "JEA" },
      { name: "Sweatshirts", url: "SWE" },
      { name: "Sneakers", url: "SNE" }
    ],
    categoryID: "APPA"
  },
  {
    name: "GROCERY",
    categoryID: "GROC",
    children: [
      { name: "Dressings & Sauces", url: "DRE" },
      { name: "Dairy Products", url: "DAI" },
      { name: "Fruits", url: "FRU" },
      { name: "Frozen Food", url: "FRO" }
    ]
  },
  {
    name: "HOME APPLIANCES",
    categoryID: "HOME",
    children: [
      { name: "Video Games & Consoles", url: "VID" },
      { name: "Speakers", url: "SPE" },
      { name: "Washing Machines", url: "WAS" },
      { name: "TV & Home Theaters", url: "TV " }
    ]
  },
  {
    name: "DECOR",
    categoryID: "DECO",
    children: [
      { name: "Curtains", url: "CUR" },
      { name: "Pillows & Cushions", url: "PIL" },
      { name: "Bed-Sheets", url: "BED" },
      { name: "Wallpapers", url: "WAL" }
    ]
  }
];
