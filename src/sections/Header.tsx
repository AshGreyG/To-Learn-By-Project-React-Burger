import React, { useState } from "react";

import Logo from "../components/Logo.tsx";
import IconButton from "../components/IconButton.tsx";
import NavLink from "../components/NavLink.tsx";
import { Menu, ShoppingCart, User, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navLinks = [
    { title: "Home",    href: "#" },
    { title: "Menu",    href: "#" },
    { title: "Service", href: "#" },
    { title: "Offers",  href: "#" },
    { title: "Rewards", href: "#" }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300`}>
      <div className={`max-w-7xl mx-auto px-4`}>
        <div className={`flex items-center justify-between`}>
          <Logo />

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center space-x-1`}>
            {navLinks.map((link) => (
              <NavLink />
            ))}
          </div>

          {/* Right Section */}
          <div className={`flex items-center gap-6`}>
            <IconButton icon={ShoppingCart} count={1}/>
            <IconButton icon={User}/>
            <IconButton 
              icon={isOpen ? X : Menu}
              className={`lg:hidden`}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={
          `lg:hidden fixed inset-0 bg-white/80 backdrop-blur-lg transition-all duration-300
           ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`
        }>
          <nav className={`bg-white/90 border-t`}>
            <div className={`max-w-7xl mx-auto px-4 py-2 flex flex-col gap-2`}>
              {navLinks.map((link) => (
                <NavLink />
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;