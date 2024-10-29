import { useCartProviderContext } from '../../context/CartProvider';
import { IProductsDetails } from '../../Types';
import CartWithItems from '../CartWithItems';

function CartSummary() {
  const { productsData } = useCartProviderContext();
  const cartEmpty: IProductsDetails[] = productsData.filter(
    (product) => product.active === true
  );
  return (
    <div className="w-4/12 mt-4">
      {cartEmpty.length > 0 ? <CartWithItems /> : <h2>esto esta vacio</h2>}
    </div>
  );
}

export default CartSummary;
