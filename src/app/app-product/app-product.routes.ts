import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from '../comon-objects/product';
import { NewProductComponent } from './newproduct/newproduct.component';
import { NgModule } from '@angular/core';
 const routes: Routes = [
    {
        path: 'productlist',
        component: ProductListComponent,
        data: {
          title: 'Interviewer Details',
          id:0
        }
      },
    {
        path: 'product',
        component: Product
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
