import { Router, RouterLink } from '@angular/router';
import { Product } from './../types/Product';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() productItem !: Product;

 constructor(private router:Router){

 }

  cardClicked(id:number){
    this.router.navigate(['product-details',id]);
  }


}
