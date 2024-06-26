"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={
        isActive
          ? " hover:opacity-50 duration-300  text-[24px] font-medium "
          : "hover:opacity-50 duration-300 text-gray  text-[24px] font-medium "
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;


