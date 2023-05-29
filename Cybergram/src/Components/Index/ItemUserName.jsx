import React from 'react'
import img_user from '../../assets/Multimedia/imgs/img_user.png'
import "../../Pages/InChatPage/InChatPage.css"

function ItemUserName() {
  return (
    <div className='itemusername'>
      <img src={img_user} alt="imagen_usuario" />
      <label className='label_totono'>Totono.39</label>
     
    </div>
  )
}

export default ItemUserName