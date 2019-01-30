import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { AddProductComponent } from './product/add-product.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product/product-service';


@NgModule({
  declarations: [
    AppComponent, ProductListComponent, AddProductComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path : 'add-product',component:AddProductComponent},  //creating routes for two different tasks
      {path : 'list-product',component:ProductListComponent}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]

})
export class AppModule { }
