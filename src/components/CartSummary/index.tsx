import { IconCarbonNeutral, IconRemoveItem } from '../../utils';

function CartSummary() {
  const { productsData, updateProductsData } = useCartProviderContext();

  return (
    <div className="w-4/12 mt-4">
      <div className="bg-slate-50 h-auto">
        <div className="p-4">
          <h1 className="text-xl text-orange-700 font-semibold mb-8">
            Your Cart{' '}
            {productsData.filter((product) => product.active === true).length}
          </h1>
          <div>
            {/* item description */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <h2>Postre name</h2>
                <div className="flex gap-3">
                  <p className="text-orange-700">2x</p>
                  <p className="text-slate-400">@ $6.50</p>
                  <p className="text-stone-500 font-semibold">$13.00</p>
                </div>
              </div>
              <div className="p-1 border-2 border-stone-400 rounded-full">
                <IconRemoveItem />
              </div>
            </div>
            {/* total section */}
            <div className="flex justify-between my-4 w-11/12">
              <p className="text-slate-400">Order Total</p>
              <p className="text-3xl"> $45.50</p>
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
import { useCartProviderContext } from '../../context/CartProvider';

export default CartSummary;
