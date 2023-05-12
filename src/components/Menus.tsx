import React from "react";
import Link from "next/link";
 
const Menus = () => (
  <div className="flex justify-evenly w-64 absolute text-white text-xs pt-2">
    <Link href="#Saveur" >Saveurs</Link>
    <Link href="#Produits" >Produits</Link>
    <Link href="#Biographie">Biographie</Link>
  </div>
);

export default Menus;