import { Injectable, signal } from '@angular/core';
import { Product } from '../types/Product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productCartItems: Product[] = [];
  numberOfItems = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    const exist = this.productCartItems.some((p) => p.id === product.id);

    if (!exist) {
      this.productCartItems.push(product);
    }
    this.numberOfItems.next(this.productCartItems.length);
  }

  getCartItems(): Product[] {
    return this.productCartItems;
  }

  getNumberOfItems() {
    return this.numberOfItems;
  }
}
