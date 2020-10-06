import React from 'react';
import './App.css';
import Footer from './components/footer';
import Places from './components/places';
import Services from './components/Services';
import WideScreen from './components/widescreen';
import Navbar from './Navbar/navbar';

function App() {
  return (
    
   <>
        <Navbar />
        <WideScreen/>
        <Services/>
        
        <Places/>
        
        <Footer/>
</>   
  );
}
export default App;
