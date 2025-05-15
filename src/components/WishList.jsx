import { useRecoilValue, useSetRecoilState } from 'recoil';
import { wishItemsListAtom, wishListAtom } from '../store/wishItemsState';
import { count, cartItemsListAtom } from '../store/cartItemsState';
import { totalPriceAtom } from '../store/cartTotalSelector';

export default function WishList() {
  const wishItemsList = useRecoilValue(wishItemsListAtom);
  const wishListCount = useRecoilValue(wishListAtom);

  // Cart state setters
  const setCartCount = useSetRecoilState(count);
  const setCartItemsList = useSetRecoilState(cartItemsListAtom);
  const setTotalPrice = useSetRecoilState(totalPriceAtom);

  const handleAddToCart = (item) => {
    setCartCount(prev => prev + 1);
    setTotalPrice(prev => prev + item.price);
    setCartItemsList(prev => [...prev, item]);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">💖 Your Wishlist</h1>

      <div className="text-center text-xl font-semibold mb-6">
        Wish Items Count: {wishListCount}
      </div>

      {wishItemsList.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {wishItemsList.map((item, index) => (
            <li key={index} className="py-4 flex justify-between items-center">
              <span className="text-lg font-medium text-gray-800">{item.title}</span>
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-semibold">${item.price}</span>
                <button
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-2 transition 
                    duration-300 ease-in-out shadow-md hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] active:scale-95 focus:outline-none"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 py-6">Your wishlist is empty.</p>
      )}
    </div>
  );
}
