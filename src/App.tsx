import './App.css';
import CartSummary from './components/CartSummary';
import MenuItems from './components/MenuItems';
import './output.css';
import ProductsMenuState from './context/ProductsMenuState';
import ProductsCartState from './context/ProductsCartState';

function App() {
  return (
    <div className="flex gap-10 p-28 bg-orange-50">
      <ProductsMenuState>
        <MenuItems />
      </ProductsMenuState>
      <ProductsCartState>
        <CartSummary />
      </ProductsCartState>
    </div>
  );
}

export default App;
