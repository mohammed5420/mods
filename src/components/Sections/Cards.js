import React from 'react';
import Card from './Card';
import img1 from '../../imgs/andapp.svg';
import img2 from '../../imgs/webapp.svg';
import img3 from '../../imgs/desktop.svg';
import img4 from '../../imgs/game.svg';
import {Projects} from '../Data';

const Cards = () => {
    
    const cardsInfo = [
        
        {
            id : 1,
            title : 'android apps',
            img : img1,
        },
        {
            id : 2,
            title : 'web apps',
            img : img2,
        },
        {
            id : 3,
            title : 'desktop programms',
            img : img3,
        },
        {
            id : 4 ,
            title : 'gaming development',
            img : img4,
        },
    ]
        
    const newCards = cardsInfo.map(card => {
        card.body = Projects[card.id - 1].shortDisc
        return {
            card
        };
    })


    return (
        <div className="cards-container">
            {newCards.map(card => {
               return <Card data = {card.card} key={Math.random()* 100}/>
            })}
        </div>
    )
}

export default Cards
