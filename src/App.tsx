import './App.css';
import CartSummary from './components/CartSummary';
import MenuItems from './components/MenuItems';
import './output.css';
import ProductsStateProvider from './context/ProductStateProvider';

function App() {
  return (
    <ProductsStateProvider>
      <div className="flex gap-10 p-28 bg-orange-50">
        <MenuItems />
        <CartSummary />
      </div>
    </ProductsStateProvider>
  );
}

export default App;
