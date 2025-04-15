import React from "react";

interface NavLinkProps {
  title: string;
  href: string;
  isMobile: boolean;
}

function NavLink({
  title,
  href,
  isMobile
}: NavLinkProps) {
  return (
    <a 
      className={
        `group relative px-4 ${isMobile ? "px-3" : "py-2"} rounded-xl text-gray-700 
         font-medium transition-colors duration-200`
      }
      href={href}
    >
      <span>{title}</span>
    </a>
  );
}

export default NavLink;