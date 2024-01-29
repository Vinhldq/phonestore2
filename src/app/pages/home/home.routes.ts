import { Route } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { HomeComponent } from './home.component';
import {ProductComponent} from "../../components/product/product.component";
import {ProductManagementComponent} from "../product-management/product-management.component";
import {ProductDetailComponent} from "../product-detail/product-detail.component";

export const HOME_ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'product', component: ProductComponent, children: [
          {
            path: 'product-detail', component: ProductDetailComponent
          },
        ]
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'product-management',
        component: ProductManagementComponent,
      },
      {
        path: '',
        redirectTo: 'product',
        pathMatch: 'full',
      },
    ],
  },
];
