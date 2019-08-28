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
    } else if (categoryID != null) {
      this.subCategoryGrid(categoryID);
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
        this.subCategories = subCategories;
      });
  }
}
