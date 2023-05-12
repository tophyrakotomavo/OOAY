import React from "react";
import Image, { StaticImageData } from "next/image";

const ImageBlockProps: React.FC<{img: StaticImageData, alt: string}> = (props) => {
  const { img, alt }  = props;
  
  return(
    <div>
      <Image alt={alt} src={img} className="w-full h-96 object-cover opacity-90"/>
    </div>
  );
};

export default ImageBlockProps;