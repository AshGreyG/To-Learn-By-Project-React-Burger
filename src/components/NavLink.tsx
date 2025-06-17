import React from "react";

interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
  isMobile: boolean;
}

function NavLink({ title, href, isMobile, ...props }: NavLinkProps) {
  return (
    <a
      className={`group relative px-4 ${
        isMobile ? "px-3" : "py-2"
      } rounded-xl text-gray-700 
         font-medium transition-colors duration-200 cursor-pointer`}
      href={href}
      {...props}
    >
      <span
        className={`relative z-10 group-hover:text-red-500 transition-colors duration-300`}
      >
        {title}
      </span>

      {!isMobile && (
        <div
          className={`absolute inset-0 bg-red-50 rounded-xl scale-90 opacity-0 group-hover:scale-100
           group-hover:opacity-100 transition-all duration-300`}
        ></div>
      )}
    </a>
  );
}

export default NavLink;
