import { Component, Input } from '@angular/core';
import { Product } from '../types/Product';
import { RouterLink } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';
import { CartService } from '../services/cart-service.service';
import { DiscountPipe } from '../pipes/discount.pipe';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink, DiscountPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  @Input() id!: string;

  productDetails!: any;

  discountPrice!: string;

  constructor(
    private getProductById: ProductServiceService,
    private service: CartService
  ) {}

  ngOnInit(): void {
    this.getProductById.getProductListById(this.id).subscribe(
      (res) => (this.productDetails = res),
      (error) => console.log(error)
    );
  }

  addCartOnClick(product: Product) {
    this.service.addToCart(product);
  }

  getStars() {
    return Math.floor(this.productDetails.rating);
  }
}
