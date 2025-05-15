import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between sticky top-0 z-50">
      <Link to="/" className="font-bold text-xl">🛒 AmazonCart</Link>
      <div className="space-x-4">
        <Link to="/wishlist" className="nav-link">Wishlist</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
      </div>
    </nav>
  );
}