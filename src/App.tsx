import './App.css';
import CartSummary from './components/CartSummary';
import MenuItems from './components/MenuItems';
import './output.css';
import { CartProvider } from './context/CartProvider';

function App() {
  return (
    <div className="flex flex-col md:flex-row md:gap-10 md:p-28 pt-8 justify-center items-center md:justify-start md:items-start bg-orange-50">
      <CartProvider>
        <MenuItems />
        <CartSummary />
      </CartProvider>
    </div>
  );
}

export default App;
