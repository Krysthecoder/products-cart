import { useCartProviderContext } from '../../context/CartProvider';
import ProductCartDetail from '../ProductCartDetail';
import { IconCarbonNeutral } from '../../utils';

function CartWithItems() {
  const { productsData } = useCartProviderContext();
  const activeProducts = productsData.filter((product) => {
    if (product.active) {
      return product;
    }
  });
  const subTotals = activeProducts.map((product) => {
    return product.amount * product.price;
  });
  const totalNet = subTotals.reduce((accum, current) => accum + current);

  return (
    <div className="bg-slate-50 h-auto">
      <div className="p-4">
        <h1 className="text-2xl md:text-xl text-orange-700 font-semibold mb-8">
          Your Cart (
          {productsData.filter((product) => product.active === true).length})
        </h1>
        <div>
          {/* item description */}
          {productsData.map((product) => {
            return (
              <ProductCartDetail
                productActive={product.active}
                productName={product.name}
                productPrice={product.price}
                productAmount={product.amount}
              />
            );
          })}

          {/* total section */}
          <div className="flex justify-between my-8 w-11/12">
            <p className="text-base text-slate-400">Order Total</p>
            <p className="text-2xl font-semibold md:text-3xl">
              {' '}
              ${totalNet.toFixed(2)}
            </p>
          </div>
          {/* ecofriendly delivery description */}
          <div className="flex justify-center items-center gap-2 bg-amber-50 w-11/12 mx-auto py-4 m-6">
            <IconCarbonNeutral />
            <h2 className="text-stone-500">
              This is a <span className="text-stone-700">carbon-neutral</span>{' '}
              delivery
            </h2>
          </div>
          {/* Order Confirmation */}
          <button className="text-white bg-orange-700 w-11/12 rounded-3xl py-3">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartWithItems;
