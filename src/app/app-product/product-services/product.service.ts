import { Injectable } from '@angular/core';
import { Product } from '../../comon-objects/product';


@Injectable()
export class ProductService {

  public productList: Product[];
  constructor() {
    this.productList = [];
  }
  getProductList(): Product[] {
    this.productList.push(new Product(5, 'Iphone10', 80000, './assets/image/phone03.png'));
    this.productList.push(new Product(3, 'Iphone7', 40000, './assets/image/s6.png'));
    this.productList.push(new Product(1, 'Iphone5', 20000, './assets/image/phone03.png'));
    this.productList.push(new Product(6, 'Lenovo', 21000, './assets/image/j7.png'));
    this.productList.push(new Product(2, 'Samsung S9', 45000, './assets/image/phone04.png'));
    this.productList.push(new Product(4, 'Iphone8', 50000, './assets/image/phone03.png'));
    return this.productList;
  }
  sortProductByPrice(order: string): Product[] {
    if (order === "asc")
      this.productList.sort((a: Product, b: Product) => a._price - b._price);
    else
      this.productList.sort((a: Product, b: Product) => a._price + b._price);
    return this.productList;
  }
  searchProductByName(productName: string): Product[] {
    return this.productList.filter(product => product._productName == productName)
  }
  getProductById(productId: number): Product[] {
    return this.productList.filter(product => product._productId == productId)
  }

}
