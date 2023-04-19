import React, { useState } from 'react'


function CardPages(props) {

  return (
    <div className='Cardpage'>
    <button className='btn-Card'>
    <img src={props.icon} alt='Imagen' className='CardIcon' />
    <h1>{props.text}</h1>
    </button>
    </div>

  )
}

export default CardPages