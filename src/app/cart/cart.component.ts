import { Component, OnInit } from "@angular/core";
import { CartItemModel } from "../models/cart-item.model";
import { CartItemsService } from "../services/cart-items.service";
import { UserControlsService } from "../services/user-controls.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cartItems: CartItemModel[];
  cartITems: any;
  userId: string;
  userLog: any;
  constructor(
    private userControls: UserControlsService,
    private cartItemService: CartItemsService
  ) {}

  ngOnInit() {
    this.userLog = JSON.parse(localStorage.getItem("authUser"));
    this.userId = this.userLog.user.userId;
    this.getCartItems(this.userId);
  }
  getCartItems(userID: string) {
    this.userControls.viewCart(userID).subscribe(cartITems => {
      this.cartITems = cartITems;
      console.log(cartITems);
    });
    this.cartItemService
      .getCartItems()
      .subscribe(cartItems => (this.cartItems = cartItems));
  }
}
