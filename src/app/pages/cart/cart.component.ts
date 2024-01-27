import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingCartComponent } from '../../components/shopping-cart/shopping-cart.component';
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterOutlet, ShoppingCartComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  constructor(private service: CartService) {}

  allItemInCart() {
    return this.service.itemsInCart;
  }
}
