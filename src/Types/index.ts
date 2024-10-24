export type IimageTypes = {
  desktop: string;
  mobile: string;
  tablet: string;
  thumbnail: string;
};

export interface IProductsDetails {
  category: string;
  image: IimageTypes;
  name: string;
  price: number;
}

export interface IProdutcsContext {
  productsData: IProductsDetails[];
  dataFetcher: ()=>void
}

export interface IProductsCart {
  productName: string;
  productPrice: number;
  productAmount: number;
}
export interface IProductsCartContext {
  productInCart: IProductsCart;
  setProductsCart: ()=>void;
  productAdded: boolean;
  setProductAdded: ()=>void;
}
