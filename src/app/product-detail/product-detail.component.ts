import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { Product, ProductService } from '../shared/product.service';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
  // productId: string;
  // productCategory: string;

  product: Product;


  constructor(private route: ActivatedRoute, private productService: ProductService) { 
      // this.productId = route.snapshot.paramMap.get("id");
      // this.productCategory = route.snapshot.queryParamMap.get('category');
  }

  ngOnInit() {
    const prodId: number = parseInt(this.route.snapshot.params['productId']);
    this.product = this.productService.getProductById(prodId);
  }

}
