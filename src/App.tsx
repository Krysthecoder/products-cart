import { useEffect, useState } from 'react';
import './App.css';
import CartSummary from './components/CartSummary';
import MenuItems from './components/MenuItems';
import { MenuItemsContext } from './context/MenuItemsContext';
import './output.css';
import { IProductsDetails } from './Types';

function App() {
  const [itemsData, setItemsData] = useState<IProductsDetails[]>([
    {
      category: 'waffle',
      image: {
        desktop: 'string',
        mobile: 'string',
        tablet: 'string',
        thumbnail: 'string'
      },
      name: 'string',
      price: 8
    }
  ]);

  async function dataFetcher() {
    try {
      const response = await fetch('../../../public/data.json');
      if (response.ok) {
        const json = await response.json();
        setItemsData(json);
      } else {
        console.error('Error: ', response);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    dataFetcher();
  }, []);

  return (
    <div className="flex gap-10 p-28 bg-orange-50">
      <MenuItemsContext.Provider value={itemsData}>
        <MenuItems />
        <CartSummary />
      </MenuItemsContext.Provider>
    </div>
  );
}

export default App;
