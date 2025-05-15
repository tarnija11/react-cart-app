import {RecoilRoot} from 'recoil';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar'
import CartMenu from './CartMenu'
import CartItems from './CartItems'
import WishList from './WishList'

export default function AmazonCart() {
  return (
    <RecoilRoot>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow scroll-pt-16">
          <Routes>
            <Route path="/" element={<CartMenu />} />
            <Route path="/cart" element={<CartItems />} />
            <Route path="/wishList" element={<WishList />} />
          </Routes>
        </div>
      </div>
    </RecoilRoot>
  );
}