import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from '../comon-objects/product';
import { NewProductComponent } from './newproduct/newproduct.component';
import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
 const routes: Routes = [
    {
        path: 'productlist',
        component: ProductListComponent,
        data: {
          title: 'Product Details',
          productId:0
        }
      },
    {
        path: 'productdetails',
        component: ProductDetailsComponent
    },
    {
        path: 'newproduct',
        component: NewProductComponent

    },

];
@NgModule({

    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]


})
export class AppProductRouting { }
