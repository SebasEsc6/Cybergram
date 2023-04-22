import React from 'react'
import img_user from '../../assets/Multimedia/imgs/img_user.png'
import image_11 from '../../assets/Multimedia/imgs/image_11.png'


function ItemMesagge() {
  return (
    <div className='ItemMesagge'>
        <div className='mensaje_propio'>
        <img src={img_user} alt="imagen" className='imagen_usuario' />
        
        <a> Hola ya comiste?</a>
        </div>
        
        <div className='mensaje_ajeno'>
        
        <a>Todavia no termino </a>
        <img src={image_11} alt="imagen" className='imagen_usuario' />
       
        
        </div>
        
        
      </div>

    
    
  )
}

export default ItemMesagge


