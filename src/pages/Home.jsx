import React from 'react'
import Navbar from '../component/Navbar';
import HeroPlantaTaza from '../component/HeroPlantaTaza';
import CafeMejoresCondiciones from '../component/CafeMejoresCondiciones';
import Novedades from '../component/Novedades';
import PreguntasFrecuentes from '../component/PreguntasFrecuentes';
import FeatureSection from '../component/FeatureSection';
import SplitTwoToneContact from '../component/SplitTwoToneContact';
import { Context } from '../context/ContextCoffees';
import Footer from '../component/Footer';
import DerechosReservados from '../component/DerechosReservados';




const Home = () => {

  return (
    <div>
      <Context />
      <Navbar />
      <HeroPlantaTaza />
      <CafeMejoresCondiciones />
      <Novedades />
      <PreguntasFrecuentes />
      <FeatureSection />
      <SplitTwoToneContact />
      <Footer />
      <DerechosReservados />
    </div>
  )
}

export default Home