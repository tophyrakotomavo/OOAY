import React from "react";
import Link from "next/link";
 
const ScrollBar = () => {

  return(
    <div className="flex justify-evenly w-64 absolute text-white text-xs pt-2">
      <Link href="#Saveur" >Saveurs</Link>
      <Link href="#Poduit" >Produits</Link>
      <Link href="#Biographie">Biographie</Link>
    </div>
  );
};

export default ScrollBar;