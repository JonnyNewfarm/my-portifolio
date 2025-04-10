import Link from "next/link";
import React from "react";
import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  return (
    <div className="bg-transparent px-10 py-8 flex items-center fixed z-50 w-full justify-between">
      <div>
        <img src="/logo1.svg" alt="JN Logo" className="h-20" />
      </div>
      <BurgerMenu />
      <div className="hidden lg:block">
        <div className="flex flex-nowrap text-white gap-x-10 text-xl">
          <Link href={""} className="nav-link">
            My work
          </Link>
          <Link href={""} className="nav-link">
            About
          </Link>
          <Link href={""} className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
