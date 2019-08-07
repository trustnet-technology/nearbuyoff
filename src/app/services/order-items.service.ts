import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { OrderItemsModel } from "../models/order-items.model";
import { ITEMS } from "../data/order-items-data";

@Injectable({
  providedIn: "root"
})
export class OrderItemsService {
  constructor() {}
  getOrderItems(): Observable<OrderItemsModel[]> {
    return of(ITEMS);
  }
  getOrderItem(orderID: string): Observable<OrderItemsModel> {
    return of(ITEMS.find(orderItem => orderItem.id === orderID));
  }
}
