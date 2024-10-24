import { useContext } from 'react';
import { ItemsCard } from '../ItemsCard';
import { ProductsContext } from '../../context/ProductsContext';
import { IProductsDetails } from '../../Types';
import ProductsCartState from '../../context/ProductsCartState';

const MenuItems = () => {
  const productsData: IProductsDetails[] | [] = useContext(ProductsContext);

  return (
    <div className="w-10/12 h-auto">
      <div>
        <h1 className="text-3xl">Desserts</h1>
      </div>
      <ProductsCartState>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {productsData.map((product) => {
            return (
              <ItemsCard
                image={product.image}
                name={product.name}
                price={product.price}
                category={product.category}
              />
            );
          })}
        </div>
      </ProductsCartState>
    </div>
  );
};

export default MenuItems;
