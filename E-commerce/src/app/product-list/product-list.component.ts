import { provideHttpClient } from '@angular/common/http';
import { ProductServiceService } from './../services/product-service.service';
import { Product } from './../types/Product';
import { Component, Input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
//import data from '../products.json';
import { RouterLink } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartService } from '../services/cart-service.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, RouterLink, ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Array<Product> = [];

  constructor(private getProductsService: ProductServiceService) {}

  ngOnInit() {
    this.getProductsService
      .getProductList()
      .subscribe((res) => (this.products = res.products));
  }
}
