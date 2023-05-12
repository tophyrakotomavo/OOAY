import React from "react";
import Image, { StaticImageData } from "next/image";

type tprops = {
  img: StaticImageData,
  paragraph: string,
  text: string
  alt: string
};

const ImageWithTextBelowProps: React.FC<tprops> = (props) => {
  const { img, paragraph, text, alt } = props;

  return(
    <div className="space-y-5 w-96">
      <Image alt={alt} src={img} width={400} height={400} className="rounded-lg"/>
      <div className="text-xs ">
        <span className="font-bold">{paragraph}</span>
        <span className="text-black">{text}</span>
      </div>
    </div>
  );
};

export default ImageWithTextBelowProps;
