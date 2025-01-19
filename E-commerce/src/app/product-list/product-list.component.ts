import { Product } from './../types/Product';
import { Component, Input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import data from '../products.json';
import { RouterLink } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent,RouterLink,ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

 products : Array<Product> = data;


}
