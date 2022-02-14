export interface IProduct {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    //offer?: number;
  }
  
  export interface IResult {
    products: IProduct[];
  }
  