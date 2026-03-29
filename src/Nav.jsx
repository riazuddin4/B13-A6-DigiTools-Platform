import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600">
          DigiTools
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
          <li className="hover:text-purple-600 cursor-pointer">Products</li>
          <li className="hover:text-purple-600 cursor-pointer">Features</li>
          <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
          <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          
          {/* Cart Icon */}
          <FaShoppingCart className="text-gray-600 text-lg cursor-pointer hover:text-purple-600" />

          {/* Login */}
          <button className="text-gray-600 hover:text-purple-600">
            Login
          </button>

          {/* Get Started */}
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;