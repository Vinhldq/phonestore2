import { Component } from '@angular/core';
import { Product } from '../../models/product.models';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {SharedModule} from "../../modules/shared.modules";
import {CartService} from "../../services/cart/cart.service";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NavbarComponent, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    public service: ProductService,
    public cartService: CartService
  ) {}

  products = this.service.products;

  getAllProduct() {
    return this.service.getAllProduct();
  }

  addToCart(newItem: Product) {
    this.cartService.addToCart(newItem);
  }
}
