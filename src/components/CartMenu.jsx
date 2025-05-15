import { useRecoilValue, useSetRecoilState } from 'recoil';
import { count, cartItemsListAtom } from '../store/cartItemsState';
import { wishListAtom, wishItemsListAtom } from '../store/wishItemsState';
import { totalPriceAtom } from '../store/cartTotalSelector';
import { useFetch } from '../hooks/useFetch';

export default function CartMenu() {

  const {data:items, loadMore, loading} = useFetch();
  

  // cart atom
  const setCartCount = useSetRecoilState(count);
  const cartCount = useRecoilValue(count); //to see the value

  // wishlist atom
  const setWishCount = useSetRecoilState(wishListAtom);
  const setWishItemsList = useSetRecoilState(wishItemsListAtom)
  const wishListCount = useRecoilValue(wishListAtom);

  // total price atom
  const setTotalPrice = useSetRecoilState(totalPriceAtom);
  const setCartItemsList = useSetRecoilState(cartItemsListAtom);

  const handleAddToCart = (item) =>{
    setCartCount(prev => prev + 1);
    setTotalPrice(prev => prev + item.price);
    setCartItemsList(prev => [...prev, item]);
  }

  const handleAddToWishList = (item) =>{
    setWishCount(prev => prev + 1);
    setWishItemsList(prev => [...prev, item]);
  }

  return (
  <>
    <div className="flex gap-8 p-6">
      {/* Sticky left sidebar with counts */}
      <div className="sticky top-22 flex flex-col gap-6 min-w-[220px] self-start h-fit">
        <div className="flex items-center bg-white shadow-md rounded-lg px-6 py-4 w-48 justify-center gap-3">
          <span className="text-2xl font-bold text-gray-800">🛒</span>
          <div>
            <p className="text-gray-500 text-sm">Cart Items</p>
            <p className="text-xl font-extrabold text-black">{cartCount}</p>
          </div>
        </div>

        <div className="flex items-center bg-white shadow-md rounded-lg px-6 py-4 w-48 justify-center gap-3">
          <span className="text-2xl font-bold text-gray-800">💖</span>
          <div>
            <p className="text-gray-500 text-sm">Wishlist Items</p>
            <p className="text-xl font-extrabold text-black">{wishListCount}</p>
          </div>
        </div>
      </div>

      {/* Products grid on the right */}
      <div className="flex-1">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {items.map(item => (
            <div key={item.id} className="relative bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow">
              <button className="absolute top-2 right-2 text-red-500 text-xl hover:scale-110 transition-transform" onClick={() => handleAddToWishList(item)}>
                ❤️
              </button>
              <img src={item.thumbnail} alt={item.title} className='w-32 h-32 object-contain mx-auto mb-4' />
              <h2 className="text-lg font-semibold text-center mb-2">{item.title}</h2>
              <p className='text-center text-gray-700 font-medium'>${item.price}</p>
              <div className="flex justify-center mt-4">
                <button
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-2 transition duration-300 ease-in-out shadow-md hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] active:scale-95 focus:outline-none"
                  onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-10 mt-8">
          <button
            onClick={loadMore}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            {loading ? 'Loading...' : 'Show more products'}
          </button>
        </div>
      </div>
    </div>
  </>
);

}

 
