import React from "react";
import Navbar from "./Navbar";

const HeaderContact = () => (
  <div>
    <Navbar/>
    <div id="headerContact" className="sticky md:bg-cover bg-contain md:h-screen h-80 backdrop-opacity-20">
      <h1 className="font-serif text-white text-center sm:text-5xl text-2xl">
        OOAY
      </h1>
      <div className="content-center md:my-52 my-14 pb-10 md:pb-36 p-2">
        <div className="font-serif md:text-5xl text-2xl text-center text-white">
          Venez découvrir nos matières premières<br/>d&apos;exception pour sublimer vos créations<br/> culinaires.
        </div>
      </div>
    </div>
  </div>
);

export default HeaderContact;
