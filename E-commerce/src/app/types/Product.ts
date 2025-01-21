import { ProductDetails } from './ProductDetails';
import { ProductBasicInfo } from './ProductBasicInfo';

export interface Product extends ProductDetails, ProductBasicInfo {
  quantity: number;
}
