import { Router, RouterLink } from '@angular/router';
import { Product } from './../types/Product';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../services/cart-service.service';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productItem!: Product;

  productCarts!: Product[];

  constructor(private router: Router, private addCart: CartService) {}

  addCartOnClick(product: Product) {
    this.addCart.addToCart(product);
  }

  cardClicked(id: number) {
    this.router.navigate(['product-details', id]);
  }
}
