import React from 'react';
import { ItemsCard } from '../ItemsCard';

function MenuItems() {
  return (
    <div className="w-9/12 h-screen">
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
