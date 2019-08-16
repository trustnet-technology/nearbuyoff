import { Component, OnInit } from "@angular/core";
import { CartItemModel } from "../models/cart-item.model";
import { CartItemsService } from "../services/cart-items.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cartItems: CartItemModel[];
  constructor(private cartItemService: CartItemsService) {}

  ngOnInit() {
    this.getCartItems();
  }
  getCartItems() {
    this.cartItemService
      .getCartItems()
      .subscribe(cartItems => (this.cartItems = cartItems));
  }
}
