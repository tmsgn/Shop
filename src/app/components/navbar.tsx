"use client";
import Link from "next/link";
import { SignIn, SignUp, UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useCart } from "./cartContext";
const NavBar = () => {
  const pathname = usePathname();
  const user = useAuth();
  const { items } = useCart();
  return (
    <nav className="w-full   px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between py-3 border-b border-gray-200">
        <div className="flex-shrink-0  mb-4 sm:mb-0 sm:mr-6">
          <Link
            href="/"
            className="text-2xl flex items-center gap-2 font-bold text-gray-800 no-underline"
          >
            <img src="/icon.svg" alt="" className="h-5" />
            Shopr
          </Link>
        </div>
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 flex-grow max-w-full sm:max-w-sm lg:max-w-md mr-0 sm:mr-6 order-last sm:order-none w-full sm:w-auto">
          <svg
            className="w-5 h-5 text-gray-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="flex-grow border-none outline-none bg-transparent text-sm text-gray-800 placeholder-gray-500"
          />
        </div>
        <div className="flex items-center space-x-5">
          <Link
            href="/cart"
            className="relative flex items-center"
            aria-label="Cart"
          >
            <svg
              className="w-6 h-6 text-gray-700 stroke-current stroke-1.5"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            {items.length > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 min-w-[16px] text-center leading-none flex items-center justify-center">
              {items.length}
            </span>
            )}
          </Link>
          <Link
            href="/favorites"
            className="flex items-center"
            aria-label="Favorites"
          >
            <svg
              className="w-6 h-6 text-gray-700 stroke-current stroke-1.5"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </Link>
          {user.isSignedIn ? (
            <UserButton
              userProfileMode="navigation"
              userProfileUrl="/user"
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-8 h-8",
                  userButtonAvatarImage: "w-8 h-8 rounded-full",
                },
              }}
            />
          ) : (
            <Link
              href="/sign-up"
              className="flex items-center bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-200 shadow-sm hover:shadow-md gap-2"
              aria-label="Sign up or Profile"
            >
              <span className="text-sm font-medium">Sign up</span>

              <svg
                className="w-5 h-5 stroke-current stroke-1.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </Link>
          )}
        </div>
      </div>
      <div className="flex py-3">
        <ul className="flex flex-wrap list-none p-0 m-0 space-x-4 sm:space-x-6 lg:space-x-8">
          <li>
            <Link
              href="/phones"
              className={`text-gray-600 text-sm font-medium hover:text-gray-900 py-1 ${
                pathname === "/phones"
                  ? "text-red-600 text-sm font-bold hover:text-red-800 py-1"
                  : ""
              }`}
            >
              Phones
            </Link>
          </li>
          <li>
            <Link
              href="/laptops"
              className={`text-gray-600 text-sm font-medium hover:text-gray-900 py-1 ${
                pathname === "/laptops"
                  ? "text-red-600 text-sm font-bold hover:text-red-800 py-1"
                  : ""
              }`}
            >
              Laptops
            </Link>
          </li>
          <li>
            <Link
              href="/headphones"
              className={`text-gray-600 text-sm font-medium hover:text-gray-900 py-1 ${
                pathname === "/headphones"
                  ? "text-red-600 text-sm font-bold hover:text-red-800 py-1"
                  : ""
              }`}
            >
              Headphones
            </Link>
          </li>
          <li>
            <Link
              href="/tablets"
              className={`text-gray-600 text-sm font-medium hover:text-gray-900 py-1 ${
                pathname === "/tablets"
                  ? "text-red-600 text-sm font-bold hover:text-red-800 py-1"
                  : ""
              }`}
            >
              Tablets
            </Link>
          </li>
          <li>
            <Link
              href="/accessories"
              className={`text-gray-600 text-sm font-medium hover:text-gray-900 py-1 ${
                pathname === "/accessories"
                  ? "text-red-600 text-sm font-bold hover:text-red-800 py-1"
                  : ""
              }`}
            >
              Accessories
            </Link>
          </li>
          <li>
            <Link
              href="/new"
              className={`text-gray-600 text-sm font-medium hover:text-gray-900 py-1 ${
                pathname === "/new"
                  ? "text-red-600 text-sm font-bold hover:text-red-800 py-1"
                  : ""
              }`}
            >
              New
            </Link>
          </li>
          <li>
            <Link
              href="/sale"
              className={`text-gray-600 text-sm font-medium hover:text-gray-900 py-1 ${
                pathname === "/sale"
                  ? "text-red-600 text-sm font-bold hover:text-red-800 py-1"
                  : ""
              }`}
            >
              Sale
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
