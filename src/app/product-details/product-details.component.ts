import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked, 
OnDestroy {


  product;

  constructor(private productService : ProductService , private activatedRoute : ActivatedRoute,
    private router: Router) {
    
      router.events.subscribe(event=>{
        if(event instanceof NavigationEnd){
          console.log(atob(this.activatedRoute.snapshot.params.id));
          this.getProduct();
        }
      })
   }

  ngOnInit() {
    console.log(atob(this.activatedRoute.snapshot.params.id));
    this.getProduct();
  }
  getProduct(){
    this.productService.getProductById(atob(this.activatedRoute.snapshot.params.id)).subscribe(response =>{
      this.product= response;
      console.log(this.product)
    },
    error =>{
      console.log(error);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!'); 
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

}
