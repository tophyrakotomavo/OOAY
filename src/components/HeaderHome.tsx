import React from "react";
import Navbar from "./Navbar";
import Menus from "./Menus";

const HeaderHome = () => {
  
  return(
    <div >
      <Navbar/>
      <div id="headerHome" className='sm:h-screen h-80'>
        <div className="justify-end hidden sm:flex">
          <Menus/>  
        </div>
        <h1 className="font-serif text-white text-center sm:text-5xl text-2xl">
          OOAY
        </h1>
        <div className="content-center md:my-52 my-14 pb-10 p-2 md:pb-36">
          <div className="font-serif md:text-5xl text-2xl text-center text-white">
            Venez découvrir nos matières premières<br/>d&apos;exception pour sublimer vos créations<br/> culinaires.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;

