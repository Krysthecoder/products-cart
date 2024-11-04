import { IconRemoveItem } from '../../utils';
import { useCartProviderContext } from '../../context/CartProvider';
import { IProductsDetails } from '../../Types';
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
  const { productsData, updateProductsData } = useCartProviderContext();
  const subTotalAmount = productPrice * productAmount;

  const deleteItem = (productName: string) => {
    const updatedProducts = productsData.map((product: IProductsDetails) => {
      if (product.name === productName) {
        product.active = false;
        product.amount = 0;
        return product;
      }
      return product;
    });

    updateProductsData(updatedProducts as IProductsDetails[]);
  };

  if (productActive) {
    return (
      <div className="flex justify-between items-center mt-4">
        <div className="flex flex-col gap-2">
          <h2>{productName}</h2>
          <div className="flex gap-3">
            <p className="text-orange-700">{productAmount}x</p>
            <p className="text-slate-400">@ ${productPrice.toFixed(2)}</p>
            <p className="text-stone-500 font-semibold">
              ${subTotalAmount.toFixed(2)}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            deleteItem(productName);
          }}
          className="p-1 border-2 border-stone-400 rounded-full"
        >
          <IconRemoveItem />
        </button>
      </div>
    );
  }
};

export default ProductCartDetail;
