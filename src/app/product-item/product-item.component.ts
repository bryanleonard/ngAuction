import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../shared/product.service"

@Component({
  selector: 'nga-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  constructor() { }

  @Input() product: Product;

  ngOnInit() {
  }

}