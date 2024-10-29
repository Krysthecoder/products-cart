import { useCartProviderContext } from '../../context/CartProvider';
import ProductCartDetail from '../ProductCartDetail';
import { IconCarbonNeutral } from '../../utils';

function CartWithItems() {
  const { productsData } = useCartProviderContext();

  return (
    <div className="">
      <div className="bg-slate-50 h-auto">
        <div className="p-4">
          <h1 className="text-xl text-orange-700 font-semibold mb-8">
            Your Cart{' '}
            {productsData.filter((product) => product.active === true).length}
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
            <div className="flex justify-between my-4 w-11/12">
              <p className="text-slate-400">Order Total</p>
              <p className="text-3xl"> $Context Data</p>
            </div>
            {/* ecofriendly delivery description */}
            <div className="flex justify-center items-center gap-2 bg-amber-50 w-11/12 mx-auto py-4 m-6">
              <IconCarbonNeutral />
              <h2 className="">
                This is a <span>carbon-neutral</span> delivery
              </h2>
            </div>
            {/* Order Confirmation */}
            <button className="text-white bg-orange-700 w-11/12 rounded-3xl py-3">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartWithItems;
