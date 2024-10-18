import './App.css';
import CartSummary from './components/CartSummary';
import MenuItems from './components/MenuItems';
import './output.css';

function App() {
  return (
    <div className="flex gap-10 p-28 bg-amber-50">
      <MenuItems />
      <CartSummary />
    </div>
  );
}

export default App;
