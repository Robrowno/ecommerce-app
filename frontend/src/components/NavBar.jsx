import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const cartItems = JSON.parse(localStorage.getItem("cart")) || []; // Get cart items

	return (
		<nav className="bg-gray-800 shadow-md">
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
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									viewBox="0 0 24 24"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									viewBox="0 0 24 24"
								>
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
							<Link to="/products" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
								Products
							</Link>
							<Link
								to="/products?category=Laptops"
								className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
							>
								Computers
							</Link>
							<Link
								to="/products?category=Mobile Phones"
								className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
							>
								Mobiles
							</Link>
							{/* <Link to="/about" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
								About
							</Link> */}
						</div>
					</div>

					{/* Cart & Profile */}
					<div className="absolute inset-y-0 right-0 flex items-center space-x-4">
						{/* Cart Button */}
						<Link to="/cart" className="relative text-gray-400 hover:text-white">
							<svg
								className="w-7 h-7"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3 3h2l1.5 9h12l1.5-6H6M7 18a2 2 0 100 4 2 2 0 000-4m10 0a2 2 0 100 4 2 2 0 000-4"
								/>
							</svg>
							{cartItems.length > 0 && (
								<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
									{cartItems.length}
								</span>
							)}
						</Link>

						{/* Profile Dropdown */}
						<div className="relative">
							<button
								onClick={() => setIsDropdownOpen(!isDropdownOpen)}
								className="text-gray-400 hover:text-white focus:ring-2 focus:ring-white rounded-full p-1"
							>
								<img
									className="size-8 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</button>

							{isDropdownOpen && (
								<div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
									<Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
										Profile
									</Link>
									<Link to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
										Orders
									</Link>
									<Link to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
										Logout
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="sm:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1">
						<Link to="/products" className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-700">
							Products
						</Link>
						<Link
							to="/category/computers"
							className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-700"
						>
							Computers
						</Link>
						<Link
							to="/category/mobiles"
							className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-700"
						>
							Mobiles
						</Link>
						{/* <Link to="/about" className="block px-3 py-2 text-base text-gray-300 hover:bg-gray-700">
							About
						</Link> */}
					</div>
				</div>
			)}
		</nav>
	);
}
