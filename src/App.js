import React from "react";
import './resources/styles.css'

import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Featured from "./components/featured";
import BackgroundImg from './resources/images/background.jpg'
import VenueNfo from "./components/venueInfo"; 
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";

const App = () => {
  return (
    
    <div className="App" style={{ backgroundImage:`url(${BackgroundImg})`}} >      
      <>
      <Header />
      <Featured />       
      <>
      <VenueNfo/>
      </>
      <>
        <Highlights/>
      </>
      <>
        <Pricing/>
      </>
      <>
        <Location/>
      </>

        {/* <div style={{ backgroundImage:`url(${BackgroundImg})`,  backgroundColor: '#3c3c3c', height: '1500px' }}> </div> */}
        <Footer />
      </>

      
    </div>
 
 
    
  );
}

export default App;
