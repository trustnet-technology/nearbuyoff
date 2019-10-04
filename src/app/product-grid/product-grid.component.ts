import { Component, OnInit } from "@angular/core";
import { ProductModel } from "../models/productModel";
import { ProductService } from "../services/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { OrderPipe } from "ngx-order-pipe";

@Component({
  selector: "app-product-grid",
  templateUrl: "./product-grid.component.html",
  styleUrls: ["./product-grid.component.css"]
})
export class ProductGridComponent implements OnInit {
  products: any;
  subCategories: any;
  subCatBreadCrumb: string;
  catBreadCrumb: string;
  catID: string;
  subCatID: any;
  order: string = "subCategoryName";
  prize: string = "minPrice";
  orderByy: string;
  byPrice: string;
  subCatContent1: any;
  options: string[];
  price: string[];
  config = {
    search: false, //true/false for the search functionlity defaults to false,
    height: "auto", //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: "Select", // text to be displayed when no item is selected defaults to Select,
    customComparator: () => {}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    moreText: "more", // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: "No results found!", // text to be displayed when no items are found while searching
    searchPlaceholder: "Search", // label thats displayed in search input,
    searchOnKey: "name" // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
  };
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private orderPipe: OrderPipe
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.options = ["By Name", "By Price"];
    this.price = ["Low to High", "High to Low"];
    const category: { key: string; value: string }[] = [
      { key: "APPA", value: "Apparel" },
      { key: "HOME", value: "Home Appliances" },
      { key: "DECO", value: "Decors" },
      { key: "GROC", value: "Grocery" }
    ];
    const subCategory: { key: string; value: string }[] = [
      { key: "JEA", value: "Jeans" },
      { key: "SNE", value: "Sneakers" },
      { key: "SWE", value: "Sweatshirts" },
      { key: "T-S", value: "T-Shirts" },
      { key: "DAI", value: "Dairy Products" },
      { key: "DRE", value: "Dressing & Sauces" },
      { key: "FRO", value: "Frozen Food" },
      { key: "FRU", value: "Fruits" },
      { key: "TV ", value: "TV & Home Theatres" },
      { key: "SPE", value: "Speakers" },
      { key: "VID", value: "Video Games & Consoles" },
      { key: "WAS", value: "Washing Machines" },
      { key: "BED", value: "Bed Sheets" },
      { key: "PIL", value: "Pillows & Cushions" },
      { key: "WAL", value: "Wallpapers" },
      { key: "CUR", value: "Curtains" }
    ];
    $(document).ready(function() {
      $("#sort-select").formSelect();
    });
    $(document).ready(function() {
      $("#price-select").formSelect();
    });
    this.subCatContent1 = {
      mainURL: "sss",
      subategoryId: "string",
      imageURL: "string",
      desc: "string",
      categoryName: "string",
      mrp: "number",
      minPrice: "number",
      discount: "number"
    };
    const subCategoryID = this.route.snapshot.paramMap.get("subategoryId");
    const categoryID = this.route.snapshot.paramMap.get("categoryId");
    if (subCategoryID != null) {
      this.getProductGrid(subCategoryID);
      for (var item of category) {
        if (item.key === categoryID) {
          this.catBreadCrumb = item.value;
          this.catID = item.key;
        }
      }
      for (var item of subCategory) {
        if (item.key === subCategoryID) {
          this.subCatBreadCrumb = item.value;
        }
      }
    } else if (categoryID != null) {
      this.subCategoryGrid(categoryID);
      for (var item of category) {
        if (item.key === categoryID) {
          this.catBreadCrumb = item.value;
        }
      }
    }
  }
  getProductGrid(subCategoryID: string) {
    console.log(subCategoryID);
    this.subCatID = subCategoryID;
    this.productService
      .getProductsOfSubCategory(subCategoryID.toString())
      .subscribe(
        products => {
          this.products = products;
          console.log(products);
        },
        error => console.log(error)
      );
  }
  subCategoryGrid(categoryID: string) {
    this.productService
      .getProductsOfCategory(categoryID)
      .subscribe(subCategories => {
        console.log(subCategories);
        this.subCategories = subCategories;
        // console.log(this.orderPipe.transform(this.subCategories, this.order));
      });
  }
  selectionChanged(event) {
    console.log(event);
    if (event.value === "By Name") {
      console.log(event);
      this.subCategories;
      console.log(this.subCategories);
      console.log(this.order);
      this.subCategories = this.orderPipe.transform(
        this.subCategories,
        this.order,
        false
      );
      console.log(this.subCategories);
    } else if (event.value === "By Price") {
      console.log(this.subCategories);
      this.subCategories = this.orderPipe.transform(
        this.subCategories,
        this.prize
      );
    }
  }
  selectionPriceChanged(event) {
    console.log(event);
    console.log(event);
    this.subCategories;
    console.log(this.subCategories);
    console.log(this.order);
    this.subCategories = this.orderPipe.transform(
      this.subCategories,
      this.prize,
      false
    );
    console.log(this.subCategories);
  }
}
