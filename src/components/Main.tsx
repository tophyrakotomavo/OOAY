import React from "react";
import Image from "next/image";
import Cup from "@/image/Cup.png"

const Main = () => (
  <div className="flex md:flex-row justify-center flex-col space-y-3 w-full  space-x-9">
    <div className="flex justify-center">
      <Image alt="" src={Cup} width={450} height={460} className="rounded-lg"/>
    </div>
    <div className="flex flex-col sm:space-y-10 space-y-5 w-96 text-xs justify-center">
      <p>
        Mon entreprise se spécialise dans le transport et la vente de matières premières de qualité supérieure en provenance de Madagascar vers l&apos;Europe. Je propose une sélection de produits tels que du café, de la vanille, du cacao et du miel de Madagascar, réputés pour leur goût exceptionnel et leur qualité premium. Je travaille en étroite collaboration avec les producteurs locaux pour garantir la qualité de nos produits.
      </p>
      <p>
        En plus de notre gamme de matières premières, je propose également une variété de produits artisanaux venant de Madagascar, tels que des tasses en céramique, des articles en cuir et en raphia, des décorations typiques malgaches et des sculptures. Nos produits artisanaux sont fabriqués à la main par des artisans talentueux et passionnés, qui transmettent leur savoir-faire de génération en génération. Chaque article est unique et raconte une histoire.
      </p>
      <p>
        Je suis fiers de soutenir les producteurs locaux de Madagascar et de contribuer à leur développement économique. Je suis convaincus que la qualité de mes produits provient de l&apos;engagement de nos partenaires locaux et de la passion qui les anime. Je mets tout en oeuvre pour garantir une logistique efficace et rapide pour que nos clients européens puissent profiter de la richesse et de la diversité des produits malgaches.
      </p>
    </div>
  </div>
);

export default Main;

