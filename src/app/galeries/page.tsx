"use client"
import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import Image from "next/image";
import Footer from "@/components/Footer";
import HeaderGalerie from "@/components/HeaderGalerie";

import Deco from "@/image/imageGalerie/Deco.jpg";
import Deco1 from "@/image/imageGalerie/Deco_avec_sac.jpg";
import Deco2 from "@/image/imageGalerie/Deco_avec_sac1.jpg";
import Deco3 from "@/image/imageGalerie/Deco_carre.jpg";
import Plaque from "@/image/imageGalerie/Plaque_The.jpg";
import Deco4 from "@/image/imageGalerie/Deco_et_porte_couteau.jpg";
import LaCroix from "@/image/imageGalerie/La_croix.jpg";
import LaCroix1 from "@/image/imageGalerie/La_croix_l_marron.jpg";
import LaCroix2 from "@/image/imageGalerie/La_croix_l_marron1.jpg";
import LaCroix3 from "@/image/imageGalerie/La_croix_mini.jpg";
import SacTsia from "@/image/imageGalerie/Sac_tsia.jpg";;
import TroisSac from "@/image/imageGalerie/trois_Sac_de_meme_couleur.jpg";
import SacTsia1 from "@/image/imageGalerie/Sac_tsia1.jpg";
import SacTsia2 from "@/image/imageGalerie/Poche_sac_tsia.jpg";
import Structure from "@/image/imageGalerie/Structure_en_bois.jpg";
import Strcture1 from "@/image/imageGalerie/Structure_en_bois_vue_de_face.jpg";
import Structure2 from "@/image/imageGalerie/Structure_en_bois_vue_profil.jpg";
import Structure3 from "@/image/imageGalerie/Structure_en_bois_vue_profil1.jpg";
import Structure4 from "@/image/imageGalerie/Structure_en_bois_vue_profilf.jpg"
import Bondoliere from "@/image/imageGalerie/Bondoliere_tsia.jpg";
import Bondoliere1 from "@/image/imageGalerie/Bondoliere_tsia_vue_profil.jpg";
import TroisTasses from "@/image/imageGalerie/Trois_tasses.jpg";
import TroisSacDiff from "@/image/imageGalerie/trois_Sac_en_couleur_different.jpg";
import BondoliereCuire from "@/image/imageGalerie/Bondoliere_vue_de_dessus.jpg";
import BondoliereCuire1 from "@/image/imageGalerie/Bondoliere_vue_de_face.jpg";
import BondoliereCuire2 from "@/image/imageGalerie/Bondoliere_vue_priofil.jpg";

const imagesArray = [
  BondoliereCuire.src, BondoliereCuire1.src, BondoliereCuire2.src,
  Bondoliere.src, Bondoliere1.src,
  Deco.src, Deco1.src, Deco2.src, Deco3.src, Deco4.src,
  LaCroix.src, LaCroix1.src, LaCroix2.src, LaCroix3.src,
  SacTsia.src, SacTsia1.src, SacTsia2.src,
  Strcture1.src, Structure.src, Structure2.src, Structure3.src, Structure4.src,
  TroisSac.src, TroisTasses.src, TroisSacDiff.src,
  Plaque.src,
];

const Page = () => {
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
        <HeaderGalerie/>
        <div className="text-center my-8">
          <span id="txtGalerie" className="font-bold sm:text-4xl text-xl">Galeries</span>
        </div>
        <div className="columns-5 gap-3 m-auto w-5/6">
          {imagesArray.map((src, index) => (
            <Image
              className="hover:shadow-md hover:shadow-slate-600 hover:cursor-pointer"
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

export default Page;
