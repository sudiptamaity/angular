import { Product } from './product';
import { Component, Injectable } from '@angular/core';
import { ProductService } from './product-service';


@Component({
    selector: 'add-prod',
    templateUrl: './add-product.component.html'
})


export class AddProductComponent{
    product: Product=new Product();

    //this is where injection begins
    constructor(private ps:ProductService){

    }
    
  /*  add(){
        console.log("add called..");
        console.log(JSON.stringify(this.product));
    }*/

    add(pform){
       // console.log("add called..");
       // console.log(pform.value);
       //let ps=new ProductService();
       this.ps.sendToServer(this.product);
     }
}