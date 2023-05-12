import React from "react";
import Navbar from "./Navbar";
import Menus from "./Menus";

const HeaderImg = () => {
  return(
    <div>
      <Navbar/>
      <div id="headerImg" className="relative sm:h-screen h-80">
        <div className="justify-end hidden sm:flex">
          <Menus/>  
        </div>
        <div className="text-white flex items-center flex-col md:space-y-48 sm:space-y-40 space-y-28">
          <h1 className="font-serif font-normal text-center sm:text-5xl sm:pt-24">OOAY</h1> 
          <div  className="flex items-center text-center">
            <span className="font-serif sm:text-5xl">
              Venez découvrir nos matières premières<br/>d&apos;exception pour sublimer vos créations<br/> culinaires.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderImg;
