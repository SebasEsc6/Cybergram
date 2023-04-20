import React from 'react'
import img_user from '../../assets/Multimedia/imgs/img_user.png'


function ItemMesagge() {
  return (
    <div className='img_user'>ItemMesagge
        <img src={img_user} alt='Imagen' className='CardIcon' />
        <label>
          <h3> Hola papi ya comiste</h3>
          <h5>Send message</h5>
        </label>
    </div>
  )
}

export default ItemMesagge