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
  currentOrders: any;
  userId: string;
  userLog: any;
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
    this.userLog = JSON.parse(localStorage.getItem("authUser"));
    this.userId = this.userLog.user.userId;
    this.jquery_code();
    this.getOrderItems(this.userId);
  }
  getOrderItems(userID: string) {
    this.userService.viewOrders(userID).subscribe(success => {
      this.orderAPItems = success;
      this.currentOrders = success.slice(0, 3);
    });
    // this.orderItemsService
    //   .getOrderItems()
    //   .subscribe(orderItems => (this.orderItems = orderItems));
  }
}
