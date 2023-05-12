import React from 'react';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import Ctx from '@/components/Textone';
import Header from '@/components/HeaderImg';
import SecondeCtx from '@/components/SecondeTxt';
import ImgWithTxtBelow from '@/components/ImgWithTxtBelow';
import ImgBlock from '@/components/ImgBlock';
import LastImgBlock from '@/components/ImageBlockTwo';
import UserBiography from '@/components/Biography';

export default function Home() {

  return (
    <div className='space-y-16'>
      <Header/>
      <section id="Saveur" className='space-y-16'>
        <Ctx/>
        <Main/>
        <ImgBlock/>
      </section>
      <section id="Produits" className='space-y-16'>
        <SecondeCtx/>
        <ImgWithTxtBelow/>
        <LastImgBlock/> 
      </section>
      <section id="Biographie" className='space-y-16'>
        <UserBiography/>  
      </section>
      <Footer/>
    </div>
  );
};
