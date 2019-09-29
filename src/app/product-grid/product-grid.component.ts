import { Component, OnInit } from "@angular/core";
import { ProductModel } from "../models/productModel";
import { ProductService } from "../services/product.service";
import { ActivatedRoute, Router } from "@angular/router";

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
  subCatContent1: any;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
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
      });
  }
}
