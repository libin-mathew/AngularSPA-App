

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-services/product.service';
import { Product } from '../../comon-objects/product';
import { Router } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  constructor(private _productService: ProductService,private router: Router) {
    this.productList = [];
  }
  ngOnInit() {
    this.productList = this._productService.getProductList();
  }
  sortProduct(event): void {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    this._productService.sortProductByPrice(value);
    
  }
  searchProductByName(event):void{
    console.log("search");
  }
  showProductDetails(productId): void {
    this.router.navigate(['productdetails', { productId: productId }]);
  }

}
