"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { GrTechnology } from "react-icons/gr";

const menuItems = ["Locations", "Tech Stack", "Students", "How We Hire"];

const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [position, setPosition] = useState(0);

  return (
    <Navbar
      shouldHideOnScroll
      isBlurred={position > 50}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      className={`p-2 ${
        position <= 50
          ? "text-white transition-background duration-1000 bg-transparent ease-in-out"
          : "animate-fade-in"
      }`}
      onScrollPositionChange={(position: number) => setPosition(position)}
    >
      <NavbarBrand>
        <GrTechnology className="w-8 h-8 mr-1" />
        <p className="font-bold text-inherit text-xl">ACME</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              color="foreground"
              className="text-lg mx-2 hover:text-transparent-white"
              href="#"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            href="#"
            className={`text-lg mt-1 hover:text-transparent-white ${
              position < 50 ? "text-white text-opacity-70" : ""
            }`}
          >
            All Jobs
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default AppNavbar;
