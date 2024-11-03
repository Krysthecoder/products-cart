import { useCartProviderContext } from '../../context/CartProvider';
import { IProductsDetails } from '../../Types';
import CartWithItems from '../CartWithItems';
import EmptyCart from '../EmptyCart';

function CartSummary() {
  const { productsData } = useCartProviderContext();

  const cartEmpty: IProductsDetails[] = productsData.filter(
    (product) => product.active === true
  );
  return (
    <div className="w-10/12 mt-8  md:w-4/12 md:mt-4">
      {cartEmpty.length > 0 ? <CartWithItems /> : <EmptyCart />}
    </div>
  );
}

export default CartSummary;
