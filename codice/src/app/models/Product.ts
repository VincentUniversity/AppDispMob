import {IProduct} from '../interfaces/iproduct';

export class Product{

  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;

  constructor(prodData: IProduct) {
    this.name = prodData.name;
    this.category = prodData.category;
    this.price = prodData.price;
    this.stock = prodData.stock;
    this.id = prodData.id;
  }
}
