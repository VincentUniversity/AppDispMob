import { Component } from '@angular/core';
import {ProductApiService} from '../../services/product-api.service';
import {IProduct} from '../../interfaces/iproduct';
import {Product} from '../../models/Product';
import {Observable} from 'rxjs';
import {MenuController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home-logged.page.html',
  styleUrls: ['home-logged.page.scss'],
})
export class HomePageLogged {
  product: Observable<Product[]>;
  //product: IProduct[];
  constructor(public prodService: ProductApiService) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    //this.prodService.getProduct().subscribe(res =>{this.product = res;});
  }
  filterProduct($event){
    this.product = this.prodService.searchProduct($event.target.value);
  }

  clearFilter($event){

  }

}
