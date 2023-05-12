import React from "react";
import Image from "next/image";
import User from "@/image/image 7.png"

const UserBiography = () => {
  return(
    <div className="flex flex-row justify-evenly">
      <div className="items-center hidden md:block">
        <Image src={User} alt="Sac a main" className="rounded-full"/>
      </div>
      <div className="w-2/3 space-y-5">
        <h1 className="text-bold text-5xl" id="UserName">Mariano</h1>
        <p className="font-bold text-lg">Fondatrice de OOAY</p>
        <span className="text-slate-900 space-y-6 text-xs">
          <p>
            Je m&apos;appelle Mariano et j&apos;ai été mère au foyer pendant plusieurs années. Cependant, ma passion pour les produits malgaches et le commerce équitable a fini par prendre le dessus. J&apos;ai décidé de créer mon propre business en tant que transporteur et vendeur de matières premières de qualité supérieure ainsi que d&apos;articles artisanaux malgaches uniques.
          </p>
          <p>
            Je suis fière de soutenir directement les petits producteurs malgaches et les artisans locaux, tout en contribuant à leur développement économique. Grâce à mon engagement envers le commerce équitable et mon soutien direct, j&apos;ai réussi à créer une entreprise florissante et respectueuse de l&apos;environnement. Je suis fière de promouvoir la richesse culturelle de Madagascar et de permettre aux gens de découvrir les saveurs et l&apos;artisanat uniques de cette île merveilleuse.
          </p>
          <p>
            Je crois que chacun peut contribuer positivement au monde qui nous entoure, quel que soit son parcours de vie antérieur. En suivant ma passion, j&apos;ai pu créer une entreprise qui me permet de poursuivre mes intérêts personnels tout en ayant un impact positif sur la vie des gens de Madagascar.
          </p>
        </span>
      </div>
    </div>
  );
};

export default UserBiography;