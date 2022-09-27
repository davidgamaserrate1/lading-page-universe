import React from "react";
import './resources/styles.css'

import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Featured from "./components/featured";
 import BackgroundImg from './resources/images/background.jpg'



//const urlImg = './resources/images/' ;

const App = () => {
  return (
    
    <div className="App">
      <>
      <Header />
      <Featured />
      <div className="BodyContent">        
        <div style={{ backgroundImage:`url(${BackgroundImg})`,  backgroundColor: '#3c3c3c', height: '1500px' }}> </div>
        
      </div>
        <Footer />
      </>
      
    </div>
 
 
    
  );
}

export default App;
