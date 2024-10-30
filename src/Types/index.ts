
export interface IProductsDetails {
  category: string;
  image: string;
  name: string;
  price: number;
  active: boolean;
  amount: number;
}

export interface IProdutcsContext {
  productsData: IProductsDetails[];
  dataFetcher: ()=>void
}

