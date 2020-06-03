import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productService : ProductService , private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    console.log(atob(this.activatedRoute.snapshot.params.id));
  }
  getProduct(){
  }

}
