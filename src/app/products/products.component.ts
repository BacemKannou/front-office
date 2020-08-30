import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;
  product;
  

  constructor(private productService : ProductService , private router: Router) {
      router.events.subscribe(event=>{

      })
   }
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
