import { useContext } from 'react';
import { ItemsCard } from '../ItemsCard';
import { MenuItemsContext } from '../../context/MenuItemsContext';
import { IProductsDetails } from '../../Types';

const MenuItems = () => {
  const itemsData: IProductsDetails[] = useContext(MenuItemsContext);

  return (
    <div className="w-10/12 h-auto">
      <div>
        <h1 className="text-3xl">Desserts</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {itemsData.map((product) => {
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
    </div>
  );
};

export default MenuItems;
