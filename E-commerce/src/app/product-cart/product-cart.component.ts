import { Component, Input } from '@angular/core';
import { Product } from '../types/Product';

@Component({
  selector: 'app-product-cart',
  imports: [],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {

  @Input() itemToCartArray !: number;

  cartArray !: Product[];



}
