export interface IProductsDetails {
  category: string;
  image: {
    desktop: string;
    mobile: string;
    tablet: string;
    thumbnail: string;
  };
  name: string;
  price: number;
}
