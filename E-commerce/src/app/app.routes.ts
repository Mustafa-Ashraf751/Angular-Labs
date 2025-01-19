import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { ProductLoginComponent } from './product-login/product-login.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';
import { ProductCartComponent } from './product-cart/product-cart.component';

export const routes: Routes = [
  {
    path:'',
    component:ProductListComponent,
    title:'Products List'
  },{
    path:'product-details/:id',
    component:ProductDetailsComponent,
    title:'Product details'
  },{
    path:'register',
    component:ProductRegisterComponent,
    title:'Register user'
  },{
    path:'login',
    component:ProductLoginComponent,
    title:'Login page'
  },
  {
    path:'product-details/:id/cart-items',
    component:ProductCartComponent,
    title:'Carts of user'
  },
  {
    path:'cart-items',
    component:ProductCartComponent,
    title:'Carts of user'

  },
  {
    path:'**',
    component:ProductNotFoundComponent,
    title:'Not found'
  }
];
