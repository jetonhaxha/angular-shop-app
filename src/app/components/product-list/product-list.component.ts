import { Component, Input, OnInit } from '@angular/core';
import { products, Product } from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = products;

  constructor() {}

  ngOnInit(): void {}

  share() {
    window.alert('The product has been shared');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
