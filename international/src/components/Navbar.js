import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
      if(window.innerWidth <= 960){
        setButton(false);
      }else{
        setButton(true);
      }
    };

    useEffect(() => {
      showButton()
    }, [])

    window.addEventListener('resize',showButton);

    return(
        <>
         <nav className='navbar'>
             <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                   <img src={require('../assets/southeastern-logo.png')}/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                   <i className={click ? 'fas fa-times' : 'fas fa-bars'}/> 
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                          Home International Students  
                        </Link>  
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                          Students Services for International Students 
                        </Link>  
                    </li>
                    <li className='nav-item'>
                        <Link to='/fair' className='nav-links' onClick={closeMobileMenu}>
                          Cultural Fairs and Venue  
                        </Link>  
                    </li>
                    <li className='nav-item'>
                        <Link to='/bank' className='nav-links' onClick={closeMobileMenu}>
                          Need a bank account 
                        </Link>  
                    </li>
                    
                </ul>
                
             </div>
         </nav>
        </>
    )
}

export default Navbar;


