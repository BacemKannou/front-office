import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { PRODUCTS } from '../mocks/mock_products';
import { error } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;
  product;
  a:number =0.03;
  b:number =0.02;
  c:number;
  

  constructor(private productService : ProductService , private router: Router) { }
    getAllProducts(){
      this.productService.getAllProducts().subscribe(response => 
        {
          this.products = response.map(item => 
          {
            return new Product( 
                item.id,
                item.name
            );
          });
        });
     
      } 
    getProducts(){
      this.productService.getAllProducts().subscribe(response => 
        {
          this.products = response;
          this.c=this.a - this.b;
        },
        err=> {
          console.log(err);
        });
     
    }

    onClickProduct(product){
      this.product=product;
      this.router.navigateByUrl("/productDetails/"+btoa(product.id));
    }

  ngOnInit() {
    this.getProducts();
  }

}
