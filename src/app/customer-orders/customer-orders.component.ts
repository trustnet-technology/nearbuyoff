import { Component, OnInit } from "@angular/core";
import { OrderItemsModel } from "../models/order-items.model";
import { OrderItemsService } from "../services/order-items.service";

@Component({
  selector: "app-customer-orders",
  templateUrl: "./customer-orders.component.html",
  styleUrls: ["./customer-orders.component.css"]
})
export class CustomerOrdersComponent implements OnInit {
  orderItems: OrderItemsModel[];
  constructor(private orderItemsService: OrderItemsService) {}

  jquery_code() {
    $(document).ready(function() {
      $(".tabs").tabs();
    });
  }
  ngOnInit() {
    this.jquery_code();
    this.getOrderItems();
  }
  getOrderItems() {
    this.orderItemsService
      .getOrderItems()
      .subscribe(orderItems => (this.orderItems = orderItems));
  }
}
