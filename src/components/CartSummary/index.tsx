import { useCartProviderContext } from '../../context/CartProvider';
import CartWithItems from '../CartWithItems';

function CartSummary() {
  const { emptyCart } = useCartProviderContext();

  return (
    <div className="w-4/12 mt-4">
      {emptyCart ? <CartWithItems /> : <h2>hola</h2>}
    </div>
  );
}

export default CartSummary;
