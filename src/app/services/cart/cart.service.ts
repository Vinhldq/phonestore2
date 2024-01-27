import { Injectable, Input } from '@angular/core';
import {Product} from "../../models/product.models";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  total = 0;
  itemsInCart: Product[] = [];
  constructor() {}

  totalPrice() {
    //clear total
    this.total = 0;
    this.itemsInCart.forEach((item) => {
      this.total += item.price * item.quantity;
    });
  }

  removeItems(item: Product) {
    const index = this.itemsInCart.findIndex((item) => item.id === item.id);
    if (index != -1) {
      this.itemsInCart.splice(index, 1);
    }
    this.totalPrice();
  }

  addItems(i: number) {
    this.itemsInCart[i].quantity++;
    this.totalPrice();
  }
  //get item in cart
  allItemInCart() {
    return this.itemsInCart;
  }

  removeQuantity(i: number) {
    if (this.itemsInCart[i].quantity > 1) {
      this.itemsInCart[i].quantity--;
    }
    this.totalPrice();
  }

  addToCart(newItem: Product) {
    // let index = this.itemlistCart.findIndex((item) => item.id === newItem.id);
    // if (index != -1) {
    //   this.itemlistCart[index].quantity++;
    //   return;
    // }
    // newItem.quantity = 1;
    // this.itemlistCart.push(newItem);
    // console.log(this.itemlistCart);

    let index = this.itemsInCart.findIndex((item) => item.id === newItem.id);
    if (index != -1) {
      this.itemsInCart[index].quantity++;
      return;
    }
    newItem.quantity = 1;
    this.itemsInCart.push(newItem);
    console.log(this.itemsInCart);
    this.totalPrice();
  }
}
