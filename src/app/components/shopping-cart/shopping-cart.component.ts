import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
  inject,
} from '@angular/core';
import { Product } from '../../models/product.models';
import { RouterLink } from '@angular/router';
import {TuiButtonModule} from "@taiga-ui/core";
import {TuiIslandModule} from "@taiga-ui/kit";
import { FirebaseService } from '../../services/firebase/firebase.service';
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [RouterLink, TuiButtonModule, TuiIslandModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  @ViewChild('dialogCart', { static: true })
  dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);
  openDialog() {
    this.dialog.nativeElement.showModal();
    this.cdr.detectChanges();
  }

  constructor(public cartService: CartService, public fbService: FirebaseService) {}

  closeDialog() {
    this.dialog.nativeElement.close();
    this.cdr.detectChanges();
  }

  removeItems(item: Product) {
    this.fbService.removeItems(item);
    this.fbService.totalPrice();
  }



  totalPrice = this.cartService.total;

  //addItems() update quantity

  updateCart(i: number) {
    this.fbService.addItems(i);
  }

  removeQuantity(i: number) {
    this.fbService.removeQuantity(i);
  }

  openSnackBar() {
    window.alert('Cám ơn bạn đã mua hàng!!!');
    this.closeDialog();
  }
}
