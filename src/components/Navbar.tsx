import React from "react";
import Link from "next/link";

const menus = [
  { url:"/", text:"Accueil" },
  { url:"/galeries", text:"Galeries"},
  { url:"/contact", text:"Contact"}
];

export default function Navbar() {
  const renderMenus = menus.map ((menu) => (
    <Link className=" text-white text-xs font-normal" 
      href={menu.url} key={menu.url}>
      {menu.text}
    </Link>
  ))

  return(
    <div id="NavBar" className="p-2 w-full h-10 text-white text-center sm:text-left items-center">
      <div className="space-x-2 sm:space-x-5">
        {renderMenus}
      </div>
    </div>
  );
};
