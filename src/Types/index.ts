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
  active: boolean;
  amount: number;
}

export interface IProdutcsContext {
  productsData: IProductsDetails[];
  dataFetcher: ()=>void,
  totalAmountCart: number[],
  updateTotalAmountCart: ()=>void,
}

