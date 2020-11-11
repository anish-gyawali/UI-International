import React from 'react';
import './App.css';
import CarouselSlide from './components/Carousel';
import Downtown from './components/downtown';
import Footer from './components/footer';
import Places from './components/places';
import Services from './components/Services';
import Navbar from './Navbar/navbar';

function App() {
  return (
    
   <>
        <Navbar />
        <CarouselSlide/>
        
        <Services/>
        <Downtown/>
        <Places/>
        
        <Footer/>
</>   
  );
}
export default App;
