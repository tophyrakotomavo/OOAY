import React from "react";
import ImageBlockProps from "./props/ImageBlockProps";
import Rafia from "@/image/Rafia-bag.png";

const ImageBlockTwo = () => (
  <div className="w-full h-96">
    <ImageBlockProps img={Rafia} alt=""/>
  </div>
);

export default ImageBlockTwo;