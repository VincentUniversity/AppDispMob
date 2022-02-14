import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/Product';
import {ProductApiService} from '../../services/product-api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  product: Observable<Product[]>;
  constructor(private prodService: ProductApiService) { }

  ngOnInit() {
  }
 async ionViewWillEnter() {
   this.product = await this.prodService.getProductFollow();
   console.log(this.product);
 }
}
