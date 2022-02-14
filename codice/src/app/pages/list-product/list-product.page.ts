import { Component, OnInit } from '@angular/core';
import {ProductApiService} from '../../services/product-api.service';
import {IProduct} from '../../interfaces/iproduct';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.page.html',
  styleUrls: ['./list-product.page.scss'],
})
export class ListProductPage implements OnInit {
  product: IProduct[];
  constructor(public prodService: ProductApiService) { }

  ngOnInit() {
    this.prodService.getProduct().subscribe(res =>{this.product = res;});
  }

}
