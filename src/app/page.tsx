import React from 'react';
import ImgAndTxt from '@/components/ImgAndTxt';
import Footer from '@/components/Footer';
import Textone from '@/components/Textone';
import Header from '@/components/HeaderHome';
import SecondeCtx from '@/components/SecondeTxt';
import ImgWithTxtBelow from '@/components/ImgWithTxtBelow';
import ImgBlock from '@/components/ImgBlock';
import ImageBlockTwo from '@/components/ImageBlockTwo';
import Biography from '@/components/Biography';

const Home = () => (
  <div className='md:space-y-14 space-y-9'>
    <Header/>
    <section id="Saveur" className='md:space-y-10 space-y-6'>
      <Textone/>
      <ImgAndTxt/>
      <ImgBlock/>
    </section>
    <section id="Produits" className='md:space-y-10 space-y-6'>
      <SecondeCtx/>
      <ImgWithTxtBelow/>
      <ImageBlockTwo/> 
    </section>
    <section id="Biographie">
      <Biography/>  
    </section>
    <Footer/>
  </div>
);

export default Home;
