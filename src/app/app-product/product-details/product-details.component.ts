import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onBack(event): void {
    console.log("hello");
    this.router.navigate(['productlist']);
  }
}
