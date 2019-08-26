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
  userId: string = "U1212";
  constructor(
    private userControls: UserControlsService,
    private cartItemService: CartItemsService
  ) {}

  ngOnInit() {
    this.getCartItems();
  }
  getCartItems() {
    this.userControls.viewCart(this.userId).subscribe(cartITems => {
      this.cartITems = cartITems;
      console.log(cartITems);
    });
    this.cartItemService
      .getCartItems()
      .subscribe(cartItems => (this.cartItems = cartItems));
  }
}
