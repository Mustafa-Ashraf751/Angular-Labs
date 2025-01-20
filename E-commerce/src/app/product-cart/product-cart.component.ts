import { Component, Input } from '@angular/core';
import { Product } from '../types/Product';
import { CartService } from '../services/cart-service.service';
import { DiscountPipe } from '../pipes/discount.pipe';

@Component({
  selector: 'app-product-cart',
  imports: [DiscountPipe],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css',
})
export class ProductCartComponent {
  cartArray!: Product[];
  itemsInCart!: number;

  constructor(private getCarts: CartService) {}

  ngOnInit(): void {
    this.cartArray = this.getCarts.getCartItems();
    this.getCarts
      .getNumberOfItems()
      .subscribe((number) => (this.itemsInCart = number));
  }
}
