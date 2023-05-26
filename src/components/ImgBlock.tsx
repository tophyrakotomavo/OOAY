import React from "react";
import ImageBlockProps from "./props/ImageBlockProps";
import Artisanal from "@/image/Artisanal-malgache.png";

const ImgBlock = () => (
  <div className="w-full h-96">
    <ImageBlockProps img={Artisanal} alt="Un tapis avec doigt de personne"/>
  </div>
)

export default ImgBlock;