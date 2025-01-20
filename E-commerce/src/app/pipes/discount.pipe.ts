import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discountPercentage: number): string {
    if (!price || !discountPercentage) {
      return price.toString() || '';
    }

    const discount = (price * discountPercentage) / 100;
    const discountedPrice = price - discount;
    return '$' + discountedPrice.toFixed(2);
  }
}
