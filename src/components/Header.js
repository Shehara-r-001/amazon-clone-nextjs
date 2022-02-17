import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  return (
    <header>
      {/* top container */}
      <div className="flex items-center bg-amazon_blue p-1 py-2 flex-grow justify-between">
        <div className="mt-2 flex items-center sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={120}
            height={30}
            alt="amazon-logo"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex bg-yellow-500 hover:bg-yellow-400 items-center flex-grow h-10 rounded-md cursor-pointer">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-3"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-4 mx-5 whitespace-nowrap">
          <div onClick={signIn} className="sublinks">
            <p>Hello Strider!</p>
            <p className="font-extrabold md:text-sm">Account & lists</p>
          </div>
          <div className="sublinks">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative sublinks flex items-center">
            <span className="absolute top-0 right-0 h-4 w-4 bg-yellow-500 font-bold rounded-full text-center md:right-12">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm">
              Bascket
            </p>
          </div>
        </div>
      </div>

      {/* bottom container */}
      <div className="flex items-center text-white bg-amazon_blue-light text-sm space-x-3 p-1">
        <p className="sublinks flex items-center">
          <MenuIcon className="h-6 mr-1" /> All
        </p>
        <p className="sublinks">Today&apos;s deals</p>
        <p className="sublinks">Prime Video</p>
        <p className="sublinks">Amazon Business</p>
        <p className="sublinks">Gift Cards</p>
        <p className="sublinks hidden lg:inline-flex">Registry</p>
        <p className="sublinks hidden lg:inline-flex">Sell</p>
      </div>
    </header>
  );
}

export default Header;
