import { Component, OnInit } from "@angular/core";
import { OrderItemsModel } from "../models/order-items.model";
import { OrderItemsService } from "../services/order-items.service";
import { UserControlsService } from "../services/user-controls.service";

@Component({
  selector: "app-customer-orders",
  templateUrl: "./customer-orders.component.html",
  styleUrls: ["./customer-orders.component.css"]
})
export class CustomerOrdersComponent implements OnInit {
  orderItems: OrderItemsModel[];
  orderAPItems: any;
  constructor(
    private orderItemsService: OrderItemsService,
    private userService: UserControlsService
  ) {}

  jquery_code() {
    $(document).ready(function() {
      $(".tabs").tabs();
    });
  }
  ngOnInit() {
    this.jquery_code();
    // this.getOrderItems();
  }
  getOrderItems(userId: string) {
    this.userService.viewOrders(userId).subscribe(success => {
      this.orderAPItems = success;
    });
    // this.orderItemsService
    //   .getOrderItems()
    //   .subscribe(orderItems => (this.orderItems = orderItems));
  }
}
