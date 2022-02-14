import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {IProduct, IResult} from '../interfaces/iproduct';
import{map} from 'rxjs/operators';
import {from, Observable} from 'rxjs';
import {Storage} from '@ionic/storage-angular';
import {Product} from '../models/Product';


const PRODUCT_FOLLOW ='product_follow';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(public http: HttpClient, private storage: Storage) {
    this.storage.create();
  }
  getProduct(): Observable<IProduct[]>{
    return this.http.get<IResult>(environment.prodUrl).pipe(map(((res: IResult) => res.products)));
  }

  /*async addProductToFollow(prod){
    let data = this.storage.get<IProduct[]>(PRODUCT_FOLLOW);
  }*/

 async addProductFollow(prod: Product, isFollow: boolean){
   //this.storage.clear();
   //await this.storage.set(PRODUCT_FOLLOW, []);
    let data: Product[] = await this.storage.get(PRODUCT_FOLLOW) ?? [];
    if(!isFollow && data.some((res)=> res.id === prod.id)){
      return;
    }
    if(!isFollow){
      data.push(prod);
    }
    else {
      data = data.filter(res => res.id !==prod.id);
    }
      return await this.storage.set(PRODUCT_FOLLOW, data);

  }

  async getProductFollow(): Promise<Observable<IProduct[]>>{
    return from(this.storage.get(PRODUCT_FOLLOW));
  }

  async idProductFollow(prod: Product){
    const data: Product[] = await this.storage.get(PRODUCT_FOLLOW) ?? [];
    if(data.length===0){
      return false;
    }
    if(data.some((res)=> res.id === prod.id)){
      return true;
    }
    return false;
  }

  searchProduct(productName: string): Observable<Product[]>{
      productName = productName.toUpperCase();
     return this.http.get<IResult>(environment.prodUrl).pipe(map((res: IResult) =>{
       if(productName.length > 0) {
         res.products = res.products.filter(p => p.name.toUpperCase().startsWith(productName));
       }
       else{
         res.products = [];
       }
        return res.products.map(resp => new Product(resp));
  }));
     //res.products = res.products.filter(p => p.name.startsWith(productName));

   }
    //return this.http.get<IResult>(environment.prodUrl).pipe(map(((res: IResult) => res.products)));

}
