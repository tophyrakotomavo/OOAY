import React from "react";
import ImageWithTextBelow from "./ImageWithTextBelowProps";
import cacao from "@/image/Cacao-vu-de-dessus.png"
import tasse from "@/image/Tasse-Img-Maki.png"

const ImgWithTxtBelow = () => (
  <div className="flex md:flex-row sm:justify-evenly flex-col space-y-8 sm:-space-y-3 items-center ">
    <ImageWithTextBelow alt="Produit malgache. Cacao" img={cacao} paragraph="Matière première," text=" Découvrez les saveurs exotiques et authentiques de Madagascar grâce à notre sélection de matières premières premium. Notre entreprise transporte et vend du café, de la vanille, du cacao et du miel de qualité supérieure directement depuis les producteurs locaux de Madagascar vers l'Europe. Je suis fiers de soutenir les petits producteurs malgaches et de contribuer à leur développement économique grâce à un commerce équitable et responsable.
    "/>
    <ImageWithTextBelow alt="Produit malgache. Tasse avec image" img={tasse} paragraph="Matière artisanal," text=" Voyagez à travers les traditions malgaches grâce à notre sélection d'articles artisanaux uniques et authentiques. Nous avons à coeur de promouvoir l'artisanat local et de soutenir les artisans malgaches en leur offrant une vitrine pour leur savoir-faire. Je propose une variété de produits artisanaux tels que des tasses en céramique, des sacs en raphia ou en cuir, des décorations typiques malgaches, ainsi que des sculptures uniques.
    "/>
  </div>
);

export default ImgWithTxtBelow;