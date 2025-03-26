import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ Import auth context
import CartIcon from "./CartIcon";
import Dropdown from "./Dropdown";

export default function NavBar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
	const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);

	const { user, logout } = useAuth(); // ✅ Destructure logout

	const handleCartToggle = (isOpen) => {
		setIsCartDropdownOpen(isOpen);
		if (isOpen) {
			setIsProfileDropdownOpen(false);
		}
	};

	const handleProfileToggle = (isOpen) => {
		setIsProfileDropdownOpen(isOpen);
		if (isOpen) {
			setIsCartDropdownOpen(false);
		}
	};

	return (
		<nav className="bg-gray-800 shadow-md sticky top-0 z-50">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					{/* Mobile Menu Button */}
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<button
							type="button"
							className="p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md focus:ring-2 focus:ring-white"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						>
							{isMobileMenuOpen ? (
								<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18m-18 6h18" />
								</svg>
							)}
						</button>
					</div>

					{/* Logo & Navigation */}
					<div className="flex flex-1 items-center justify-center sm:justify-start">
						<Link to="/" className="text-white text-lg font-bold flex items-center">
							<img src="/cmdctrl.jpg" alt="Logo" className="h-10 w-auto mr-3 rounded" />
							CmdCtrl
						</Link>

						<div className="hidden sm:ml-10 sm:flex space-x-4">
							<Link to="/products" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Products</Link>
							<Link to="/products?category=Laptops" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Computers</Link>
							<Link to="/products?category=Mobile Phones" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Mobiles</Link>
						</div>
					</div>

					{/* Cart & Profile */}
					<div className="absolute inset-y-0 right-0 flex items-center space-x-4">
						{/* Cart Icon */}
						<CartIcon isOpen={isCartDropdownOpen} onToggle={handleCartToggle} />

						{/* Profile Dropdown */}
						<Dropdown
        isOpen={isProfileDropdownOpen}
        onClose={() => setIsProfileDropdownOpen(false)}
        trigger={
          <button
            onClick={() => handleProfileToggle(!isProfileDropdownOpen)}
            className={`text-gray-400 hover:text-white focus:ring-2 focus:ring-white rounded-full p-1 ${
              isProfileDropdownOpen ? "text-white" : ""
            }`}
          >
            <span className="text-white text-xl">👤</span>

          </button>
        }
        className="w-48"
      >
        {user ? (
          <>
            <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              Profile
            </Link>
            <Link to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              Orders
            </Link>
            <button
              onClick={logout}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              Login
            </Link>
            <Link to="/register" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              Register
            </Link>
          </>
        )}
      </Dropdown>

					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="sm:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1">
						<Link to="/products" className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-700">Products</Link>
						<Link to="/category/computers" className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-700">Computers</Link>
						<Link to="/category/mobiles" className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-700">Mobiles</Link>
					</div>
				</div>
			)}
		</nav>
	);
}
