import {ChangeDetectorRef, Component, ElementRef, inject, ViewChild} from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {CartService} from "../../services/cart/cart.service";
import {FirebaseService} from "../../services/firebase/firebase.service";
import {SharedModule} from "../../modules/shared.modules";
import {Product} from "../../models/product.models";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(
    public productService: ProductService,
    public cartService: CartService,
    public fbService: FirebaseService
  ) {}

  removeItems(i: number) {
    this.productService.removeItems(i);
  }
  @ViewChild('formup', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);

  //form update form service
  formupdate = this.productService.formupdate;

  updateItem() {
    this.productService.updateItem();
  }

  addCart(item: Product) {
    this.cartService.addToCart(item);
  }
}
