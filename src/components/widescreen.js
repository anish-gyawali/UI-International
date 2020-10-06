import React from 'react';
import '../components/component.css';


function WideScreen(){
    return(
        <div className='hero-container'>
            <video src={require('../assets/homepage.mp4')} autoPlay loop muted/>
                      
        </div>
    )
}

export default  WideScreen;

