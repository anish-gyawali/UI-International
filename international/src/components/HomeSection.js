import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HomeSection.css';

function HomeSection(){
    return(
        <div className='hero-container'>
            <video src={require('../assets/videos/homepage.mp4')} autoPlay loop muted/>
            <h1>Hey International Students</h1>
            <p>you may need help with...</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET Started</Button>
               
            </div>
        </div>
    )
}

export default HomeSection

