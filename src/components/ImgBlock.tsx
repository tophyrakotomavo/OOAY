import React from "react";
import ImageBlockProps from "./props/ImageBlockProps";
import Artisanal from "@/image/Artisanal-malgache.png";

const ImgBlock = () =>{
  return(
    <div className="w-full h-96">
      <ImageBlockProps img={Artisanal} alt=""/>
    </div>
  );
};

export default ImgBlock;