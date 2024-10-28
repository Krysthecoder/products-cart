import { IconRemoveItem } from '../../utils';

interface IProductCartDetail {
  productActive: boolean;
  productName: string;
  productPrice: number;
  productAmount: number;
}

const ProductCartDetail = ({
  productActive,
  productName,
  productPrice,
  productAmount
}: IProductCartDetail) => {
  if (productActive) {
    return (
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2>{productName}</h2>
          <div className="flex gap-3">
            <p className="text-orange-700">{productAmount}x</p>
            <p className="text-slate-400">@ ${productPrice}</p>
            <p className="text-stone-500 font-semibold">$13.00</p>
          </div>
        </div>
        <div className="p-1 border-2 border-stone-400 rounded-full">
          <IconRemoveItem />
        </div>
      </div>
    );
  }
  // return (

  // );
};

export default ProductCartDetail;
