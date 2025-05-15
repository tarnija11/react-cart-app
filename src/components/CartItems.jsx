import { useRecoilValue, useSetRecoilState } from 'recoil'; 
import { count, cartItemsListAtom } from '../store/cartItemsState';
import { totalPriceAtom } from '../store/cartTotalSelector';

export default function CartItems() {
  const totalPrice = useRecoilValue(totalPriceAtom);
  const CartItemsList = useRecoilValue(cartItemsListAtom);

  const setCartCount = useSetRecoilState(count);
  const setCartItemsList = useSetRecoilState(cartItemsListAtom);
  const setTotalPrice = useSetRecoilState(totalPriceAtom);

  const clearCart = () => {
    setCartCount(0);
    setCartItemsList([]);
    setTotalPrice(0);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">🛒 Your Cart</h1>

      <ul className="divide-y divide-gray-200">
        {CartItemsList.length > 0 ? (
          CartItemsList.map((item, index) => (
            <li key={index} className="py-4 flex justify-between items-center">
              <span className="text-lg font-medium text-gray-800">{item.title}</span>
              <span className="text-gray-600 font-semibold">₹{item.price}</span>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500 py-6">Your cart is empty.</p>
        )}
      </ul>

      <div className="mt-6 border-t pt-4 flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>₹{totalPrice}</span>
      </div>

      {CartItemsList.length > 0 && (
        <div className="mt-6 flex gap-4">
          <button
            className="
              flex-1 bg-black text-white py-3 rounded-lg 
              transition duration-300 ease-in-out 
              hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] 
              active:scale-95
            "
          >
            Proceed to Checkout
          </button>

          <button
            className="
              flex-1 bg-black text-white py-3 rounded-lg 
              transition duration-300 ease-in-out 
              hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] 
              active:scale-95
            "
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
