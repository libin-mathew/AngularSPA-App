import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ProductService } from '../product-services/product.service';
import { Product } from '../../comon-objects/product';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productArray: Product[];
  product:Product;
  constructor(private router: Router, private productService: ProductService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.productArray = this.productService.getProductById(this.activeRoute.snapshot.params['productId']);
    this.product =  this.productArray[0];
  }
  onBack(event): void {
    console.log("hello");
    this.router.navigate(['productlist']);
  }
}
