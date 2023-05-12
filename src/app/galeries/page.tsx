"use client"
import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import Image from "next/image";
import HeaderImg from "@/components/HeaderImg";
import Footer from "@/components/Footer";
import Pict from "@/image/raisin-sante.jpg"
import img from '@/image/Artisanal-malgache.png';
import Img from '@/image/Rafia-bag.png'
import Smailing from "@/image/smiling-busi.jpg"

const imagesArray = [
  img.src, Img.src, Smailing.src, Img.src, Pict.src, Img.src, Img.src, Smailing.src, Img.src
];

const Test = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: React.SetStateAction<number>) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return(
    <>
      <div>
        <HeaderImg/>
        <div className="text-center my-8">
          <span id="txtGalerie" className="font-bold sm:text-4xl text-xl">Galeries</span>
        </div>
        <div className="columns-3 gap-3 m-auto w-5/6">
          {imagesArray.map((src, index) => (
            <Image
              src={src}
              onClick={() => openImageViewer(index)}
              width={600}
              height={600}
              key={src}
              style={{ margin: "12px" }}
              alt=""
            />
          ))}
        </div>
      </div>
      {isViewerOpen && (
        <ImageViewer src={imagesArray}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.7)"
          }}
          closeOnClickOutside={true}
        />
      )}
      <div className="mt-5">
          <Footer/>
      </div>
    </>
  );
};

export default Test;
