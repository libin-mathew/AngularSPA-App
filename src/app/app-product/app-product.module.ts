import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppProductComponent } from './app-product.component';
import { ProductService } from './product-services/product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewProductComponent } from './newproduct/newproduct.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppProductRouting } from './app-product.routes';


@NgModule({
  imports: [
    CommonModule,AppProductRouting
  ],
  declarations: [AppProductComponent, ProductListComponent, NavigationComponent, ProductDetailsComponent, NewProductComponent],
  exports: [AppProductComponent],
  providers: [ProductService]
})
export class AppProductModule { }
