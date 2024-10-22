import { useEffect, useState } from 'react';
import { ItemsCard } from '../ItemsCard';

function MenuItems() {
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
    <div className="w-10/12 h-screen">
      <div>
        <h1 className="text-3xl">Desserts</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
      </div>
    </div>
  );
}

export default MenuItems;
