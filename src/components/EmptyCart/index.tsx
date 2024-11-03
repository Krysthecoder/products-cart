import { IllustrationEmptyCard } from '../../utils';
function EmptyCart() {
  return (
    <div className="h-auto w-full">
      <div className="p-4">
        <h1 className="text-2xl md:text-xl text-orange-700 font-semibold mb-8">
          Your Cart (0)
        </h1>
        <div className="flex flex-col justify-center items-center w-full mt-8">
          <IllustrationEmptyCard />
          <p className="text-zinc-400 text-sm">
            Your added items will appear here
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
