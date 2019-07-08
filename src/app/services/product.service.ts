import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ProductModel } from "../models/productModel";
import {
  PRODUCTS,
  PRODUCTS2,
  PRODUCTS3,
  PRODUCTS4
} from "../data/productItems";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor() {}

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
}
