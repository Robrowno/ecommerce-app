import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <svg
                                    className="size-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    className="size-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Logo and navigation */}
                    <div className="flex flex-1 items-center justify-center sm:justify-start">
                        <div className="flex shrink-0 items-center text-white">
                            <Link href="/" className="flex items-center">
                                <img
                                    className="h-11 w-auto rounded pr-3"
                                    src="./public/cmdctrl.jpg"
                                    alt="CmdCtrl Logo"
                                />
                                CmdCtrl
                            </Link>

                        </div>
                        <div className="hidden sm:ml-9 sm:block">
                            <div className="flex space-x-4">
                                <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">
                                    All products
                                </a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                    Computers
                                </a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                    Mobiles
                                </a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                    About
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right side icons */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Notification Button */}
                        <button
                            type="button"
                            className="relative rounded-full bg-gray-800 p-1 mr-10 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="sr-only">View cart</span>
                            <svg
                                className="w-6 h-6 text-gray-400 hover:text-white transition duration-200"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 3h2l1.5 9h12l1.5-6H6M7 18a2 2 0 100 4 2 2 0 000-4m10 0a2 2 0 100 4 2 2 0 000-4"
                                />
                            </svg>
                        </button>

                        {/* Profile Dropdown */}
                        <div className="relative ml-3">
                            <button
                                type="button"
                                className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                aria-expanded={isDropdownOpen}
                                aria-haspopup="true"
                            >
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="size-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                                        Your Profile
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                                        Settings
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                                        Sign out
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">
                            All Products
                        </a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                            Computers
                        </a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                            Mobiles
                        </a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                            About
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
