import { ItemsCard } from '../ItemsCard';
import { useCartProviderContext } from '../../context/CartProvider';

const MenuItems = () => {
  const { productsData, updateProductsData } = useCartProviderContext();

  return (
    <div className="w-10/12 h-auto">
      <div>
        <h1 className="text-3xl">Desserts</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {productsData.map((product) => {
          return (
            <ItemsCard
              image={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
              active={product.active}
              amount={product.amount}
              updateProductsData={updateProductsData}
              key={`${product.name}-${product.price}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuItems;
