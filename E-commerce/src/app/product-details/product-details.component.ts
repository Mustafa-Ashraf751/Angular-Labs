import { Component, Input } from '@angular/core';
import { Product } from '../types/Product';
import { RouterLink } from '@angular/router';
import products from '../products.json';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input() id !: string;

  productDetails !: Product;

  discountPrice !: string;



  ngOnInit(): void {
    const result = products.find((product)=>product.id === Number.parseInt(this.id));
    if(!result){
       throw Error("Sorry the product you want is not found")
    }else{
      this.productDetails = result;
      const newPrice = result.price - (result.price*(result.discountPercentage /100));
      this.discountPrice = newPrice.toFixed(2);

    }
  }

  getStars(){
    return Math.floor(this.productDetails.rating);
  }




}
