import { Component, Input } from '@angular/core';
import { Product } from '../types/Product';
import { CartService } from '../services/cart-service.service';
import { DiscountPipe } from '../pipes/discount.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-cart',
  imports: [DiscountPipe, FormsModule],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css',
})
export class ProductCartComponent {
  cartArray!: Product[];
  itemsInCart!: number;

  constructor(private getCarts: CartService) {}

  ngOnInit(): void {
    this.cartArray = this.getCarts.getCartItems().map((item) => ({
      ...item,
      quantity: 1,
    }));
    this.getCarts
      .getNumberOfItems()
      .subscribe((number) => (this.itemsInCart = number));
  }

  updateQuantity(num: number, product: Product) {
    product.quantity += num;
    this.checkStockLimit(product);
  }

  checkStockLimit(product: Product) {
    if (product.stock < product.quantity) {
      product.quantity = product.stock;
      alert("You can't exceed the stock limit!");
      product.quantity;
    }
  }

  deleteItem(product: Product, event: Event) {
    event.preventDefault();
    this.cartArray = this.cartArray.filter((p) => p.id != product.id);
    this.itemsInCart = this.cartArray.length;
    this.getCarts.setCartItems(this.cartArray.length);
  }
}
