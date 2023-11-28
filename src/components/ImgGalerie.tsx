import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import Image from "next/image";

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
import PlaquePapillon from "@/image/imageGalerie/plaque papillon.jpeg";
import Statut from "@/image/imageGalerie/Statut en bois.jpeg";
import Lamba from "@/image/imageGalerie/Lamba.jpeg";
import cullierePetit from "@/image/imageGalerie/culliere_petit.jpeg"
import image2 from "@/image/imageGalerie/received_1004600843981285.jpeg";
import image3 from "@/image/imageGalerie/received_1032618544714847.jpeg";
import image4 from "@/image/imageGalerie/received_1048781309818615.jpeg";
import image5 from "@/image/imageGalerie/received_1052390439114354.jpeg";
import image6 from "@/image/imageGalerie/received_1077393533703901.jpeg";
import image7 from "@/image/imageGalerie/received_1108713320294221.jpeg";
import image8 from "@/image/imageGalerie/received_1342959586590564.jpeg";
import image9 from "@/image/imageGalerie/received_1393562134906789.jpeg";
import image01 from "@/image/imageGalerie/received_1718517708638297.jpeg";
import image02 from "@/image/imageGalerie/received_1817660452025538.jpeg";
import image03 from "@/image/imageGalerie/received_2076157486082671.jpeg";
import image04 from "@/image/imageGalerie/received_2422029864661474.jpeg";
import image05 from "@/image/imageGalerie/received_3008513729281809.jpeg";
import image06 from "@/image/imageGalerie/received_348442437774424.jpeg";
import image07 from "@/image/imageGalerie/received_3531175807133917.jpeg";
import image08 from "@/image/imageGalerie/received_3598195187105649.jpeg";
import image09 from "@/image/imageGalerie/received_364579849354881.jpeg";
import image11 from "@/image/imageGalerie/received_389924433603970.jpeg";
import image12 from "@/image/imageGalerie/received_645794994381885.jpeg";
import image13 from "@/image/imageGalerie/received_647787750898226.jpeg";
import image14 from "@/image/imageGalerie/received_655558226766770.jpeg";
import image15 from "@/image/imageGalerie/received_659811002685682.jpeg";
import image16 from "@/image/imageGalerie/received_6822664424494451.jpeg";
import image17 from "@/image/imageGalerie/received_895136298970300.jpeg";
import image18 from "@/image/imageGalerie/received_880280860150622.jpeg";
import image19 from "@/image/imageGalerie/received_863720138761292.jpeg";
import image20 from "@/image/imageGalerie/received_821066333103946.jpeg";
import image21 from "@/image/imageGalerie/received_774593127762453.jpeg";
import image22 from "@/image/imageGalerie/received_769464688325438.jpeg";
import image23 from "@/image/imageGalerie/received_733486425486011.jpeg";

const imagesArray = [
  BondoliereCuire.src, BondoliereCuire1.src, BondoliereCuire2.src,
  Bondoliere.src, Bondoliere1.src,
  Deco.src, Deco1.src, Deco2.src, Deco3.src, Deco4.src,
  LaCroix.src, LaCroix1.src, LaCroix2.src, LaCroix3.src,
  SacTsia.src, SacTsia1.src, SacTsia2.src,
  Strcture1.src, Structure.src, Structure2.src, Structure3.src, Structure4.src,
  TroisSac.src, TroisTasses.src, TroisSacDiff.src,
  Plaque.src, cullierePetit.src,
  PlaquePapillon.src, Plaque.src, image01.src, Lamba.src, Statut.src,
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
