import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import { ScrollAnimation } from "./ScrollAnimation";
import 'aos/dist/aos.css'
import Image from "next/image";

import Deco from "@/image/imageGalerie/Deco.png";
import Deco1 from "@/image/imageGalerie/Deco_avec_sac.png";
import Deco2 from "@/image/imageGalerie/Deco_avec_sac1.png";
import Deco3 from "@/image/imageGalerie/Deco_carre.png";
import Plaque from "@/image/imageGalerie/Plaque_The.png";
import Deco4 from "@/image/imageGalerie/Deco_et_porte_couteau.png";
import LaCroix from "@/image/imageGalerie/La_croix.png";
import LaCroix1 from "@/image/imageGalerie/La_croix_l_marron.png";
import LaCroix2 from "@/image/imageGalerie/La_croix_l_marron1.png";
import LaCroix3 from "@/image/imageGalerie/La_croix_mini.png";
import SacTsia from "@/image/imageGalerie/Sac_tsia.png";;
import TroisSac from "@/image/imageGalerie/trois_Sac_de_meme_couleur.png";
import SacTsia1 from "@/image/imageGalerie/Sac_tsia1.png";
import SacTsia2 from "@/image/imageGalerie/Poche_sac_tsia.png";
import Structure from "@/image/imageGalerie/Structure_en_bois.png";
import Strcture1 from "@/image/imageGalerie/Structure_en_bois_vue_de_face.png";
import Structure2 from "@/image/imageGalerie/Structure_en_bois_vue_profil.png";
import Structure3 from "@/image/imageGalerie/Structure_en_bois_vue_profil1.png";
import Structure4 from "@/image/imageGalerie/Structure_en_bois_vue_profilf.png"
import Bondoliere from "@/image/imageGalerie/Bondoliere_tsia.png";
import Bondoliere1 from "@/image/imageGalerie/Bondoliere_tsia_vue_profil.png";
import TroisTasses from "@/image/imageGalerie/Trois_tasses.png";
import TroisSacDiff from "@/image/imageGalerie/trois_Sac_en_couleur_different.png";
import BondoliereCuire from "@/image/imageGalerie/Bondoliere_vue_de_dessus.png";
import BondoliereCuire1 from "@/image/imageGalerie/Bondoliere_vue_de_face.png";
import BondoliereCuire2 from "@/image/imageGalerie/Bondoliere_vue_priofil.png";
import PlaquePapillon from "@/image/imageGalerie/plaque_papillon.png";
import Statut from "@/image/imageGalerie/Statut_en_bois.png";
import Statut1 from "@/image/imageGalerie/Statut_bois_blanc.png";
import Lamba from "@/image/imageGalerie/Lamba.png";
import cullierePetit from "@/image/imageGalerie/culliere_petit.png"
import image2 from "@/image/imageGalerie/received_1004600843981285.png";
import image3 from "@/image/imageGalerie/received_1032618544714847.png";
import image4 from "@/image/imageGalerie/received_1048781309818615.png";
import image5 from "@/image/imageGalerie/received_1052390439114354.png";
import image6 from "@/image/imageGalerie/received_1077393533703901.png";
import image7 from "@/image/imageGalerie/received_1108713320294221.png";
import image8 from "@/image/imageGalerie/received_1342959586590564.png";
import image9 from "@/image/imageGalerie/received_1393562134906789.png";
import image01 from "@/image/imageGalerie/received_1718517708638297.png";
import image02 from "@/image/imageGalerie/received_1817660452025538.png";
import image03 from "@/image/imageGalerie/received_2076157486082671.png";
import image04 from "@/image/imageGalerie/received_2422029864661474.png";
import image05 from "@/image/imageGalerie/received_3008513729281809.png";
import image06 from "@/image/imageGalerie/received_348442437774424.png";
import image07 from "@/image/imageGalerie/received_3531175807133917.png";
import image08 from "@/image/imageGalerie/received_3598195187105649.png";
import image09 from "@/image/imageGalerie/received_364579849354881.png";
import image11 from "@/image/imageGalerie/received_389924433603970.png";
import image12 from "@/image/imageGalerie/received_645794994381885.png";
import image13 from "@/image/imageGalerie/received_647787750898226.png";
import image14 from "@/image/imageGalerie/received_655558226766770.png";
import image15 from "@/image/imageGalerie/received_659811002685682.png";
import image16 from "@/image/imageGalerie/received_6822664424494451.png";
import image17 from "@/image/imageGalerie/received_895136298970300.png";
import image18 from "@/image/imageGalerie/received_880280860150622.png";
import image19 from "@/image/imageGalerie/received_863720138761292.png";
import image20 from "@/image/imageGalerie/received_821066333103946.png";
import image21 from "@/image/imageGalerie/received_774593127762453.png";
import image22 from "@/image/imageGalerie/received_769464688325438.png";
import image23 from "@/image/imageGalerie/received_733486425486011.png";

const imagesArray = [
  BondoliereCuire.src, BondoliereCuire1.src, BondoliereCuire2.src,
  Bondoliere.src, Bondoliere1.src,
  Deco.src, Deco1.src, Deco2.src, Deco3.src, Deco4.src,
  LaCroix.src, LaCroix1.src, LaCroix2.src, LaCroix3.src,
  SacTsia.src, SacTsia1.src, SacTsia2.src,
  Strcture1.src, Structure.src, Structure2.src, Structure3.src, Structure4.src,
  TroisSac.src, TroisTasses.src, TroisSacDiff.src,
  Plaque.src, cullierePetit.src, Statut1.src, PlaquePapillon.src, Plaque.src, 
  image01.src, Lamba.src, Statut.src,
  image2.src, image3.src, image4.src, image5.src, image6.src, image7.src, image8.src,
  image9.src, image02.src, image03.src, image04.src, image05.src, image06.src, image07.src,
  image09.src, image11.src, image12.src, image03.src, image04.src, image05.src, image06.src,
  image07.src, image08.src, image09.src, image13.src, image14.src, image15.src, image16.src,
  image17.src, image18.src, image19.src, image20.src, image21.src, image22.src, image23.src,
];

const ImageGalerie = () => {
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
    <div>
      <ScrollAnimation/>
      <div className="columns-5 gap-3 m-auto w-5/6">
      {imagesArray.map((src, index) => (
        <Image data-aos="fade-down"
          className="hover:shadow-md hover:shadow-slate-600 hover:cursor-pointer"
          src={src}
          onClick={() => openImageViewer(index)}
          width={600}
          height={600}
          key={src}
          style={{ margin: "12px" }}
          alt="Art Malagasy"
        />
      ))}
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
    </div>
  );
};

export default ImageGalerie;
