"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/assets/logo.png";
import NavLink from "./NavLink";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Material",
    path: "/Material",
  },
  {
    id: 3,
    name: "About Us",
    path: "/About",
  },
];

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <header className="flex py-3 font-montserrat items-center justify-between bg-blend-hard-lightbg bg-[#ffe5d4] px-5 lg:px-20 text-lg font-medium absolute top-0 z-50 w-full">
      <div className="flex items-center gap-5 ">
        <Link href="/" className="flex items-center gap-2">
          <div>
            <Image src={logo} alt="logo" className="w-12" />
          </div>
          <h1 className="font-extrabold text-[24px] bg-gradient-to-br from-[#BE4C03] to-[#E76F00] bg-clip-text text-transparent capitalize">
            zag eng family
          </h1>
        </Link>
      </div>
      <div>
        <nav className="gap-5 hidden lg:flex w-[392px] mr-12 text-black">
          {NavLinks.map((link) => {
            return (
              <NavLink key={link.id} href={link.path} > {link.name} </NavLink>
            );
          })}
        </nav>
      </div>
      <Link
        href="/JoinZag"
        className="hidden lg:block hover:brightness-110 duration-300 text-[24px] font-montserrar leading-7 font-medium tracking-wider "
      >
        <div className="bg-gradient-to-br from-[#BE4C03] to-[#E76F00] rounded-3xl px-6 py-2 text-white">
          Join us
        </div>
      </Link>
      <button
        onClick={() => setDrawerVisible(!drawerVisible)}
        className={`ml-auto mr-3 w-5 h-5 z-10 lg:hidden ${
          drawerVisible ? "fixed right-5" : "relative"
        }`}
      >
        <div className="relative h-3 [&>*]:w-5 [&>*]:absolute [&>*]:h-[2px] [&>*]:bg-[#BE4C03] [&>*]:duration-200 flex flex-col gap-1">
          <div
            className={`${
              drawerVisible ? "rotate-[45deg] top-[50%] translate-y-[-50%]" : ""
            } top-0`}
          />
          <div
            className={`${
              drawerVisible ? "opacity-0" : "opacity-1"
            } top-[50%] translate-y-[-50%]`}
          />
          <div
            className={`${
              drawerVisible
                ? "rotate-[-45deg] top-[50%] translate-y-[-50%]"
                : ""
            } bottom-0 `}
          />
        </div>
      </button>
      {/* black layout when drawer is openend */}
      <div
        onClick={() => setDrawerVisible(false)}
        className={`fixed w-screen h-screen bg-black top-0 left-0 bg-opacity-50 duration-300 lg:hidden ${
          drawerVisible ? "opacity-1" : "opacity-0 pointer-events-none"
        }`}
      />
      {/* mobile nav bar (drawer) */}
      <nav
        className={`h-screen fixed top-0 lg:hidden bg-black text-white bg-opacity-60 backdrop-blur-sm right-0 duration-300 flex flex-col gap-4 px-10 py-16 ${
          drawerVisible ? "translate-x-0 w-[60vw]" : "translate-x-96 w-0"
        }`}
      >
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Material">Material</Link>
        <Link href="/JoinZag">Join Us</Link>
      </nav>
    </header>
  );
};

export default Header;
