
import {  TUI_SANITIZER } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { Product } from './models/product.models';
import {SharedModule} from "./modules/shared.modules";
import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import { Auth} from '@angular/fire/auth';
import { Router } from '@angular/router';

import { getAuth, onAuthStateChanged } from "firebase/auth";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SharedModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent {
  title = 'demo';
  products: Product[] = [];
  currentId: number = this.products.length + 1;
  addItem(newItem: Product) {
    this.products.push(newItem);
  }
  constructor(private auth: Auth, private router: Router) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        this.router.navigate(['/home']);
        // ...
      } else {
        this.router.navigate(['/login']);
        // User is signed out
        // ...
      }
    });
  }

}
