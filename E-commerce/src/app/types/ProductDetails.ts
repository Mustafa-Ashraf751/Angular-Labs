import { Dimensions } from './Dimensions';
import {Review} from './Reviews';
import {Meta} from './Meta';


export interface ProductDetails {
  discountPercentage: number;
  tags: string[];
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
}





