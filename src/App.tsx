import { useEffect, useState } from 'react';
import './App.css';
import CartSummary from './components/CartSummary';
import MenuItems from './components/MenuItems';
import { MenuItemsContext } from './context/MenuItemsContext';
import './output.css';

export interface Items {
  title: string;
  price: number;
}

const items = {
  title: 'cheesecake',
  price: 30
};

function App() {
  const [itemsData, setItemsData] = useState({});

  async function dataFetcher() {
    try {
      const response = await fetch('../../../public/data.json');
      if (response.ok) {
        const json = await response.json();
        setItemsData(json);
      } else {
        console.error('Promise resolved but HTTP status failed');
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    dataFetcher();
  }, []);

  console.log('itemsData', itemsData);
  return (
    <div className="flex gap-10 p-28 bg-amber-50">
      <MenuItemsContext.Provider value={items}>
        <MenuItems />
        <CartSummary />
      </MenuItemsContext.Provider>
    </div>
  );
}

export default App;
