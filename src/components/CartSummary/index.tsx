import { IconCarbonNeutral } from '../../utils';

function CartSummary() {
  return (
    <div className="w-4/12">
      <div className="bg-slate-50 h-auto">
        <h1 className="text-xl">Your Cart (0)</h1>
        <div>
          <div></div>
          <div></div>
          <div className="flex justify-center items-center gap-2 bg-amber-50 w-10/12 mx-auto py-4">
            <IconCarbonNeutral />
            <h2 className="">
              This is a <span>carbon-neutral</span> delivery
            </h2>
          </div>
          <button className="text-white bg-orange-700 w-11/12 rounded-3xl py-3">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
