import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Selu events!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={require('../assets/bank.png')}
              text='Help for bank'
              label='selu lions'
              path='/bank'
             />
            <CardItem
              src={require('../assets/housing.png')}
              text='regarding housing'
              label='housing'
              path='/housing'
            />
         
         
            <CardItem
              src={require('../assets/event.png')}
              text='regarding event'
              label='event'
              path='/event'
            />
            <CardItem
              src={require('../assets/iso.png')}
              text='iso'
              label='iso'
              path='/iso'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;