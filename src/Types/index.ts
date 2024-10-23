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

export interface IProductsCart {
  productName: string;
  productPrice: number;
  productAmount: number;
  updateProductsCart: ()=>void;
}
