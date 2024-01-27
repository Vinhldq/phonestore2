import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {ProductManagementComponent} from "./pages/product-management/product-management.component";

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.routes').then((mod) => mod.HOME_ROUTES),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.routes').then((mod) => mod.LOGIN_ROUTES),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
