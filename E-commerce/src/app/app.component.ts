import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from './services/cart-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'E-commerce';

  numberOfItems!: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService
      .getNumberOfItems()
      .subscribe((number) => (this.numberOfItems = number));
  }
}
