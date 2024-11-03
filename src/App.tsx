import './App.css';
import CartSummary from './components/CartSummary';
import MenuItems from './components/MenuItems';
import './output.css';
import { CartProvider } from './context/CartProvider';

function App() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-10 lg:p-16 pt-8 justify-center items-center lg:justify-start lg:items-start bg-orange-50">
      <CartProvider>
        <MenuItems />
        <CartSummary />
      </CartProvider>
    </div>
  );
}

export default App;
