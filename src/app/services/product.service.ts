import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public host: string ="http://127.0.0.1:8080/";

  constructor(private http : HttpClient, private authentiationService : AuthenticationService) { }

  getAllProducts(): Observable<Product[]> {
    let headers = new HttpHeaders({'Authorization' : 'Bearer ' + this.authentiationService.jwt})
    return this.http.get<Product[]>(this.host + "Products",{ headers: headers});
  }

  getProductById(id): Observable<Product>{
    let headers = new HttpHeaders({'Authorization' : 'Bearer ' + this.authentiationService.jwt})
    return this.http.get<Product>(this.host + "Products/" + id, { headers: headers});
  } 
}
