import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppProductModule } from './app-product/app-product.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,AppProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
