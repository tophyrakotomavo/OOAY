"use client"
import Footer from "@/components/Footer";
import HeaderGalerie from "@/components/HeaderGalerie";
import ImageGalerie from "@/components/ImgGalerie";

const Page = () => (
  <div>
    <div>
      <HeaderGalerie/>
      <div className="text-center my-8">
        <span id="txtGalerie" className="font-bold sm:text-4xl text-xl">Galeries</span>
      </div>
      <ImageGalerie/>
    </div>
    <div className="mt-5">
      <Footer/>
    </div>
  </div>
);

export default Page;
