import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { ProductModel } from "../models/productModel";
import {
  PRODUCTS,
  PRODUCTS2,
  PRODUCTS3,
  PRODUCTS4
} from "../data/productItems";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { map, catchError, publishReplay, refCount } from "rxjs/operators";
import { ProductSubCatModel } from "../models/product-subCat.model";
import { environment } from "src/environments/environment";
import { SubCategoryModel } from "../models/sub-category.model";
@Injectable({
  providedIn: "root"
})
export class ProductService {
  configs: Observable<SubCategoryModel[]>;
  constructor(private http: HttpClient) {}

  getProductsSubcategories(): Observable<SubCategoryModel[]> {
    const path = "/nearby/getSubCatOfCategories";
    console.log(this.configs);
    if (!this.configs) {
      this.configs = this.http
        .get<SubCategoryModel[]>(`${environment.base_url}${path}`)
        .pipe(
          map(data => data),
          publishReplay(),
          refCount()
        );
      console.log(this.configs);
    }
    console.log(this.configs);
    return this.configs;
  }
  getProductsOfCategory(categoryID: string): Observable<any> {
    const path = "/nearby/getSubCatOfCategory";
    return this.http
      .get(`${environment.base_url}${path}`, {
        params: { categoryId: categoryID }
      })
      .pipe(catchError(this.formatErrors));
  }
  getProductDetails(
    productID: string,
    latitude: string,
    longitude: string
  ): Observable<any> {
    const path = "/nearby/getProductsDetails";
    return this.http
      .get(`${environment.base_url}${path}`, {
        params: { productId: productID, lat: latitude, lon: longitude }
      })
      .pipe(catchError(this.formatErrors));
  }
  getProductsOfSubCategory(subcategoryID: string): Observable<any> {
    const path = "/nearby/getProductsOfSubCat";
    return this.http
      .get(`${environment.base_url}${path}`, {
        params: { subCategoryId: subcategoryID }
      })
      .pipe(catchError(this.formatErrors));
  }
  getProductOfSubCategory(
    subcategoryID: string,
    productID: string
  ): Observable<any> {
    const path = "/nearby/getProductsOfSubCat";
    return this.http
      .get(`${environment.base_url}${path}`, {
        params: { subCategoryId: subcategoryID }
      })
      .pipe(catchError(this.formatErrors));
  }
  private formatErrors(error: any) {
    return throwError(error.error);
  }
}
