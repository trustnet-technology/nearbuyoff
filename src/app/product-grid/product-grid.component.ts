import { Component, OnInit } from "@angular/core";
import { ProductModel } from "../models/productModel";
import { ProductService } from "../services/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-grid",
  templateUrl: "./product-grid.component.html",
  styleUrls: ["./product-grid.component.css"]
})
export class ProductGridComponent implements OnInit {
  products: any;
  products3: any;
  subCatID: any;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProducts();
    this.getProductGrid();
    
  }

  getProductGrid(): void {
    const subCategoryID = this.route.snapshot.paramMap.get("subategoryId");
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
  subCategoryGrid(){
    const categoryID = this.route.snapshot.paramMap.get("categoryId");
    this.productService.getProductsOfCategory(categoryID).subscribe(products=>{this.products=products;})
  }

  getProducts() {
    this.productService
      .getProducts()
      .subscribe(products3 => (this.products3 = products3));
  }
}
