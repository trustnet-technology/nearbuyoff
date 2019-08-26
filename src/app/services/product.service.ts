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
import { catchError } from "rxjs/operators";
import { ProductSubCatModel } from "../models/product-subCat.model";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductsSubcategories(): Observable<any> {
    const path = "/nearby/getSubCatOfCategories";
    return this.http
      .get(`${environment.base_url}${path}`)
      .pipe(catchError(this.formatErrors));
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
  getProducts(): Observable<ProductModel[]> {
    return of(PRODUCTS);
  }
  getProducts2(): Observable<ProductModel[]> {
    return of(PRODUCTS2);
  }
  getProducts3(): Observable<ProductModel[]> {
    return of(PRODUCTS3);
  }
  getProducts4(): Observable<ProductModel[]> {
    return of(PRODUCTS4);
  }

  getProduct(productID: number): Observable<ProductModel> {
    return of(PRODUCTS.find(product => product.productID === productID));
  }
  getProduct2(productID: number): Observable<ProductModel> {
    return of(PRODUCTS2.find(product2 => product2.productID === productID));
  }
  getProduct3(productID: number): Observable<ProductModel> {
    return of(PRODUCTS3.find(product3 => product3.productID === productID));
  }
  getProduct4(productID: number): Observable<ProductModel> {
    return of(PRODUCTS4.find(product4 => product4.productID === productID));
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }
}
