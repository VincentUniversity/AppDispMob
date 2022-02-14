import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from '../../interfaces/iproduct';
import {ProductApiService} from '../../services/product-api.service';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {
  //public product: IProduct;
  isFollow: boolean;
  public product: Product;
  public id: number;
  public stock: number;
  public price: number;
  public cat: string;
  public name: string;
  constructor(private router: ActivatedRoute, private prodService: ProductApiService, private route: Router) { }

  async ngOnInit() {
    this.id = +this.router.snapshot.paramMap.get('id');
    this.name = this.router.snapshot.queryParamMap.get('name');
    this.price = +this.router.snapshot.queryParamMap.get('price');
    this.stock = +this.router.snapshot.queryParamMap.get('stock');
    this.cat = this.router.snapshot.queryParamMap.get('category');
    //alert(name);
    this.product = new Product({name:this.name, category:this.cat, price:this.price, stock:this.stock, id:this.id});
    this.isFollow = await this.prodService.idProductFollow(this.product);
  }
  /*async ionViewWillENter(){

  }*/

  async follow(){
    const result = await this.prodService.addProductFollow(this.product, this.isFollow);
    this.route.navigate(['/tabs/tabs/favorite']);
  }
}
