import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CardPages(props) {


  
const navigate = useNavigate();

const handleClick = (event) => {
  navigate(props.route);
};


  return (
    <div className='Cardpage'>
    <button className='btn-Card'>
    <img src={props.icon} alt='Imagen' className='CardIcon'  onClick={handleClick}/>
    <h1>{props.text}</h1>
    </button>
    </div>

  )
}

export default CardPages