import './App.css';
import CartSummary from './components/CartSummary';
import MenuItems from './components/MenuItems';
import './output.css';
import { CartProvider } from './context/CartProvider';

function App() {
  return (
    <div className="flex gap-10 p-28 bg-orange-50">
      <CartProvider>
        <MenuItems />
        <CartSummary />
      </CartProvider>
    </div>
  );
}

export default App;
