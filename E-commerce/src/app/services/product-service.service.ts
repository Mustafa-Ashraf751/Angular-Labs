import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http : HttpClient) { }

  getProductList() : Observable<any> {
    return this.http.get("https://dummyjson.com/products");
  }

  getProductListById(id:string) : Observable<any>{
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
