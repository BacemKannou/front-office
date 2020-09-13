import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public host: string ="http://127.0.0.1:8080/";

  constructor(private http : HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + "Products");
  }

  getProductById(id): Observable<Product>{
    return this.http.get<Product>(this.host + "Products/" + id);
  } 
}
