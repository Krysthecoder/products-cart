import './App.css';
import CartSummary from './components/CartSummary';
import MenuItems from './components/MenuItems';
import './output.css';
import ProductsMenuState from './context/ProductsMenuState';

function App() {
  return (
    <ProductsMenuState>
      <div className="flex gap-10 p-28 bg-orange-50">
        <MenuItems />
        <CartSummary />
      </div>
    </ProductsMenuState>
  );
}

export default App;
