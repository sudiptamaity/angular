import { Product } from './product';
import { Injectable } from '@angular/core';
import { providerDef } from '@angular/core/src/view';


@Injectable()
export class ProductService {
    sendToServer(product: Product) {
        //our code to communicate with the server will be here
    }


    retrieveFromServer(): Product[] {
        let p1 = new Product(1, "mobile", 50000, 20);
        let p2 = new Product(2, "ac", 20000, 20);
        let p3 = new Product(3, "tv", 10000, 30);

        let products = [p1, p2, p3];
        return products;
    }
}