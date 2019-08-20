import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from "../shared/product.service";

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}


//3.7.3. HomeComponent
//https://livebook.manning.com/book/angular-development-with-typescript-second-edition/chapter-3/190