import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CartItemModel } from "../models/cart-item.model";
import { CARTiTEMS } from "../data/cart-items-data";

@Injectable({
  providedIn: "root"
})
export class CartItemsService {
  constructor() {}
  getCartItems(): Observable<CartItemModel[]> {
    return of(CARTiTEMS);
  }
  getCartItem(cartItemID: string): Observable<CartItemModel> {
    return of(CARTiTEMS.find(cartItem => cartItem.productID === cartItemID));
  }
}
