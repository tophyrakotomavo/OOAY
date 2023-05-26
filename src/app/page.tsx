import React from 'react';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import Textone from '@/components/Textone';
import Header from '@/components/HeaderHome';
import SecondeCtx from '@/components/SecondeTxt';
import ImgWithTxtBelow from '@/components/ImgWithTxtBelow';
import ImgBlock from '@/components/ImgBlock';
import LastImgBlock from '@/components/ImageBlockTwo';
import UserBiography from '@/components/Biography';

export default function Home() {

  return (
    <div className='md:space-y-14 space-y-9'>
      <Header/>
      <section id="Saveur" className='md:space-y-10 space-y-6'>
        <Textone/>
        <Main/>
        <ImgBlock/>
      </section>
      <section id="Produits" className='md:space-y-10'>
        <SecondeCtx/>
        <ImgWithTxtBelow/>
        <LastImgBlock/> 
      </section>
      <section id="Biographie">
        <UserBiography/>  
      </section>
      <Footer/>
    </div>
  );
};
